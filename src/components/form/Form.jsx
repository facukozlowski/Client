import style from "./Form.module.css";
import { useState } from "react";
import Validation from "../validation/Validation";

const Form = ({login}) => {
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(Validation({
      ...userData,
      [event.target.name]: event.target.value
  }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
}

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.inputs}>
        <label className={style.label} htmlFor="email">  Email: </label>
        <input
        className={style.input}
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p className={style.error}>{errors.email && errors.email}</p>
        <label className={style.label} htmlFor="password">  Password: </label>
        <input
        className={style.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className={style.error}>{errors.password && errors.password}</p>
      </div>
      <button className={style.btn}>INGRESAR</button>
    </form>
  );
};

export default Form;
