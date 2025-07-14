"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MagicButton } from "@/components/ui/magic-button";

export const Approach = () => {
	return (
		<section className="w-full py-20">
			<h1 className="heading">
				My <span className="text-purple">approach</span>
			</h1>

			<div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
				<Card
					title="Planning & Strategy"
					icon={<MagicButton title="Phase 1" asChild />}
					description="I believe in thorough planning and clear communication. I enjoy collaborating with teams to understand project requirements, user needs, and technical constraints. I'm eager to contribute ideas while learning from experienced developers."
				>
					<CanvasRevealEffect
						animationSpeed={5.1}
						containerClassName="bg-emerald-900"
					/>
				</Card>

				<Card
					title="Learning & Development"
					icon={<MagicButton title="Phase 2" asChild />}
					description="I embrace continuous learning and iterative development. I enjoy diving into new technologies, writing clean code, and seeking feedback from mentors and peers. I believe in documenting progress and sharing knowledge with the team."
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName="bg-black"
						colors={[
							[236, 72, 153],
							[232, 121, 249],
						]}
						dotSize={2}
					/>
				</Card>

				<Card
					title="Implementation & Growth"
					icon={<MagicButton title="Phase 3" asChild />}
					description="I'm passionate about turning ideas into functional solutions. I focus on writing efficient, maintainable code while being open to code reviews and collaborative problem-solving. I see every project as an opportunity to grow and contribute meaningfully."
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName="bg-sky-600"
						colors={[[125, 211, 252]]}
					/>
				</Card>
			</div>
		</section>
	);
};

type CardProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
};

const Card = ({ title, description, icon, children }: CardProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
		>
			<Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
			<Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
			<Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
			<Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="absolute inset-0 h-full w-full"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20">
				<div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
					{icon}
				</div>

				<h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
					{title}
				</h2>

				<p
					className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
					style={{
						color: "#e4ecff",
					}}
				>
					{description}
				</p>
			</div>
		</div>
	);
};

export const Icon = ({ className, ...props }: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...props}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
		</svg>
	);
};
