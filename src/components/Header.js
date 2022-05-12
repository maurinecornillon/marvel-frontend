import logo from "../assets/img/Logo.png";

// import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
