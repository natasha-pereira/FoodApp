import { useEffect, useState } from "react";

export const useRestaurantpage = (id) => {
	const [restaurant, setRestaurant] = useState([]);
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		getRestaurantPageData();
	}, []);

	const getRestaurantPageData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.0865191&lng=79.08929959999999&restaurantId=" +
				id
		);

		const json = await data.json();
		setMenu(
			json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
				?.card?.itemCards
		);

		setRestaurant(json?.data?.cards[0]?.card?.card?.info);
	};

	return [menu, restaurant];
};
