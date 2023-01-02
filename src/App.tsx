import Logo from "./components/header/Logo";
import Navbar from "./components/header/Navbar";
import Search from "./components/header/Search";
import Userbar from "./components/header/Userbar";

import Routes from "./Routes";

/*
  Paises API : https://countriesnow.space/api/v0.1/countries
*/

function App() {
  return (
    <div className="text-bg-dark">
      <header className="p-2" style={{ backgroundColor: "#343a40" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Logo title="GS-Stats" />

            <Navbar />

            <Search />

            <Userbar />
          </div>
        </div>
      </header>

      <main>
        <Routes />
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
