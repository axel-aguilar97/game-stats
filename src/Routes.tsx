import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import ServerData from "./components/servers/ServerData";
import ServerDataDetails from "./components/servers/ServerDataDetails";

import Error from "./pages/Error";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />

      <Route path="/servers" element={<ServerData />} />
      <Route path="/server/:ip" element={<ServerDataDetails />} />

      <Route path="*" element={<Error />} />
    </Switch>
  );
};

export default Routes;
