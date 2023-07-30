// import "./comp.css";

import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useRestaurantdata } from "../utils/useRestaurantdata";

import { Link } from "react-router-dom";

const Body = () => {
	const allRestaurants = useRestaurantdata();

	return (
		// <div className="flex flex-wrap justify-between max-w-full mx-4 restaurant-list">
		// 	{allRestaurants?.length === 0
		// 		? Array(15)
		// 				.fill("")
		// 				.map((s, index) => <ShimmerUI key={index} />)
		// 		: allRestaurants?.map((restaurant) => {
		// 				return (
		// 					<Link
		// 						className="link"
		// 						to={"/restaurant/" + restaurant?.data?.id}
		// 						key={restaurant?.data?.id}
		// 					>
		// 						<RestaurantCard {...restaurant?.data} />
		// 					</Link>
		// 				);
		// 		  })}
		// </div>
		<div className="flex flex-wrap justify-between max-w-full mx-4 restaurant-list">
			{allRestaurants?.length === 0
				? Array(15)
						.fill("")
						.map((s, index) => <ShimmerUI key={index} />)
				: allRestaurants?.map((restaurant) => {
						return (
							<Link
								className="link"
								to={"/restaurant/" + restaurant?.info?.id}
								key={restaurant?.info?.id}
							>
								<RestaurantCard {...restaurant?.info} />
							</Link>
						);
				  })}
		</div>
	);
};

export default Body;
