import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SearchInput from "./components/SearchInput";

const App = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/search",
				element: <SearchInput />,
			},
			{
				path: "/offers",
				element: <Offers />,
			},
		],
		errorElement: <ErrorPage />,
	},
	// {
	// 	path: "/offers",
	// 	element: <Offers />,
	// },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
