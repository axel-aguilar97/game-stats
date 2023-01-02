import { Link } from "react-router-dom";

const Logo = ({ title }: any) => {
  return (
    <>
      <Link
        to="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <span className="fs-4">{title}</span>
      </Link>
    </>
  );
};

export default Logo;
