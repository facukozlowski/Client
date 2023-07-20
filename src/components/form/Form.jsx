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
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p className={style.error}>{errors.email && errors.email}</p>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className={style.error}>{errors.password && errors.password}</p>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
