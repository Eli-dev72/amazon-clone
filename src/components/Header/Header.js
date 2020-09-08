import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => (
  <nav className="navBar">
  {/*Logo on the left*/ }
  <Link to="/">
    <img className="navBar__logo" 
    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    alt="Logo"
  />
  </Link>
  {/*Searchbox*/}
  <div className="navBar__search">
    <input type="text" className="navBar__searchInput"/>
    <SearchIcon className="navBar__searchIcon"/>
  </div>

  {/*Links*/}
  <div className="navBar__Links">
    <Link to="/login" className="navBar__Links__Link">
      <div className="navBar__Links__Text">
        <text className="navBar__Links__TextLineOne">Hello</text>
        <text className="navBar__Links__TextLineTwo">Sign In</text>
      </div>
    </Link>

    <Link to="/" className="navBar__Links__Link">
      <div className="navBar__Links__Text">
        <text className="navBar__Links__TextLineOne">Return</text>
        <text className="navBar__Links__TextLineTwo">Orders</text>
      </div>
    </Link>

    <Link to="/" className="navBar__Links__Link">
      <div className="navBar__Links__Text">
        <text className="navBar__Links__TextLineOne">Your</text>
        <text className="navBar__Links__TextLineTwo">Prime</text>
      </div>
    </Link>
  </div>

  {/*Basket icon*/}
  <Link to="/checkout" className="navBar__Links__Link">
    <div className="navBar__basket">
      {/*Icon */}
      <ShoppingBasketIcon/>
      {/*# of Items */}
      <span className="navBar__Links__TextLineTwo navBar__basketCount">0</span>
    </div>
  </Link>
</nav>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
