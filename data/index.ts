import { links } from "@/config";

export const navItems = [
	{ name: "Home", link: "#" },
	{ name: "Experience", link: "#experience" },
	{ name: "Projects", link: "#projects" },
	{ name: "Resume", link: "#resume" },
	{ name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
	{
		id: 1,
		title:
			"I believe in collaborative learning and effective team communication",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "Eager to learn and contribute to innovative projects",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for DSA, Dev & AI/ML.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently deep diving into GenAI",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Ready to bring fresh ideas to your team?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
] as const;

export const projects = [
	{
		id: 1,
		title: "AI Career Navigator",
		des: "An intelligent career guidance platform that analyzes resumes, detects skill gaps, generates personalized interview questions, and recommends tailored career roadmaps using Azure OpenAI GPT-4.1 and modern web technologies.",
		img: "/project1.svg",
		iconLists: ["/py.png", "/re.svg", "/ts.svg", "/three.svg", "/tail.svg"],
		sourceCode: "https://github.com/Aryanjstar/AI-Career-Navigator",
		demoLink: "https://www.youtube.com/watch?v=t_e-CtLxn_Q",
	},
	{
		id: 2,
		title: "Portfolio Website",
		des: "A personal developer portfolio designed to showcase my journey, projects, skills, and technical growth. Built using React.js, Next.js, Three.js, and Tailwind CSS with smooth animations, bento-style layout, and dynamic 3D elements.",
		img: "/project5.svg",
		iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/three.svg", "/tail.svg"],
		sourceCode: "https://github.com/Aryanjstar/Aryan_Jaiswal_Portfolio",
		liveLink: "https://aryanjaiswal.me",
	},
	{
		id: 3,
		title: "BuzzHive",
		des: "An AI-powered social media analytics platform designed to help content creators, marketers, and brands optimize their content strategy through actionable insights and real-time data using machine learning and NLP.",
		img: "/project3.svg",
		iconLists: ["/ts.svg", "/py.png", "/re.svg", "/tail.svg", "/vs.png"],
		sourceCode: "https://github.com/Aryanjstar/BuzzHive",
	},
	{
		id: 4,
		title: "MLSA IIIT Dharwad Website",
		des: "Official web platform for the MLSA Chapter at IIIT Dharwad, providing students with access to curated learning resources, community updates, event announcements, and guidance related to the Microsoft Learn Student Ambassador program.",
		img: "/project4.svg",
		iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/ts.svg", "/vs.png"],
		sourceCode: "https://github.com/Aryanjstar/MLSA_IIITDWD",
		liveLink: "https://aryanjstar.github.io/MLSA_IIITDWD",
	},
	{
		id: 5,
		title: "PowerUPResume (PUR)",
		des: "An intelligent resume analysis platform that leverages advanced NLP algorithms and industry-driven heuristics to evaluate resumes beyond basic formatting, providing detailed insights into job-role compatibility and technical keyword density.",
		img: "/project2.svg",
		iconLists: ["/py.png", "/next.svg", "/re.svg", "/tail.svg", "/vs.png"],
		sourceCode: "https://github.com/Aryanjstar/PowerUpResume",
	},
] as const;

export const testimonials = [
	{
		quote: `I had the honor of presenting my project as a Plant Disease Classification Intern at the inaugural Infosys Springboard Summit in Bangalore. Alongside my teammates, we showcased our work to industry leaders like Nandan Nilekani and Dr. Pramod Varma. Due to my outstanding performance during the internship, I was given a special invite and a felicitation. The summit was a fantastic opportunity to network and explore innovative tech solutions through insightful discussions, AI and robotics demos, and the "Infosys on Wheels" initiative.`,
		name: "Infosys Springboard",
		title: "Plant Disease Classification Project Intern",
		image: "/profile.svg",
	},

	{
		quote: `Successfully completed Levels 1 and 2 of the Microsoft AI Odyssey Challenge in January 2024, with certification in February. Among the 5% of participants to achieve this, I gained hands-on expertise in Azure Vision, AI Document Intelligence, and AI Language, mastering computer vision, NLP, and scalable AI solutions. As an MLSA, my insights on how generative AI drives my success were featured on the Azure Developer Community's YouTube channel.`,
		name: "Microsoft",
		title: "Microsoft AI Odyssey: My Journey to Success",
		image: "/mic.png",
		link: "https://learn.microsoft.com/en-in/users/aryanjstar/transcript/vmljqigg363ropm",
		featuredLink: "https://www.youtube.com/watch?v=wcXFhSJnDE4",
	},

	{
		quote: `I successfully qualified for Stage 1 of the prestigious AlgoUniversity Technology Fellowship (ATF) 2024, standing out among over 20,000 applicants. As one of the top 4,000 students, placing in the top 20%, I have earned the opportunity to advance to Stage 2 of this competitive fellowship. This accomplishment reflects my technical skills, problem-solving abilities, and commitment to excellence in technology and programming.`,
		name: "Algo University",
		title: "Technology Fellowship",
		image: "/algo.png",
	},

	{
		quote: `I completed the Google Cloud and Gen AI Study Jams, assisting 30+ participants in their learning journey. Through these programs, I gained hands-on experience in cloud technologies and generative AI, reaching the advanced milestone with 25+ Arcade points. This enriching journey expanded my skills and knowledge, culminating in exciting goodies as a reward.`,
		name: "Google",
		title: "Google Cloud & Gen AI Study Jams",
		image: "/google.png",
		link: "https://www.cloudskillsboost.google/public_profiles/7f6ae770-ec84-4186-b4f9-7da9c315d4fe",
	},

	{
		quote: `Our club is focused on Indian Knowledge Systems (IKS), I lead initiatives to promote cultural heritage through lectures, discussions, celebrating festivals and workshops. I also designed the club's logo. Under the guidance of our faculty advisor, Dr. Chinmayananda, Prabodhini provides a platform for students to explore and appreciate India's intellectual legacy.`,
		name: "Prabodhini",
		title: "Co-founder & Vice President, Prabodhini Club, IIIT Dharwad",
		image: "/prab.jpeg",
	},

	{
		quote: `I've actively contributed to various impactful community service initiatives, including the Tree Plantation Drive and the 2,500 km World Record Human Chain across Karnataka, recognized by Guinness World Records. Through these and many more activities, I've gained valuable experience in teamwork, leadership, event coordination, and community engagement.`,
		name: "National Service Scheme (NSS)",
		title: "Student Volunteer",
		image: "/NSSf.svg",
	},

	{
		quote: `Clinched 3rd place at IIT Dharwad's Parsec 4.0 BitHunt 2.0! 🏆 After clearing Round 1 remotely from our hostel, we tackled diverse challenges—from DSA to reasoning and analytical skills—in Round 2 at the IIT Dharwad campus, securing victory with the help of Vinay Jain, Prathamesh Patil, and Pranay Chenamallah.`,
		name: "IIT Dharwad",
		title: "3rd Place at Parsec 4.0 BitHunt 2.0",
		image: "/iitdh.jpg",
	},

	{
		quote: `Completed the Machine Learning Specialization by DeepLearning.AI on Coursera, a 3-course series led by Andrew Ng. The series covered supervised learning, advanced algorithms, unsupervised learning, and recommender systems, using tools like Python, TensorFlow, and Scikit-Learn. This specialization significantly boosted my AI and Machine Learning skills, marking an important milestone in my tech journey.`,
		name: "Stanford University",
		title: "Machine Learning Specialization",
		image: "/stan.png",
	},

	{
		quote: `I am a β-MLSA and the Founder and President of the MLSA Chapter at IIIT Dharwad! 

Microsoft Learn Student Ambassadors (MLSA) is a global community of student leaders who are passionate about technology. As an MLSA, I aim to empower fellow students with the skills, resources, and opportunities to grow in tech through workshops, webinars, and collaborative projects. We're dedicated to fostering a culture of learning and sharing in the tech community!`,
		name: "Microsoft Learn Student Ambassadors",
		title: "β-MLSA & Founder, President of MLSA Chapter IIIT Dharwad",
		image: "/MLSA.png",
		// link: "https://aryanjstar.github.io/MLSA_IIITDWD",
	},
] as const;

export const workExperience = [
	{
		id: 1,
		title: "Plant Disease Classification Project Intern | Infosys Springboard",
		desc: "Developed a Flask-based plant disease classification app with a CNN model achieving 90%+ accuracy on 60,000+ images. Optimized backend performance, cutting response time by 50% and improving load speed by 30%.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
	},
	{
		id: 2,

		title: "UI/UX Developer Intern | InfoKalash",
		desc: "Redesigned user workflows for 3 client portals using Figma, reducing navigation confusion by 40%. Conducted user research to refine UX and ensured responsive design across 10+ devices.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
] as const;

export const socialMedia = [
	{
		name: "GitHub",
		img: "/git.svg",
		link: "https://github.com/Aryanjstar",
	},
	{
		name: "X",
		img: "/twit.svg",
		link: "https://x.com/Aryanjstar",
	},
	{
		name: "LinkedIn",
		img: "/link.svg",
		link: "https://www.linkedin.com/in/aryanjstar",
	},
	{
		name: "Instagram",
		img: "/insta.svg",
		link: "https://instagram.com/aryanjstar",
	},
	{
		name: "LeetCode",
		img: "/lc.png",
		link: "https://leetcode.com/aryanjstar",
	},
	{
		name: "GeeksforGeeks",
		img: "/gfg.png",
		link: "https://www.geeksforgeeks.org/user/aryanjstar/",
	},
] as const;

export const techStack = {
	stack1: ["React", "Node.js", "MongoDB"],
	stack2: ["Express", "Typescript", "Python"],
} as const;
