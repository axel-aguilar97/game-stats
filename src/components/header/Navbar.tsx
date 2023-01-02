import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-2 text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/servers" className="nav-link px-2 text-white">
            Servers
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
