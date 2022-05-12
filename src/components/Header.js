import logo from "../assets/img/Logo.png";

import { Link } from "react-router-dom";

const Header = ({ userToken, handleToken }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <section className="right-header">
            <div className="contact">
              {!userToken ? (
                <>
                  <Link to="/signup">
                    <button>S'inscrire</button>
                  </Link>
                  <br />
                  <span className="space">{"|"}</span>
                  <Link to="/login">
                    <button>Connexion</button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleToken();
                  }}
                >
                  Déconnexion
                </button>
              )}

              <br />
            </div>
          </section>
        </div>
      </header>
    </>
  );
};
export default Header;
