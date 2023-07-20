import SearchBar from '../searchBar/SearchBar'
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = ({onSearch}) => {
    return (
        <div className={style.container}>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/home'> HOME </Link>
            </button>
            <button>
            <Link to='/about'> ABOUT </Link>
            </button>
            <button>
            <Link to='/favorites'> FAVS </Link>
            </button>
        </div>
    )
}

export default Nav;