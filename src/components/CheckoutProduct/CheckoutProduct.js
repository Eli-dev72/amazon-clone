import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img src={image} alt="Product" class="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, index) => (
							<span role="image" key={"starCheckout" + index}>
								🌟
							</span>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove From Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
