import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-marvel-backend-app.herokuapp.com/comics?BYOWtcC4WgeuwKhj`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="container">
        <br />
        <br />
        <div className="Recherche">
          <button className="page" onClick={() => setPage(page - 1)}>
            Page précédente
          </button>
          <div className="Recherche-two">
            <FontAwesomeIcon className="icone" icon="magnifying-glass" />
            <input type="text" placeholder="Rechercher..." />
          </div>
          <button className="page" onClick={() => setPage(page + 1)}>
            Page suivante
          </button>
        </div>
        <br />
        <br />
        <div className="bloc">
          {data.results.map((element) => {
            return (
              <Link
                className="link"
                key={element._id}
                to={`details/${element._id}`}
              >
                <div className="character-card">
                  {localStorage.getItem(`fav${element._id}`)}

                  <div className="character-card-img">
                    <img
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      alt=""
                    />
                  </div>

                  <h3>{element.title}</h3>
                  <p>{element.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="container-deux">
        <button onClick={() => setPage(page - 1)}>Page précédente</button>

        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
    </>
  );
}

export default Comics;
