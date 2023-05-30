import "./comp.css";

import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useRestaurantdata } from "../utils/useRestaurantdata";

import { Link } from "react-router-dom";

const Body = () => {
	const allRestaurants = useRestaurantdata();

	// return allRestaurants?.length === 0 ? (
	// 	<div className="restaurant-list">
	// 		{Array(15)
	// 			.fill("")
	// 			.map((s, index) => (
	// 				<ShimmerUI key={index} />
	// 			))}
	// 	</div>
	// ) : (
	// 	<div className="restaurant-list">
	// 		{allRestaurants?.map((restaurant) => {
	// 			return (
	// 				<RestaurantCard {...restaurant?.data} key={restaurant?.data.id} />
	// 			);
	// 		})}
	// 	</div>
	// );

	return (
		<div className="restaurant-list">
			{allRestaurants?.length === 0
				? Array(15)
						.fill("")
						.map((s, index) => <ShimmerUI key={index} />)
				: allRestaurants?.map((restaurant) => {
						return (
							<Link
								className="link"
								to={"/restaurant/" + restaurant?.data?.id}
								key={restaurant?.data?.id}
							>
								<RestaurantCard {...restaurant?.data} />
							</Link>
						);
				  })}
		</div>
	);
};

export default Body;
