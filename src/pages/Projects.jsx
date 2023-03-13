import TypingAnimation from "./components/TypingAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Projects() {
	const { cursorDefault, cursorInvisible } = useContext(AppContext);

	const container = {
		hidden: { opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delayChildren: 4.5,
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

	const projectData = [
		{
			name: "Social Media App",
			link: "https://social-hot-takes.web.app/",
			details: "A Hot Takes sharing app made using React JS",
			features: [
				<>Create New Post</>,
				<>Like / Dislike</>,
				<>Delete Post</>,
			],
			ingredients: [
				<>
					<b className="text-xl">Firebase</b> for Hosting, NoSQL
					Database, Google Authentication.
				</>,
				<>
					<b className="text-xl">TailwindCSS</b> and{" "}
					<b className="text-xl">Framer Motion</b> library to make the
					UI.
				</>,
				<>
					<b className="text-xl">Yup</b> package to add restriction to
					Create Post form.
				</>,
			],
		},
		{
			name: "Crypto Live Visualizer App",
			link: "https://crypto-live-visualizer.onrender.com/",
			details: "",
			features: [
				<>Real-time market data</>,
				<>Percentage of Profit / Loss of 30 mins, 7 and 6 months</>,
				<>Candle Stick Graph for short term</>,
				<>Line Graph for long term</>,
			],
			ingredients: [
				<>Percentage of Profit / Loss of 30 mins, 7 and 6 months</>,
				<>
					<b className="text-xl">Plotly</b> and{" "}
					<b className="text-xl">Dash</b> library used to create
					candlestick and line graph visualization.
				</>,
				<>
					<b className="text-xl">Render</b> platform is used to
					deploy.
				</>,
			],
		},
	];

	return (
		<>
			{projectData.map((section, index) => {
				return (
					<motion.div
						className="pt-30 mt-24 flex flex-row items-center max-xl:flex-col"
						variants={container}
						initial="hidden"
						animate="visible"
					>
						<div className="w-2/5 px-20 pt-20 max-xl:w-full">
							<Link
								to={section.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<TypingAnimation
									text={section.name}
									delay={1.2}
									stagger={0.125}
									cursor="project link"
									duration={0}
									styling="text-6xl max-xl:text-7xl name lime2"
								/>
							</Link>
							<hr className="mb-2 h-2 w-10 bg-neutral-50"></hr>
							<motion.text variants={item}></motion.text>
							<div className="flex flex-col max-xl:flex-row max-xl:items-center">
								<div>
									<motion.text
										variants={item}
										className="lime1 m-8 block text-4xl font-bold"
									>
										Features:
									</motion.text>
									<ul className="ml-16 list-disc text-lg leading-10">
										{section.features.map(
											(feature, index2) => {
												return (
													<motion.li variants={item}>
														{feature}
													</motion.li>
												);
											}
										)}
									</ul>
								</div>
								<div>
									<motion.text
										variants={item}
										className="lime1 m-8 block text-4xl font-bold"
									>
										Ingredients:
									</motion.text>
									<ul className="ml-16 list-disc text-lg leading-10">
										{section.ingredients.map(
											(ingredient, index2) => {
												return (
													<motion.li variants={item}>
														{ingredient}
													</motion.li>
												);
											}
										)}
									</ul>
								</div>
							</div>
						</div>
						<div className="flex w-3/5 items-center justify-center max-xl:w-11/12">
							<div className="laptop flex h-screen max-xl:h-full w-full items-center justify-center">
								<motion.Iframe
									src={section.link}
									onMouseEnter={cursorInvisible}
									onMouseLeave={cursorDefault}
									className="laptopRes rounded-xl"
								></motion.Iframe>
							</div>
						</div>
						{/* <motion.Iframe
				src=""
				// src="https://crypto-live-visualizer.onrender.com/"
				className="preview ml-10 mt-10"
				onMouseEnter={cursorInvisible}
				onMouseLeave={cursorDefault}
			></motion.Iframe> */}
					</motion.div>
				);
			})}
		</>
	);
}
