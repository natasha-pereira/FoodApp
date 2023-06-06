// import "./comp.css";

import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Header = () => {
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
						<Link className="link-logo" to="/search">
							Search
						</Link>
					</li>
					<li className="px-4">
						<Link className="link-logo" to="/offers">
							Offers
						</Link>
					</li>
					<li className="px-4">
						<Link className="link-logo" to="/help">
							Help
						</Link>
					</li>
					<li className="px-4">
						<Link className="link-logo" to="/sign-in">
							Sign in
						</Link>
					</li>
					<li className="px-4">Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
