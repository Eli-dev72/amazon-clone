import React from "react";
import Product from "../Product/Product.lazy";
import "./Home.css";
import Carousel from "react-material-ui-carousel";

function Home() {
	const items = [
		{
			url:
				"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
			description: "Amazon Prime Image",
		},
		{
			url:
				"https://images-na.ssl-images-amazon.com/images/G/33/img18/Prime/GW_Slot_Refresh/Resize/GW_DesktopHero_primerefreshV1_1500x600._CB455671881_.jpg",
			description: "Envíos Amazon Prime",
		},
		{
			url:
				"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
			description: "Amazon Prime Ship",
		},
		{
			url:
				"https://images-na.ssl-images-amazon.com/images/G/33/img20/Prime/Rebrand2020/Prime_AMP1_TallHero_1500x600._CB409729610_.jpg",
			description: "Amazon Prime Benefit",
		},
	];
	return (
		<div className="home">
			<div className="home__container">
				<Carousel interval={5000} indicators={false} className="home__carousel">
					{items.map((item, i) => (
						<img
							className="home__image"
							key={i}
							src={item.url}
							alt={item.description}
						/>
					))}
				</Carousel>
				{/* <img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="Amazon Prime"
				/> */}

				<div className="home__row">
					<Product
						id="1"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="2"
						title="New Apple iPhone SE (64GB, Black) [Locked] + Carrier Subscription"
						price={399.0}
						image="https://m.media-amazon.com/images/I/81hCytKTUTL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
						rating={3}
					/>
					<Product
						id="4"
						title="Amazon echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
						rating={5}
					/>
					<Product
						id="5"
						title="New iPad Pro (12.9 inch, Wi-fi, 128GB) -Silver (4th Generation)"
						price={598.99}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="6"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - SUper Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
