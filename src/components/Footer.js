import "./comp.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-list">
				<ul>
					<li>
						<span>Company</span>
						<ul className="span-list">
							<li>About us</li>
							<li>Team</li>
							<li>Careers</li>
							<li>Blog</li>
						</ul>
					</li>
					<li>
						<span>Contact</span>
						<ul className="span-list">
							<li>Help & Support</li>
							<li>Partner with us</li>
							<li>Download App</li>
						</ul>
					</li>
					<li>
						<span>Legal</span>
						<ul className="span-list">
							<li>Terms & conditions</li>
							<li>Refund & Cancellation</li>
							<li>Privacy Policy</li>
							<li>Cookie Policy</li>
							<li>Offer terms</li>
						</ul>
					</li>
					<li>
						<span>Social Media</span>
						<ul className="span-list">
							<li>Facebook</li>
							<li>Instagram</li>
							<li>Twitter</li>
							<li>LinkenIn</li>
						</ul>
					</li>
				</ul>
			</div>
			<p>Copyright &copy; 2021</p>
		</div>
	);
};

export default Footer;
