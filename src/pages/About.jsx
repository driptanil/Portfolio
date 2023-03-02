import { motion } from "framer-motion";
import TypingAnimation from "./components/TypingAnimation";
import { useState, useContext } from "react";
import { AppContext } from "../App";

function Section(props) {
	const { cursorInvisible, cursorDefault } = useContext(AppContext);

	const container = {
		hidden: { opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 1,
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

	const [hoverEffect, setHoverEffect] = useState(-1);

	const resetFocus = () => {
		cursorDefault();
		setHoverEffect(-1);
	};

	const focus = (a) => (e) => {
		cursorInvisible();
		setHoverEffect(a);
	};

	const section = props.data;

	// const controls = useAnimation();
	// const [ref, inView] = useInView();

	// useEffect(() => {
	//   if (inView) {
	// 	controls.start("visible");
	//   }
	// }, [controls, inView]);

	return (
		<>
			<motion.div
				className="flex flex-col items-center justify-center rounded-3xl "
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.8 }}
			>
				<h2 className="px-10 text-6xl mr-auto">#00{props.index}</h2>
				<motion.li variants={item} className="my-4 list-none text-3xl">
					<p> My </p>
				</motion.li>
				<TypingAnimation
					text={section.title}
					delay={1}
					stagger={0.1}
					cursor="none"
					styling="text-9xl name lime2"
				/>
				{/* <hr className="ml-1 h-2 w-9 bg-neutral-50"></hr> */}

				<motion.div
					className="flex justify-between"
					variants={container2}
				>
					{section.button.map((point, index2) => {
						return (
							<motion.button
								variants={item}
								onMouseEnter={focus(index2)}
								onMouseLeave={resetFocus}
								animate={
									hoverEffect === index2
										? { scale: 1.25 }
										: hoverEffect !== -1
										? { WebkitFilter: "blur(2px)" }
										: {}
								}
								className="lime1 mx-3 cursor-none rounded-full bg-slate-700 px-4 py-1 text-xl"
							>
								{point}
							</motion.button>
						);
					})}
				</motion.div>

				<motion.ol
					variants={container2}
					className="mx-20 mt-6 flex list-decimal flex-row items-center justify-between text-lg text-slate-300"
				>
					{section.details.map((point, index2) => {
						return (
							<motion.li
								variants={item}
								// transition={{ ease: "easeOut", duration: 2 }}
								onMouseEnter={focus(index2)}
								onMouseLeave={resetFocus}
								className="mt-10 rounded-3xl px-16 py-8"
								animate={
									hoverEffect === index2
										? {
												backgroundColor:
													"rgb(241 245 249 / 0.05)",
												scale: 1.25,
										  }
										: hoverEffect !== -1
										? { WebkitFilter: "blur(4px)" }
										: {}
								}
							>
								{point}
							</motion.li>
						);
					})}
				</motion.ol>
			</motion.div>
		</>
	);
}

export default function About() {
	const aboutData = [
		{
			title: "Contra-view",
			button: ["my nature", "my experience", "my benefits"],
			details: [
				<>
					From my school days, I used to{" "}
					<p className="lime1 inline">uphold a different path </p>
					towards proving a premise or concept from a mass viewpoint.
				</>,
				<>
					That proves to be a hurdle to me, as sometimes it does not
					reflect my effort and intellect in my academic result, but
					my mentors are happy with me because in the process I don’t
					need to be much argumentative showing
					<p className="lime1 inline"> different hues. </p>
				</>,
				<>
					At this stage, I am{" "}
					<p className="lime1 inline">immensely benefitted </p> by
					getting light from hitherto unexplored duct when solving a
					problem with data analytics and data structures and
					algorithms.
				</>,
			],
		},
		{
			title: "Rote Reluctant",
			button: ["my nature", "my experience", "my benefits"],
			details: [
				<>
					Rote learning is very difficult to manoeuver for me. I could
					not accept a proposition
					<p className="lime1 inline">
						{" "}
						till it is logically consistent{" "}
					</p>
					to me.
				</>,
				<>
					It takes a longer time to understand but once it gets into
					me I <p className="lime1 inline"> enjoy the concept </p>{" "}
					perhaps more than others do.
				</>,
				<>
					It’s very helpful to me to decipher a knotty problem and to{" "}
					<p className="lime1 inline"> usher a new trail</p>
				</>,
			],
		},
		{
			title: "Meticulosity",
			button: [
				"my nature",
				"my experience",
				"my benefits",
				"my conclusion",
			],
			details: [
				<>
					I can’t leave an assignment till I feel all the aspects in
					it are taken care off,{" "}
					<p className="lime1 inline">complete in the true sense</p>{" "}
					and there is no room for further improvement.
				</>,
				<>
					For this reason, sometimes I can accomplish a job at the
					last moment of the deadline only because I think the extra
					time spent,{" "}
					<p className="lime1 inline">saves time and money</p>.
				</>,
				<>
					According to me, a quick and shortcut process adds only the
					burden of botheration and inefficiency in future.
				</>,
				<>
					Lately, I am able to improvise my attitude to meet the
					deadline with an intimation of a red flag to the assignor of
					the job.
				</>,
			],
		},
	];

	return (
		<>
			{aboutData.map((data, index) => {
				return (
					<div className="sticky top-32 mx-16 flex flex-row rounded-2xl bg-gradient-to-t from-neutral-900 to-neutral-800 pt-6 pb-32">
						<Section data={data} index={index + 1} />
					</div>
				);
			})}
		</>
	);
}
