import "./comp.css";

// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantpage } from "../utils/useRestaurantpage";

const RestaurantPage = () => {
	const { id } = useParams();

	const [menu, restaurant] = useRestaurantpage(id);

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
