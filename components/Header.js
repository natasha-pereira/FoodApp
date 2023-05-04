import "./comp.css";

import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header-container">
			<Link className="links" to="/">
				<div className="logo">
					<img
						className="logo-img"
						alt="Logo"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dbuPC-SmcNW_I3KsJHWcbgejb7rqscznKw&usqp=CAU"
					></img>
					<h2>FoodsApp</h2>
				</div>
			</Link>
			<div className="nav-items">
				<ul>
					<li>
						<Link className="links" to="/search">
							Search
						</Link>
					</li>
					<li>
						<Link className="links" to="/offers">
							Offers
						</Link>
					</li>
					<li>
						<Link className="links" to="/help">
							Help
						</Link>
					</li>
					<li>
						<Link className="links" to="/sign-in">
							Sign in
						</Link>
					</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
