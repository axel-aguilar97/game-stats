import { useEffect, useState } from "react";

import api from "../../Api";

import Servers from "../../pages/servers/Servers";

const ServerData = () => {
  const [servers, setServers] = useState<Array<any>>([]);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await api.get("/api/servers");
        setServers(response.data);
      } catch (error: any) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };

    fetchServers();
  }, []);

  useEffect(() => {
    const filteredResults = servers.filter(
      (server) =>
        server.gameType.toLowerCase().includes(search.toLowerCase()) ||
        server.ip.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [servers, search]);

  return <Servers servers={searchResults} />;
};

export default ServerData;
