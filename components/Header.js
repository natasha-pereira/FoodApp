import "./comp.css";

import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header-container">
			<div className="logo">
				<img
					className="logo-img"
					alt="Logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dbuPC-SmcNW_I3KsJHWcbgejb7rqscznKw&usqp=CAU"
				></img>
				<h2>FoodsApp</h2>
			</div>
			<div className="nav-items">
				<ul>
					{/* <li>Search</li> */}
					<li>Search</li>
					<li>
						<Link to="/offers"></Link>Offers
					</li>
					<li>Help</li>
					<li>Sign in</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
