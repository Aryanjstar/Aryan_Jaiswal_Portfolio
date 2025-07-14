import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
	return (
		<section id="projects" className="py-20">
			<h1 className="heading">
				<span className="text-purple">Project</span> Showcase
			</h1>

			<div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
				{projects.map((project) => {
					const { id, des, iconLists, img, sourceCode, title } = project;
					const demoLink = "demoLink" in project ? project.demoLink : undefined;
					const liveLink = "liveLink" in project ? project.liveLink : undefined;

					return (
						<div
							key={id}
							className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
						>
							<PinContainer title="Visit" href={liveLink || sourceCode}>
								<div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
									<div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
										<Image
											height={330}
											width={552}
											src="/bg.png"
											alt="bg-img"
										/>
									</div>

									<Image
										height={300}
										width={464}
										src={img}
										alt={title}
										className="absolute bottom-0 z-10"
									/>
								</div>

								<h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
									{title}
								</h1>

								<p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
									{des}
								</p>

								<div className="mb-3 mt-7 flex items-center justify-between">
									<div className="flex items-center">
										{iconLists.map((icon, i) => (
											<div
												key={icon}
												className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
												style={{
													transform: `translateX(-${5 * i * 2}px)`,
												}}
											>
												<Image
													height={40}
													width={40}
													src={icon}
													alt={icon}
													className="p-2"
												/>
											</div>
										))}
									</div>

									<div className="flex items-center justify-center gap-4">
																			{liveLink && (
										<div className="flex items-center">
											<Link
												href={liveLink}
												target="_blank"
												rel="noreferrer noopener"
												className="flex text-sm text-purple md:text-xs lg:text-xl"
											>
												Live
											</Link>
											<FaLocationArrow className="ms-2" color="#cbacf9" />
										</div>
									)}

										{demoLink && (
											<div className="flex items-center">
												<Link
													href={demoLink}
													target="_blank"
													rel="noreferrer noopener"
													className="flex text-sm text-purple md:text-xs lg:text-xl"
												>
													Demo
												</Link>
												<FaLocationArrow className="ms-2" color="#cbacf9" />
											</div>
										)}

										<div className="flex items-center">
											<Link
												href={sourceCode}
												target="_blank"
												rel="noreferrer noopener"
												className="flex text-sm text-purple md:text-xs lg:text-xl"
											>
												GitHub
											</Link>
											<FaLocationArrow className="ms-2" color="#cbacf9" />
										</div>
									</div>
								</div>
							</PinContainer>
						</div>
					);
				})}
			</div>
		</section>
	);
};
