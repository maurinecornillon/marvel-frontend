import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Characters() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-marvel-backend-app.herokuapp.com/characters?limit=100&page=${page}`
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

                  <h3>{element.name}</h3>
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

export default Characters;
