import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";

function Header() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<nav className="navBar">
			{/*Logo on the left*/}
			<Link to="/">
				<img
					className="navBar__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Logo"
				/>
			</Link>
			{/*Searchbox*/}
			<div className="navBar__search">
				<input type="text" className="navBar__searchInput" />
				<SearchIcon className="navBar__searchIcon" />
			</div>

			{/*Links*/}
			<div className="navBar__Links">
				<Link to="/login" className="navBar__Links__Link">
					<div className="navBar__Links__Text">
						<p className="navBar__Links__TextLineOne">Hello</p>
						<p className="navBar__Links__TextLineTwo">Sign In</p>
					</div>
				</Link>

				<Link to="/" className="navBar__Links__Link">
					<div className="navBar__Links__Text">
						<p className="navBar__Links__TextLineOne">Return</p>
						<p className="navBar__Links__TextLineTwo">Orders</p>
					</div>
				</Link>

				<Link to="/" className="navBar__Links__Link">
					<div className="navBar__Links__Text">
						<p className="navBar__Links__TextLineOne">Your</p>
						<p className="navBar__Links__TextLineTwo">Prime</p>
					</div>
				</Link>
			</div>

			{/*Basket icon*/}
			<Link to="/checkout" className="navBar__Links__Link">
				<div className="navBar__basket">
					{/*Icon */}
					<ShoppingBasketIcon />
					{/*# of Items */}
					<span className="navBar__Links__TextLineTwo navBar__basketCount">
						{basket?.length}
					</span>
				</div>
			</Link>
		</nav>
	);
}

export default Header;
