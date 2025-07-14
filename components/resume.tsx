import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";
import {
	SiCplusplus,
	SiJavascript,
	SiTypescript,
	SiPython,
	SiHtml5,
	SiCss3,
	SiMysql,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiFlask,
	SiTailwindcss,
	SiGooglecloud,
	SiMongodb,
	SiTensorflow,
	SiPytorch,
	SiScikitlearn,
	SiPandas,
	SiNumpy,
	SiGit,
	SiGithub,
	SiDocker,
	SiLinux,
	SiPostman,
	SiFigma,
	SiOpenai,
	SiThreedotjs,
	SiNextdotjs,
	SiNetlify,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaCog, FaLaptopCode, FaBrain, FaProjectDiagram } from "react-icons/fa";

import { socialMedia } from "@/data";
import { MagicButton } from "@/components/ui/magic-button";

export const Resume = () => {
	const education = [
		{
			institution: "Indian Institute of Information Technology, Dharwad",
			degree: "Bachelor of Technology in Computer Science and Engineering",
			duration: "2022 - 2026",
			location: "Dharwad, Karnataka",
		},
	];

	const experience = [
		{
			company: "InfoKalash",
			position: "UI/UX Developer Intern",
			duration: "Jan 2025 – Feb 2025",
			location: "Remote",
			responsibilities: [
				"Redesigned core user workflows in Figma for 3 client portals, resulting in 40% reduction in user-reported navigation confusion during usability testing sessions.",
				"Led user research sessions with 15+ target users, synthesizing feedback to pivot initial design approach, contributing to 30% projected increase in user engagement metrics.",
				"Applied responsive design principles across 10+ device breakpoints, ensuring seamless cross-platform accessibility and modern design standards.",
			],
		},
		{
			company: "Infosys Springboard",
			position: "Plant Disease Classification Project Intern",
			duration: "Mar 2024 – July 2024",
			location: "Remote",
			responsibilities: [
				"Crafted a website using HTML, CSS, and Flask, integrating a CNN Sequential model for plant disease classification with 90%+ accuracy across training and validation sets.",
				"Developed and optimized a CNN model on 60,000+ plant images, using advanced data augmentation techniques to achieve a 92% precision rate, ensuring reliable disease classification.",
				"Enhanced backend performance by refactoring user authentication and image upload functionalities, resulting in a 50% reduction in response time and a 30% improvement in page load speed, ensuring a scalable and efficient user experience.",
			],
		},
	];

	const projects = [
		{
			title: "AI Career Navigator",
			technologies: [
				{ name: "Azure OpenAI", icon: <SiOpenai className="w-4 h-4" /> },
				{ name: "React.js", icon: <SiReact className="w-4 h-4" /> },
				{ name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
				{ name: "Flask", icon: <SiFlask className="w-4 h-4" /> },
				{ name: "Three.js", icon: <SiThreedotjs className="w-4 h-4" /> },
			],
			links: {
				github: "https://github.com/Aryanjstar/AI-Career-Navigator",
				demo: "https://www.youtube.com/watch?v=t_e-CtLxn_Q",
			},
			description: [
				"Designed and implemented core algorithms for a production-ready AI career platform using Azure OpenAI GPT-4.1, tested locally by 100+ users, providing personalized resume insights and tailored career guidance.",
				"Architected a scalable microservices infrastructure (React/TypeScript, Flask) on Azure App Service and AI Search, handling 500+ document processing operations with 99% uptime in testing.",
				"Built advanced ML features including career chat, resume analysis, skill gap detection and dynamic interview generation; received positive peer feedback and demonstrated a 60% reduction in career preparation time.",
			],
		},
		{
			title: "Personal Portfolio Website",
			technologies: [
				{ name: "React.js", icon: <SiReact className="w-4 h-4" /> },
				{ name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
				{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
				{ name: "Three.js", icon: <SiThreedotjs className="w-4 h-4" /> },
			],
			links: {
				live: "https://aryanjaiswal.me",
				github: "https://github.com/Aryanjstar/Aryan_Jaiswal_Portfolio",
			},
			description: [
				"Constructed a full-stack interactive portfolio using Next.js and Three.js, achieving 95+ scores on Google Lighthouse for performance and accessibility; deployed via GitHub-integrated CI/CD pipeline on Netlify.",
				"Composed immersive 3D visuals and interactive animations using Three.js, optimizing rendering performance across 10+ device breakpoints for a seamless user experience.",
				"Integrated comprehensive SEO enhancements and responsive design principles, resulting in 40% faster load times and significantly improved user engagement metrics.",
			],
		},
	];

	const technicalSkills = {
		"CS Fundamentals": [
			{
				name: "Data Structures",
				icon: <FaProjectDiagram className="w-5 h-5" />,
			},
			{ name: "Algorithms", icon: <FaBrain className="w-5 h-5" /> },
			{ name: "OOP", icon: <FaLaptopCode className="w-5 h-5" /> },
			{ name: "Operating Systems", icon: <FaCog className="w-5 h-5" /> },
		],
		Languages: [
			{ name: "C++", icon: <SiCplusplus className="w-5 h-5" /> },
			{ name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
			{ name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
			{ name: "Python", icon: <SiPython className="w-5 h-5" /> },
			{ name: "Java", icon: <FaJava className="w-5 h-5" /> },
			{ name: "HTML", icon: <SiHtml5 className="w-5 h-5" /> },
			{ name: "CSS", icon: <SiCss3 className="w-5 h-5" /> },
			{ name: "SQL", icon: <SiMysql className="w-5 h-5" /> },
		],
		"Frameworks/Libraries": [
			{ name: "React.js", icon: <SiReact className="w-5 h-5" /> },
			{ name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
			{ name: "Express.js", icon: <SiExpress className="w-5 h-5" /> },
			{ name: "Flask", icon: <SiFlask className="w-5 h-5" /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
		],
		"Cloud/Databases": [
			{ name: "AWS", icon: <SiGooglecloud className="w-5 h-5" /> },
			{ name: "Azure", icon: <SiGooglecloud className="w-5 h-5" /> },
			{ name: "GCP", icon: <SiGooglecloud className="w-5 h-5" /> },
			{ name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
			{ name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
		],
		"ML/AI": [
			{ name: "Azure OpenAI", icon: <SiOpenai className="w-5 h-5" /> },
			{ name: "GPT-4.1", icon: <SiOpenai className="w-5 h-5" /> },
			{ name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5" /> },
			{ name: "PyTorch", icon: <SiPytorch className="w-5 h-5" /> },
			{ name: "Scikit-learn", icon: <SiScikitlearn className="w-5 h-5" /> },
			{ name: "Pandas", icon: <SiPandas className="w-5 h-5" /> },
			{ name: "NumPy", icon: <SiNumpy className="w-5 h-5" /> },
		],
		"Tools & DevOps": [
			{ name: "Git", icon: <SiGit className="w-5 h-5" /> },
			{ name: "GitHub", icon: <SiGithub className="w-5 h-5" /> },
			{ name: "VS Code", icon: <SiDocker className="w-5 h-5" /> },
			{ name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
			{ name: "Linux", icon: <SiLinux className="w-5 h-5" /> },
			{ name: "Postman", icon: <SiPostman className="w-5 h-5" /> },
			{ name: "Figma", icon: <SiFigma className="w-5 h-5" /> },
		],
	};

	const achievements = [
		"Finalist – Level Supermind Hackathon, Mumbai: Top 2% (500/25,000+ participants)",
		"Competitive Programming: GFG college rank 14, 1-year streak on LeetCode and GFG",
		"Microsoft AI Odyssey: Completed Levels 1 & 2; ranked in top 5% globally",
		"Featured Developer: Spotlighted on Azure Developer Community's YouTube channel for AI innovation",
		"Google Cloud Study Jams: Mentored 30+ participants; completed Cloud and GenAI tracks",
		"Founder & President – MLSA Chapter, IIIT Dharwad: Built and led the official Microsoft student community on campus",
		"Certifications: Deep Learning Specialization (Andrew Ng), Stanford Innovation & Entrepreneurship",
	];

	return (
		<section id="resume" className="py-20">
			<div className="max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-12">
					<h1 className="heading">
						My <span className="text-purple">Resume</span>
					</h1>

					<Link href="/Aryan_CV.pdf" target="_blank" rel="noreferrer noopener">
						<MagicButton
							title="Resume"
							icon={<FaDownload />}
							position="right"
							asChild
						/>
					</Link>
				</div>

				<div className="space-y-12">
					{/* Personal Info */}
					<div className="text-center border-b border-white/[0.1] pb-8">
						<h2 className="text-4xl font-bold text-white mb-2">
							Aryan Jaiswal
						</h2>
						<p className="text-lg text-white-200 mb-4">
							Computer Science Student & Full Stack Developer
						</p>
						<div className="flex justify-center space-x-6 text-white-200 flex-wrap">
							<span>📧 aryanjstar3@gmail.com</span>
							<span>📍 Brijmanganj, Uttar Pradesh</span>
						</div>
						<div className="flex justify-center space-x-4 mt-4 flex-wrap">
							<Link
								href="https://linkedin.com/in/aryanjstar"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								LinkedIn
							</Link>
							<Link
								href="https://github.com/aryanjstar"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								GitHub
							</Link>
							<Link
								href="https://leetcode.com/aryanjstar"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								LeetCode
							</Link>
							<Link
								href="https://www.geeksforgeeks.org/user/aryanjstar/"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								GeeksforGeeks
							</Link>
						</div>
					</div>

					{/* Education */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Education</h3>
						<div className="space-y-4">
							{education.map((edu, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<h4 className="text-xl font-semibold text-white">
										{edu.degree}
									</h4>
									<p className="text-white-200 mb-1">{edu.institution}</p>
									<div className="flex justify-between text-white-100 flex-wrap">
										<span>{edu.duration}</span>
										<span>{edu.location}</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Work Experience */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Experience</h3>
						<div className="space-y-8">
							{experience.map((exp, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<div className="flex justify-between items-start mb-2 flex-wrap">
										<div>
											<h4 className="text-xl font-semibold text-white">
												{exp.position}
											</h4>
											<p className="text-white-200">{exp.company}</p>
										</div>
										<div className="text-right text-white-100">
											<p>{exp.duration}</p>
											<p>{exp.location}</p>
										</div>
									</div>
									<ul className="space-y-2 text-white-100">
										{exp.responsibilities.map((responsibility, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-purple mr-2 mt-1">•</span>
												<span className="leading-relaxed">
													{responsibility}
												</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Projects */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Projects</h3>
						<div className="space-y-8">
							{projects.map((project, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<div className="flex justify-between items-start mb-3 flex-wrap">
										<h4 className="text-xl font-semibold text-white">
											{project.title}
										</h4>
										<div className="flex space-x-4">
											{project.links.github && (
												<Link
													href={project.links.github}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													GitHub
												</Link>
											)}
											{project.links.demo && (
												<Link
													href={project.links.demo}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													Demo
												</Link>
											)}
											{project.links.live && (
												<Link
													href={project.links.live}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													Live
												</Link>
											)}
										</div>
									</div>
									<div className="flex flex-wrap gap-3 mb-4">
										{project.technologies.map((tech, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10132e] to-[#1a1a3e] text-white-100 rounded-lg border border-white/[0.1] hover:border-purple/50 transition-all duration-300 hover:scale-105"
											>
												<span className="text-purple">{tech.icon}</span>
												<span className="text-sm font-medium">{tech.name}</span>
											</div>
										))}
									</div>
									<ul className="space-y-2 text-white-100">
										{project.description.map((desc, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-purple mr-2 mt-1">•</span>
												<span className="leading-relaxed">{desc}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Technical Skills */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-8">
							Technical Skills
						</h3>
						<div className="space-y-8">
							{Object.entries(technicalSkills).map(([category, skills]) => (
								<div key={category}>
									<h4 className="text-xl font-semibold text-white mb-4">
										{category}
									</h4>
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
										{skills.map((skill) => (
											<div
												key={skill.name}
												className="flex flex-col items-center p-4 bg-gradient-to-br from-[#0f0f23] via-[#16213e] to-[#0f0f23] rounded-xl border border-white/[0.1] hover:border-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple/20 group"
											>
												<div className="text-purple group-hover:text-white transition-colors duration-300 mb-2">
													{skill.icon}
												</div>
												<span className="text-sm text-white-100 text-center font-medium">
													{skill.name}
												</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Accomplishments & Leadership */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">
							Accomplishments & Leadership
						</h3>
						<div className="grid grid-cols-1 gap-4">
							{achievements.map((achievement, index) => (
								<div
									key={index}
									className="flex items-start p-4 bg-black-200 rounded-lg border border-white/[0.1]"
								>
									<span className="text-purple text-lg mr-3 flex-shrink-0 -mt-1">
										•
									</span>
									<span className="text-white-100 leading-relaxed">
										{achievement}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
