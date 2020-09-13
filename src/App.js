import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51HQjLOF5gwb3sSv3c17HCCRScipMDVcVxS2StmvKvuXJeh5PswCmEj5hRIv7gASW3eX3DLQokuohY8PzRkUfSBXA00OBBT8jGs"
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser.email);
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				console.log("noMail");
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []); //Blank is when component loads, with parameter is triggered when it changes
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
