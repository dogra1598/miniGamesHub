import SiteLogo from "../assets/logo.svg";

const Logo = () => {
	return (
		<div>
			<img src={SiteLogo} alt="logo" className="text-yellow-100 w-16 lg:w-20" />
		</div>
	);
};

export default Logo;
