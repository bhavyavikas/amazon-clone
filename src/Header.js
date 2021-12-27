import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [{ basket }] = useStateValue();

    console.log(basket)
    return (
        <nav className='header'>
            {/* Amazon Logo */}
            <Link to='/'>
                <img
                    className='header_logo' src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png" />
            </Link>

            {/* Search Box */}
            <div className="hearder_search"></div>
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"></SearchIcon>

            {/* 3 Links */}
            <div className="header_nav">
                {/* 1st link */}
                <Link to='/login' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineone'>Hello, {auth.currentUser?.email}</span>
                        {!auth.currentUser && <span className='header_optionLinetwo'>Signin</span>}
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineone'>Returns</span>
                        <span className='header_optionLinetwo'>&Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineone'>Your</span>
                        <span className='header_optionLinetwo'>Prime</span>
                    </div>
                </Link>

                {/* 4th Link */}
                <Link to='/checkout' className='header_link'>
                    <div className="header_optionBasket">
                        {/* Shopping basket Icon */}
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        {/* No.of items in the basket */}
                        <span className='header_optionLinetwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
                {auth.currentUser && <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineone' onClick={signOut(auth)}>SignOut</span>
                    </div>
                </Link>}

            </div>
            {/* Basket icon with number */}
        </nav>

    );
}

export default Header;

