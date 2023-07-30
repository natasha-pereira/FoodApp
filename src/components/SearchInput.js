import { useEffect, useState } from "react";
import { useRestaurantdata } from "../utils/useRestaurantdata";
import RestaurantCard from "./RestaurantCard";
// import "./comp.css";

const SearchInput = () => {
	const [searchtext, setSearchText] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	const [restaurants, setRestaurant] = useState();

	const allRestaurants = useRestaurantdata();

	useEffect(() => {
		getSearchsuggestions();
	}, []);

	const getSearchsuggestions = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9141417&lng=74.8559568"
		);
		const jsonData = await data.json();
		// console.log(jsonData);
		setSuggestions(jsonData.data.cards[1].card.card.imageGridCards.info);
	};

	const searchRestaurant = () => {
		const hotel = allRestaurants.filter(
			(restaurant) =>
				restaurant?.data?.name.toLowerCase() === searchtext.toLowerCase()
		);
		if (hotel) setRestaurant(hotel[0]);
		else setRestaurant(undefined);
	};

	return (
		<div className="text-center m-8 h-screen">
			<input
				className="w-7/12 h-10 border rounded search-box"
				placeholder="Search here for tasty food! or restaurant!"
				value={searchtext}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button
				className="w-16 h-10 ml-2 rounded bg-orange-500 search-button text-white"
				onClick={searchRestaurant}
			>
				Search
			</button>
			<div className="flex justify-center items-center m-8 search-suggestions">
				{suggestions.map((suggestion, index) => {
					return (
						<img
							key={index}
							className="w-16 h-24 mx-2 search-sugestion-imgs"
							alt="food image"
							src={
								"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
								suggestion.imageId
							}
						/>
					);
				})}
			</div>
			{restaurants !== undefined ? (
				<div className="flex flex-wrap max-w-full restaurant-list">
					<RestaurantCard {...restaurants?.data} />
				</div>
			) : null}
		</div>
	);
};

export default SearchInput;
