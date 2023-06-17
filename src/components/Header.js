// import "./comp.css";

import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Header = () => {
	const cartItems = useSelector((s) => s.cart.items);

	return (
		<div className="header-container flex justify-between items-center border m-4">
			<Link className="link-logo" to="/">
				<div className="flex items-center px-4 logo">
					<img
						className=" w-20 h-20 rounded-3xl p-2 logo-img"
						alt="Logo"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dbuPC-SmcNW_I3KsJHWcbgejb7rqscznKw&usqp=CAU"
					></img>
					<h2 className="font-extrabold text-2xl text-orange-500">FoodsApp</h2>
				</div>
			</Link>
			<div className="nav-items">
				<ul className="flex justify-around px-4">
					<li className="px-4">
						<Link to="/search">Search</Link>
					</li>
					<li className="px-4">
						<Link to="/offers">Offers</Link>
					</li>
					<li className="px-4">
						<Link to="/help">Help</Link>
					</li>
					<li className="px-4">
						<Link to="/sign-in">Sign in</Link>
					</li>
					<li className="flex items-center px-4">
						<Link to="/cart">Cart </Link>
						{cartItems.length > 0 ? (
							<span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white bg-orange-500 rounded-full">
								{cartItems.length}
							</span>
						) : null}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
