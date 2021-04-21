import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket,user }] = useStateValue();

    const handleAuthentification = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        
        <nav className="header">
            <Link to='/'>
                <img 
                    className="header__logo" 
                    src="https://static.wixstatic.com/media/f49a4f_e836e969419b4cc79f95e77fb3d95475~mv2.png" 
                    alt="" 
                />
            </Link>

            <div className="header__search">
                <input  type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div className="header__option" onClick={handleAuthentification}>
                        { user == null ? 
                            <AccountCircleIcon /> : 
                            <img src={user?.photoURL} alt='' className="header__avatar" /> 
                        }
                        <span>{ user == null ? "Акаунт" :user?.displayName}</span>
                    </div>
                </Link>
            </div>

                <div className="header__option">
                    <FavoriteBorderIcon />
                    <span>Favorites</span>
                </div>
                <Link to="/checkout" className="header__link">
                <div className="header__option">
                    <ShoppingCartOutlinedIcon />
                    <span>Количка</span>
                    <span className="header__basketLength">{basket?.length}</span>
                </div>
                </Link>
        </nav>
        
    )
}

export default Header
