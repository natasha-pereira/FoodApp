// import "./comp.css";

const RestaurantCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	deliveryTime,
	avgRating,
}) => {
	return (
		<div className="w-60 h-72 m-4 p-2 flex-1 border restaurant-card">
			<img
				className="w-full food-image"
				alt="food image"
				src={
					"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
					cloudinaryImageId
				}
			/>
			<h3 className="font-semibold py-2">{name}</h3>
			<p className="font-thin text-sm">{cuisines.join(", ")}</p>
			<h6>{avgRating}</h6>
		</div>
	);
};

export default RestaurantCard;
