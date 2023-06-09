import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import ErrorPage from "./components/ErrorPage";
import SearchInput from "./components/SearchInput";
import HelpPage from "./components/HelpPage";
import RestaurantPage from "./components/ReastaurantPage";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<Outlet />
			<Footer />
		</Provider>
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
			{
				path: "/help",
				element: <HelpPage />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantPage />,
			},
			{
				path: "/cart",
				element: <Cart />,
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
