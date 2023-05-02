import "./comp.css";

const RestaurantCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	deliveryTime,
	avgRating,
}) => {
	return (
		<div className="restaurant-card">
			<img
				className="food-image"
				alt="food image"
				src={
					"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
					cloudinaryImageId
				}
			/>
			<h3>{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<h6>{avgRating}</h6>
		</div>
	);
};

export default RestaurantCard;
