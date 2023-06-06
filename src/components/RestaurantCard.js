// import "./comp.css";

const RestaurantCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	avgRating,
	costForTwoMessage,
	slaString,
}) => {
	return (
		<div className="w-72 my-8 p-2 flex-1 border flex flex-col hover:shadow-lg">
			<img
				className="w-full food-image"
				alt="food image"
				src={
					"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
					cloudinaryImageId
				}
			/>
			<h3 className="font-semibold text-lg py-2">{name}</h3>
			<p className="font-thin text-xs">{cuisines.join(", ")}</p>
			<div className="flex justify-between items-center my-2">
				{avgRating < 3 ? (
					<h6 className="my-2 bg-red-600 w-8 text-center text-white text-sm rounded-sm">
						{avgRating}
					</h6>
				) : avgRating < 4 ? (
					<h6 className="my-2 bg-yellow-400 w-8 text-center text-white text-sm rounded-sm">
						{avgRating}
					</h6>
				) : (
					<h6 className="my-2 bg-green-600 w-8 text-center text-white text-sm rounded-sm">
						{avgRating}
					</h6>
				)}
				<p>•</p>
				<p className="font-thin text-xs my-2">{slaString}</p>
				<p>•</p>
				<p className="font-thin text-xs my-2">{costForTwoMessage}</p>
			</div>
		</div>
	);
};

export default RestaurantCard;
