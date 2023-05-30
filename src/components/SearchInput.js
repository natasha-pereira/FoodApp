import { useEffect, useState } from "react";
import "./comp.css";

const SearchInput = () => {
	const [searchtext, setSearchText] = useState("");
	const [suggestions, setSuggestions] = useState([]);

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

	return (
		<div className="search-item">
			<input
				className="search-box"
				placeholder="Search here for tasty food!"
				value={searchtext}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button className="search-button">Search</button>
			<div className="search-suggestions">
				{suggestions.map((suggestion, index) => {
					return (
						<img
							key={index}
							className="search-sugestion-imgs"
							alt="food image"
							src={
								"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
								suggestion.imageId
							}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SearchInput;
