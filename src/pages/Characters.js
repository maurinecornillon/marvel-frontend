import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Characters() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-marvel-backend-app.herokuapp.com/characters?BYOWtcC4WgeuwKhj&page=${page}&title=${search}&limit=${limit}`
      );
      setLimit(Math.ceil(response.data.count / response.data.limit));
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page, search, limit]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="container">
        <br />
        <br />
        <div className="Recherche">
          <button className="page" onClick={() => setPage(page - 1)}>
            <FontAwesomeIcon
              className="icone-deux"
              icon="fa-solid fa-angle-left"
            />
            <FontAwesomeIcon
              className="icone-deux"
              icon="fa-solid fa-angle-left"
            />
            {page}/{limit}
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
            {page}/{limit}
            <FontAwesomeIcon
              className="icone-deux"
              icon="fa-solid fa-angle-right"
            />
            <FontAwesomeIcon
              className="icone-deux"
              icon="fa-solid fa-angle-right"
            />
          </button>
        </div>
        <br />
        <br />
        <div className="title-roster">
          <p>Characters</p>
          <br />
          <br />
        </div>

        <div className="bloc">
          {data.results.map((element) => {
            return (
              <>
                {element.thumbnail.path !==
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
                element.thumbnail.path !==
                  "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708" ? (
                  <Link
                    className="link"
                    key={element._id}
                    to={`/comics/${element._id}`}
                  >
                    <div className="character-card">
                      <div className="character-card-img">
                        <img
                          src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                          alt=""
                        />
                      </div>

                      <h3>{element.name}</h3>
                      {/* <p>{element.description}</p> */}
                    </div>
                  </Link>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Characters;
