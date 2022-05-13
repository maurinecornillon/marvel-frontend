import axios from "axios";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-marvel-backend-app.herokuapp.com/comics?BYOWtcC4WgeuwKhj&page=${page}&title=${search}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page, search]);

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
            <input
              type="search"
              placeholder="Search..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <button className="page" onClick={() => setPage(page + 1)}>
            Page suivante
          </button>
        </div>
        <br />
        <br />
        <div className="title-roster">
          <p>Comics</p>
          <br />
          <br />
        </div>
        <div className="bloc">
          {data.results.map((element) => {
            return (
              <div className="link" key={element._id}>
                <div className="character-card">
                  {localStorage.getItem(`fav${element._id}`)}

                  <div className="character-card-img">
                    <img
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      alt=""
                    />
                  </div>

                  <h2>{element.title}</h2>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Comics;
