import ServerFeed from "./ServerFeed";

const Servers = ({ servers }: any) => {
  return (
    <div>
      {servers.length ? <ServerFeed servers={servers} /> : <p>No data</p>}
    </div>
  );
};

export default Servers;
