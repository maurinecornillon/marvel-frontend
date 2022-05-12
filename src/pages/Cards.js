import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   const [isFavourite, setIsFavourite] = useState();

  //   const handleFavourites = () => {
  //     let favContainer;
  //     const newFav = {
  //       thumbnail: {
  //         path: data.thumbnail.path,
  //         extension: data.thumbnail.extension,
  //       },
  //       _id: data._id,
  //       name: data.name,
  //       description: data.description,
  //     };

  //     if (!isFavourite) {
  //       if (localStorage.getItem("favchars")) {
  //         const importFavs = localStorage.getItem("favchars");
  //         favContainer = JSON.parse(importFavs);
  //         favContainer.push(newFav);
  //       } else {
  //         favContainer = [];
  //         favContainer.push(newFav);
  //       }
  //       const addNewFav = JSON.stringify(favContainer);
  //       localStorage.setItem("favchars", addNewFav);
  //       //////////////////////////////////////////////////
  //       localStorage.setItem(`fav${data._id}`, data._id);
  //       setIsFavourite(data._id);
  //     } else {
  //       if (localStorage.getItem("favchars")) {
  //         const importFavs = localStorage.getItem("favchars");
  //         favContainer = JSON.parse(importFavs);
  //         for (let i = 0; i < favContainer.length; i++) {
  //           if (favContainer[i]._id === id) {
  //             favContainer.splice(favContainer.indexOf(favContainer[i]), 1);
  //           }
  //         }
  //         const addNewFav = JSON.stringify(favContainer);
  //         localStorage.setItem("favchars", addNewFav);
  //       }
  //       //////////////////////////////////////////////////
  //       localStorage.removeItem(`fav${data._id}`);
  //       setIsFavourite();
  //     }
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://my-marvel-backend-app.herokuapp.com/comics/${id}`
        );
        setData(response.data);

        // setIsFavourite(localStorage.getItem(`fav${response.data._id}`));
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
      <hr />
      <h1>Featured comics</h1>
      <div className="character-comics">
        {data.comics.map((element) => {
          return (
            <div className="comics-card" key={element._id}>
              <h3>{element.title}</h3>
              <div className="comics-image">
                <img
                  src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                  alt=""
                />
              </div>
              {element.description ? (
                <p>{element.description}</p>
              ) : (
                <p>Description non disponible</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
