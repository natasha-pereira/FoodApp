import { useState } from "react";
import "./comp.css";

const SearchInput = () => {
	const [searchtext, setSearchText] = useState("");

	return (
		<div>
			<input
				className="search-box"
				placeholder="Search here for tasty food!"
				value={searchtext}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button className="search-button">Search</button>
		</div>
	);
};

export default SearchInput;
