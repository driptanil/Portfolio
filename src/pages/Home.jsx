import { motion } from "framer-motion";
// import profilePic from "../ProfilePic.png";
import TypingAnimation from "./components/TypingAnimation";
import { ReactComponent as Leaf1 } from "../svg/Leaf1.svg";
import { ReactComponent as Leaf2 } from "../svg/Leaf2.svg";
import { ReactComponent as Leaf3 } from "../svg/Leaf3.svg";

export default function Home() {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 2.5,
				duration: 1,
			},
		},
	};

	const container2 = {
		hidden: { opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delayChildren: 0,
				staggerChildren: 0.5,
				duration: 1,
			},
		},
	};

	const item = {
		hidden: { y: 40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
		transition: {
			duration: 1,
		},
	};

	return (
		<motion.div
			className="z-20 ml-20 mt-40 flex list-none flex-row text-xl max-md:flex-col"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<div className="flex w-2/6 flex-col">
				<motion.li variants={item} className="mb-4 text-2xl">
					<p>I'm </p>
				</motion.li>
				<TypingAnimation
					text="Drip"
					delay={1.2}
					stagger={0.3}
					duration={0}
					cursor="say Hello"
					styling="text-9xl lime2 name "
				/>
				<hr className="mx-2 -mt-1 mb-6 h-3 w-16 bg-neutral-50"></hr>

				<motion.div variants={container2}>
					<motion.li
						variants={item}
						className="lime1 text-4xl font-semibold"
					>
						Driptanil Datta
					</motion.li>
					<motion.li variants={item}>
						<p className="mt-6 text-xl max-md:w-96">
							I am 2nd year student pursuing my BTech in Computer
							Science & Engineering from Techno International New
							Town aka. IIT Narkelbagan
						</p>
					</motion.li>
				</motion.div>
			</div>
			<div className="max-lg: relative  w-4/6 max-xl:translate-x-16 max-xl:scale-75 max-lg:translate-x-32">
				<Leaf1 className="absolute right-0 rotate-90" />
				<Leaf3 className="absolute right-72 -top-48 mr-8 rotate-0" />
				<Leaf1 className="absolute right-24 top-80 rotate-12" />
				<Leaf2 className="absolute right-96 -top-14 mr-24 -rotate-90" />
				<Leaf2 className="rotate-135 absolute right-96 top-40 mr-40" />
				<Leaf3 className="absolute right-96 top-72 mr-48 -rotate-90" />
			</div>

			{/* <img src={profilePic} alt="Profile Pic" className="mt-20 w-4/12" /> */}
		</motion.div>
	);
}
