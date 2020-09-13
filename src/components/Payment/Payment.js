import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct.lazy";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../reducer";
import CurrencyFormat from "react-currency-format";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [proccesing, setProccesing] = useState(false);
	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret, setClientSecret] = useState(true);
	const history = useHistory();

	useEffect(() => {
		//Stripe expects total in subunits
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	const stripe = useStripe();
	const element = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProccesing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: element.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				setSucceeded(true);
				setError(null);
				setProccesing(false);
				//If the user goes back, he can't go back to the payment proccess
				history.replace("/");
			});
	};
	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout"> {basket?.length} items</Link>){" "}
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="paymentAddress">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item, index) => (
							<CheckoutProduct
								key={index}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div class="payment__pricecontainer">
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order total {value}</h3>
										</>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={proccesing || disabled || succeeded}>
									<span>{proccesing ? <p>Proccesing</p> : "Buy Now"}</span>
								</button>
							</div>
						</form>
						{error && <div>{error}</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
