// import "./comp.css";

const Offers = () => {
	return (
		<div className="w-full h-52 bg-gray-700 text-white flex flex-row justify-between offer-banner">
			<div className="m-4 offer-banner-content">
				<h1>Offers for you!</h1>
				<p>Explore top deals and offers exclusively for you! 🥂</p>
			</div>
			<img
				className="m-4"
				alt="offer logo"
				src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
			/>
		</div>
	);
};

export default Offers;
