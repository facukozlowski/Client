import SearchBar from '../searchBar/SearchBar'
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = ({onSearch}) => {
    return (
        <div className={style.container}>
            <button className={style.btn}>
            <NavLink className={style.NavLink} to='/home'> HOME </NavLink>
            </button>
            <button className={style.btn}>
            <NavLink className={style.NavLink} to='/about'> ABOUT </NavLink>
            </button>
            <button className={style.btn}>
            <NavLink className={style.NavLink} to='/favorites'> FAVS </NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;