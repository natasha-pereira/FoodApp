import "./comp.css";

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);

	const getRestaurantData = async () => {
		const fetchData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9141417&lng=74.8559568&page_type=DESKTOP_WEB_LISTING"
		);
		const fetchedData = await fetchData.json();
		// console.log(fetchedData.data.cards[2].data.data.cards);
		setAllRestaurants(fetchedData?.data?.cards[2]?.data?.data?.cards);
	};

	useEffect(() => {
		getRestaurantData();
	}, []);

	return (
		<div className="restaurant-list">
			{allRestaurants.map((restaurant) => {
				return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
			})}
		</div>
	);
};

export default Body;
