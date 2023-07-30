// import "./comp.css";

const Footer = () => {
	return (
		<div className="pt-2 bg-orange-500 text-white flex flex-col footer">
			<div className="m-0 footer-list">
				<ul className="flex justify-between px-16">
					<li>
						<span className="text-base uppercase underline">Company</span>
						<ul className="felx flex-col mt-4 p-0 span-list">
							<li className="py-2 font-normal">About us</li>
							<li className="py-2 font-normal">Team</li>
							<li className="py-2 font-normal">Careers</li>
							<li className="py-2 font-normal">Blog</li>
						</ul>
					</li>
					<li>
						<span className="text-base uppercase underline">Contact</span>
						<ul className="felx flex-col mt-4 p-0 span-list">
							<li className="py-2 font-normal">Help & Support</li>
							<li className="py-2 font-normal">Partner with us</li>
							<li className="py-2 font-normal">Download App</li>
						</ul>
					</li>
					<li>
						<span className="text-base uppercase underline">Legal</span>
						<ul className="felx flex-col mt-4 p-0 span-list">
							<li className="py-2 font-normal">Terms & conditions</li>
							<li className="py-2 font-normal">Refund & Cancellation</li>
							<li className="py-2 font-normal">Privacy Policy</li>
							<li className="py-2 font-normal">Cookie Policy</li>
							<li className="py-2 font-normal">Offer terms</li>
						</ul>
					</li>
					<li>
						<span className="text-base uppercase underline">Social Media</span>
						<ul className="felx flex-col mt-4 p-0 span-list">
							<li className="py-2 font-normal">Facebook</li>
							<li className="py-2 font-normal">Instagram</li>
							<li className="py-2 font-normal">Twitter</li>
							<li className="py-2 font-normal">LinkenIn</li>
						</ul>
					</li>
				</ul>
			</div>
			<p className="pl-4 pb-4">Copyright &copy; 2021</p>
		</div>
	);
};

export default Footer;
