// import "./comp.css";

import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="w-full flex flex-col justify-center items-center m-4 error-page">
			<img
				className="w-4/12 h-60"
				alt="error logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPW3LyEKkVyVFzjMsQdCOJSkq17cmeUTYNlw&usqp=CAU"
			/>
			<h1>Ooops!! Someting went wrong!</h1>
			<h3 className="text-red-600">{error.status + " " + error.data}</h3>
			<h4>Please check the URL path and try again! </h4>
			<Link to="/" className="text-purple-500 hover:underline">
				<h4>Go to Home page</h4>
			</Link>
		</div>
	);
};

export default ErrorPage;
