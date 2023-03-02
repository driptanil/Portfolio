import { Link } from "react-router-dom";
import { AppContext } from "./App";
import { useContext } from "react";

export const Navbar = () => {
	const { cursorDefault, cursorBig, cursorTextChange, toggleAnimate } = useContext(AppContext);

	const mouseEnterChange = (a) => e => {
		cursorBig();
		cursorTextChange(a);
		toggleAnimate();
	}

	const mouseLeave = () => {
		cursorDefault();
		toggleAnimate();
	}
	
	return (
		<div className="fixed top-0 flex w-1/2 items-center justify-around backdrop-blur-sm p-10 rounded-full lime1 text-xl">
			<Link
				className=""
				to="/"
				onMouseEnter={mouseEnterChange("home")}
				onMouseLeave={mouseLeave}
				>
				Home
			</Link>
			<Link className="" to="/about" 
				onMouseEnter={mouseEnterChange("about")}
				onMouseLeave={mouseLeave}>
				About
			</Link>
			<Link className="" to="/projects" 
				onMouseEnter={mouseEnterChange("projects")}
				onMouseLeave={mouseLeave}>
				Projects
			</Link>
			<Link className="" to="/skills" 
				onMouseEnter={mouseEnterChange("skills")}
				onMouseLeave={mouseLeave}>
				Skills
			</Link>
			<Link className="" to="/contact"
				onMouseEnter={mouseEnterChange('contact')}
				onMouseLeave={mouseLeave}>
				Contact
			</Link>
		</div>
	);
};
