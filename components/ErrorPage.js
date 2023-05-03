import "./comp.css";

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="error-page">
			<img
				alt="error logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPW3LyEKkVyVFzjMsQdCOJSkq17cmeUTYNlw&usqp=CAU"
			/>
			<h1>Ooops!! Someting went wrong!</h1>
			<h3>{error.status + " " + error.data}</h3>
			<h4>Please check the URL path and try again! </h4>
		</div>
	);
};

export default ErrorPage;
