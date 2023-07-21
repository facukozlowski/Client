import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import  Form  from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

const URL = 'http://localhost:3001/rickandmorty/login/'; 
// const email = 'facukozlowski@gmail.com';
//const password = 'facu1234';

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;

      setAccess(data);
      access && navigate('/home');
      
    } catch (error) {
      console.log(error.message)
    }
  }

 useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
      if(data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }; 

    } catch (error) {
      alert("¡No hay personajes con este ID!");
      }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {
        location.pathname !== '/'
        ? <Nav onSearch={onSearch} />
        : null
      }
      
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;

