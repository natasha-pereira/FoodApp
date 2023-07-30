import { useEffect, useState } from "react";
// import "./comp.css";

const Section = ({ title, description, isVisible, setIsVisible }) => {
	const [visible, setVisible] = useState(isVisible);

	return (
		<div className="border border-white p-2 m-2">
			<h2 className="font-bold">{title}</h2>
			{isVisible && visible ? (
				<div>
					<button
						onClick={() => {
							setIsVisible(false);
							setVisible(false);
						}}
					>
						⬆️
					</button>
					<p>{description}</p>
				</div>
			) : (
				<div>
					<button
						onClick={() => {
							setIsVisible(true);
							setVisible(true);
						}}
					>
						⬇️
					</button>
				</div>
			)}
		</div>
	);
};

const HelpPage = () => {
	const [headers, setHeaders] = useState([]);

	const [visibility, setVisibility] = useState();

	const fetchFaqs = async () => {
		const data = await fetch(
			"https://www.swiggy.com/mapi/support/v3/issues/legal?loadConversations=true"
		);
		const json = await data.json();
		// console.log(json?.data?.issues?.data);
		setHeaders(json?.data?.issues?.data);
	};

	useEffect(() => {
		fetchFaqs();
	}, []);

	return (
		<div className="w-full bg-gray-700 text-white p-8 help-page">
			<h1>Help & Support</h1>
			<h5>We are here to help you!</h5>
			{headers.map((faq, index) => {
				return (
					<Section
						key={index}
						title={faq.title}
						description={faq.description}
						isVisible={visibility === faq.id}
						setIsVisible={() => setVisibility(faq.id)}
					/>
				);
			})}
		</div>
	);
};

export default HelpPage;
