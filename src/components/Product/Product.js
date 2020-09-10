import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product--price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((stars) => (
							<p>🌟</p>
						))}
				</div>
			</div>
			<img src={image} alt="Product image" />
			<button>Add to basket</button>
		</div>
	);
}

export default Product;
