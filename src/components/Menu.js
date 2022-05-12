import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <br />
      <div className="container">
        <nav className="menu">
          <div>
            <span onClick={() => navigate("/")}>Characters</span>
          </div>
          <div>
            <span onClick={() => navigate("/comics")}>Comics</span>
          </div>
          <div>
            <span>Favourite characters</span>
          </div>
          <div>
            <span>Favourite comics</span>-
          </div>
          <div>
            <span>S'inscrire</span>-
          </div>
          <div>
            <span>Se connecter</span>-
          </div>
        </nav>
      </div>
    </>
  );
};
export default Menu;
