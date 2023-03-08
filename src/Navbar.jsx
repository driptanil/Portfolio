import { Link } from "react-router-dom";
import { AppContext } from "./App";
import { useContext } from "react";

export const Navbar = () => {
	const { cursorDefault, cursorBig, cursorTextChange, toggleAnimate } =
		useContext(AppContext);

	const mouseEnterChange = (a) => (e) => {
		cursorBig();
		cursorTextChange(a);
		toggleAnimate();
	};

	const mouseLeave = () => {
		cursorDefault();
		toggleAnimate();
	};

	return (
		<div
			className="lime1 fixed top-10 flex w-1/2 items-center
		 justify-around rounded-full p-10 text-xl backdrop-blur-sm"
		>
			<Link
				className=""
				to="/Portfolio/"
				onMouseEnter={mouseEnterChange("home")}
				onMouseLeave={mouseLeave}
			>
				Home
			</Link>
			<Link
				className=""
				to="/Portfolio/about"
				onMouseEnter={mouseEnterChange("about")}
				onMouseLeave={mouseLeave}
			>
				About
			</Link>
			<Link
				className=""
				to="/Portfolio/projects"
				onMouseEnter={mouseEnterChange("projects")}
				onMouseLeave={mouseLeave}
			>
				Projects
			</Link>
			<Link
				className=""
				to="/Portfolio/skills"
				onMouseEnter={mouseEnterChange("skills")}
				onMouseLeave={mouseLeave}
			>
				Skills
			</Link>
			<Link
				className=""
				to="/Portfolio/contact"
				onMouseEnter={mouseEnterChange("contact")}
				onMouseLeave={mouseLeave}
			>
				Contact
			</Link>
		</div>
	);
};
