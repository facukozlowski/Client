import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
      {isFav ? (
        <button className={style.btnFav} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.btnFav} onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.closeBtn} onClick={() => onClose(id)}>
        X
      </button>
      <img src={image} alt="" />
      <NavLink className={style.name} to={`/detail/${id}`}>
        <h2 className={style.nameContainer}>{name}</h2>
      </NavLink>
      <h2 className={style.speciesName}>{species}</h2>
      <h2 className={style.speciesName}>{gender}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
