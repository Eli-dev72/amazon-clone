import React from "react";
import PropTypes from "prop-types";
import "./Checkout.css";

function Checkout() {
	return (
		<div className="checkout">
			<div class="checkout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="Amazon ad"
					class="checkout__ad"
				/>
				<div>
					<h2 class="checkout__title">Your Shopping Basket</h2>
				</div>
			</div>
			<div class="checkout__right">
				<h2>Subtotal Component</h2>
			</div>
		</div>
	);
}

export default Checkout;
