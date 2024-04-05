import Logo from "./Logo";
import GithubSvg from "../assets/github.svg";
import LinkedinSvg from "../assets/linkedin.svg";
import PacmanGameSvg from "../assets/pacmanGame.svg";
import RightArrowSvg from "../assets/rightArrow.svg";

const HomePage = () => {
	return (
		<div className="bg-gradient-to-tl from-neutral-900 via-neutral-700 to-neutral-900">
			<div className="grid grid-cols-2 items-center fixed w-full px-4 py-4">
				<Logo />
				<div className="flex flex-col items-end self-center">
					<img
						src={GithubSvg}
						alt="github"
						className="w-7 lg:w-10 mb-1 cursor-pointer"
					/>
					<img
						src={LinkedinSvg}
						alt="linkedin"
						className="w-7 lg:w-10 cursor-pointer"
					/>
				</div>
			</div>
			<div className="h-screen flex flex-col items-center justify-center">
				<h1 className="text-white font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[12rem] mb-4 z-10">
					MiniGamesHub
				</h1>
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-2xl sm:text-4xl px-5 py-2.5 me-2 mb-2 opacity-100 z-10 flex items-center justify-center"
				>
					Play Games{" "}
					<img
						src={RightArrowSvg}
						alt="rightArrow"
						className="w-7 cursor-pointer ml-3 mt-1"
					/>
				</button>
			</div>
			<img
				src={PacmanGameSvg}
				alt="pacmanLogo"
				className="w-60 sm:w-[30rem] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10"
			/>
		</div>
	);
};

export default HomePage;
