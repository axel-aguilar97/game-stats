import Server from "../servers/Server";

const ServerFeed = ({ servers }: any) => {
  return (
    <>
      {servers.map((server: any) => (
        <Server key={server.id} server={server} />
      ))}
    </>
  );
};

export default ServerFeed;
