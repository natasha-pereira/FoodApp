import "./comp.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
	const { id } = useParams();

	const [restaurant, setRestaurant] = useState([]);
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		getRestaurantPageData();
	}, []);

	const getRestaurantPageData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
				id
		);

		const json = await data.json();
		setMenu(
			json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
				?.card?.itemCards
		);

		setRestaurant(json?.data?.cards[0]?.card?.card?.info);
	};

	return (
		<div>
			<h1>{restaurant.name}</h1>
			<h4>{restaurant.city}</h4>
			<div className="restaurant-list">
				{menu.map((items, index) => {
					return (
						<div key={index} className="restaurant-card">
							<img
								className="food-image"
								alt="food-image"
								src={
									"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
									items?.card?.info?.imageId
								}
							/>
							<h4>{items?.card?.info?.name}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantPage;
