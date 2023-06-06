import { useEffect, useState } from "react";

export const useRestaurantdata = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);

	useEffect(() => {
		getRestaurantData();
	}, []);

	const getRestaurantData = async () => {
		const fetchData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
		);
		const fetchedData = await fetchData.json();
		setAllRestaurants(fetchedData?.data?.cards[2]?.data?.data?.cards);
	};

	return allRestaurants;
};
