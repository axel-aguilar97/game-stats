import { Link } from "react-router-dom";

const Server = ({ server }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>GameType</th>
          <th>IP</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{server.gameType}</td>
          <td>
            {server.ip}:{server.port}
          </td>
          <td>
            <Link to={`/server/${server.ip}:${server.port}`}>Detalles</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Server;
