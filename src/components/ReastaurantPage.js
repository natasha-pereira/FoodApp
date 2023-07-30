// import "./comp.css";

// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantpage } from "../utils/useRestaurantpage";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantPage = () => {
	const { id } = useParams();

	const [menu, restaurant] = useRestaurantpage(id);

	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	const resImage =
		"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
		restaurant.cloudinaryImageId;

	return (
		<div>
			<div className="mx-60 p-4 border border-gray-200 flex justify-between">
				<div className="flex flex-col justify-center">
					<h1 className="font-bold my-3 text-lg">{restaurant.name}</h1>
					<p className="font-thin text-sm">{restaurant.cuisines?.join(", ")}</p>
					<p className="font-thin text-sm">
						{restaurant.areaName}, {restaurant.sla?.lastMileTravelString}
					</p>
				</div>
				<div className="flex flex-col justify-center border border-gray-200 px-2">
					<p className="font-thin text-sm py-1 self-center text-orange-500">
						⭐ {restaurant.avgRating}
					</p>
					<p className="font-thin text-xs py-1 self-center">
						{restaurant.totalRatingsString}
					</p>
				</div>
			</div>
			<div className="mx-60">
				{menu?.map((items, index) => {
					return (
						<div
							key={index}
							className="border border-black my-4 p-2 flex justify-between gap-x-8"
						>
							<div>
								<h4 className="font-bold">{items?.card?.info?.name}</h4>
								<h3 className="my-2 w-12 text-center rounded bg-orange-500 text-white">
									₹ {items?.card?.info?.price / 100}
								</h3>
								<p className="font-thin text-sm text-gray-400">
									{items?.card?.info?.description}
								</p>
							</div>
							<div className="flex flex-col items-center">
								<img
									className="w-32"
									alt="food-image"
									src={
										"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
										items?.card?.info?.imageId
									}
								/>
								<button
									className="m-4 w-20 border border-orange-400 text-center text-orange-500 font-bold text-base rounded-md"
									onClick={() => handleAddItem(items?.card?.info?.name)}
								>
									Add +
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantPage;
