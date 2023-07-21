import axios from "axios";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <img src={character?.image} alt={character?.name} />
      <h2 className={style.nameContainer}>{character?.name}</h2>
      <h2 className={style.speciesName}>{character?.status}</h2>
      <h2 className={style.speciesName}>{character?.species}</h2>
      <h2 className={style.speciesName}>{character?.origin?.name}</h2>
      <h2 className={style.speciesName}>{character?.gender}</h2>
    </div>
  );
};

export default Detail;
