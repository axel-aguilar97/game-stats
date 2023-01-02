import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../Api";

import ServerDetails from "../../pages/servers/ServerDetails";

interface IState {
  svConnect: string;
  svGame: string;
  svName: string;
  svMapname: string;
  svNumplayers: number;
  svNumbots: number;
  svMaxplayers: number;
  svIsPassword: boolean;
  svIsSecure: number;
  svPlayers: Array<any>;
  svBots: Array<any>;
  svPing: number;
}

const ServerDataDetails = () => {
  const { ip } = useParams<string>();
  const [serverDataDetails, setServerDataDetails] = useState<IState>({
    svConnect: "",
    svGame: "",
    svName: "",
    svMapname: "",
    svNumplayers: 0,
    svNumbots: 0,
    svMaxplayers: 0,
    svIsPassword: false,
    svIsSecure: 0,
    svPlayers: [],
    svBots: [],
    svPing: 0,
  });

  useEffect(() => {
    const fetchServerDetails = async () => {
      try {
        const response = await api.get(`/api/servers/${ip}`);

        setServerDataDetails({
          svConnect: response.data.connect,
          svGame: response.data.raw.game,
          svName: response.data.name,
          svMapname: response.data.map,
          svNumplayers: response.data.raw.numplayers,
          svNumbots: response.data.raw.numbots,
          svMaxplayers: response.data.maxplayers,
          svIsPassword: response.data.password,
          svIsSecure: response.data.raw.secure,
          svPlayers: response.data.players,
          svBots: response.data.bots,
          svPing: response.data.ping,
        });
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

    fetchServerDetails();
  }, [ip]);

  return <ServerDetails serverDetails={serverDataDetails} />;
};

export default ServerDataDetails;
