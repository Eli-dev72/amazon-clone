import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
	};

	const register = (e) => {
		e.preventDefault();
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="Amazon Logo"
					className="login__logo"
				/>
			</Link>
			<div class="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>Email</h5>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}></input>
					<button type="submit" onClick={signIn} className="login__SignIn">
						Sign In
					</button>
				</form>
				<p>By Signing-in you accept the terms of this FAKE AMAZON CLONE</p>
				<button onClick={register} className="login__register">
					Create your account
				</button>
			</div>
		</div>
	);
}

export default Login;
