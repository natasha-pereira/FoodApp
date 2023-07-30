import { useEffect, useState } from "react";

export const useRestaurantdata = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);

	useEffect(() => {
		getRestaurantData();
	}, []);

	const getRestaurantData = async () => {
		const fetchData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0865191&lng=79.08929959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const fetchedData = await fetchData.json();
		setAllRestaurants(
			fetchedData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	return allRestaurants;
};
