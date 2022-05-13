import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://my-marvel-backend-app.herokuapp.com/comics/${id}`
        );
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Chargement en cours</p>
  ) : (
    <>
      <br />
      <br />

      <div className="container">
        <hr />
        <hr />
        <div className="bloc-deux">
          <div className="titre">
            <h1>Fiche characters</h1>
            <div className="character-name">
              <p>{data.name}</p>
              <div className="characters-image">
                <img
                  src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                  alt=""
                />
              </div>
              {data.description === "" ? (
                <span>Description non disponible pour ce personnage</span>
              ) : (
                <span>{data.description}</span>
              )}
            </div>
          </div>
        </div>
        <hr />
        <hr />
        <br />
        <h1 className="feat-comics">Featured comics</h1>
        <br />
        <div className="character-comics">
          {data.comics.map((element) => {
            return (
              <div className="comics-card" key={element._id}>
                {/* <h3>{element.title}</h3> */}
                <div className="comics-image">
                  <img
                    src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    alt=""
                  />
                </div>
                {/* {element.description ? (
                  <p>{element.description}</p>
                ) : (
                  <p>Description non disponible</p>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Details;
