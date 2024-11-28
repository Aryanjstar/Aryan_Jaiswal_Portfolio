import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Milestones", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    title: "Tech enthusiast with a passion for AI, CP & development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently deep diving into BlockChain",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    title: "Plant Disease Classification",
    des: "An AI-powered, sustainable farming solution using TensorFlow, OpenCV, and data analytics to detect plant diseases, optimize yields, and promote eco-friendly agriculture.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", 
      "/tf1.svg", "/py.png", "/gc.png"],
    // link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/Aryanjstar/Plant_Disease_Classification",
  },
  {
    id: 2,
    title: "House Price Prediction Model",
    des: "A Python-based house price prediction system using Kaggle's Seattle dataset, Ridge regression, and a Flask-powered web app for user-friendly predictions.",
    img: "/p2.svg",
    iconLists: ["/tail.svg", "/gc.png", "/py.png", 
      "/jup.png"],
    // link: "https://clone-yoom.netlify.app",
    sourceCode: "https://github.com/Aryanjstar/House-Price-Prediction",
  },
  {
    id: 3,
    title: "Bank Management System",
    des: "A console-based C++ banking system using OOP to manage account creation, deposits, withdrawals, and balance display via a menu-driven interface.",
    img: "/p3.svg",
    iconLists: ["/c++.svg", "/sql.svg", "/vs.png"],
    // link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/Aryanjstar/Bank-Management-System",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://app-iphone.netlify.app",
  //   sourceCode: "https://github.com/sanidhyy/apple-clone",
  // },
] as const;

export const testimonials = [


  {
    quote: `I had the honor of presenting my project as a Plant Disease Classification Intern at the inaugural Infosys Springboard Summit in Bangalore. Alongside my teammates, we showcased our work to industry leaders like Nandan Nilekani and Dr. Pramod Varma. Due to my outstanding performance during the internship, I was given a special invite and a felicitation. The summit was a fantastic opportunity to network and explore innovative tech solutions through insightful discussions, AI and robotics demos, and the "Infosys on Wheels" initiative.`,
    name: "Infosys Springboard",
    title: "Plant Disease Classification Project Intern",
    image: "/profile.svg",
  },

  {
    quote: `Successfully completed Levels 1 and 2 of the Microsoft AI Odyssey Challenge in January 2024, with certification in February. Among the 5% of participants to achieve this, I gained hands-on expertise in Azure Vision, AI Document Intelligence, and AI Language, mastering computer vision, NLP, and scalable AI solutions. As an MLSA, my insights on how generative AI drives my success were featured on the Azure Developer Community’s YouTube channel.`,
    name: "Microsoft",
    title: "Microsoft AI Odyssey: My Journey to Success",
    image: "/mic.png",
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
  },

  {
    quote: `Our club is focused on Indian Knowledge Systems (IKS), I lead initiatives to promote cultural heritage through lectures, discussions, celebrating festivals and workshops. I also designed the club's logo. Under the guidance of our faculty advisor, Dr. Chinmayananda, Prabodhini provides a platform for students to explore and appreciate India’s intellectual legacy.`,
    name: "Prabodhini",
    title: "Co-founder & Vice President, Prabodhini Club, IIIT Dharwad",
    image: "/prab.jpeg",
  },

  {
    quote: `I’ve actively contributed to various impactful community service initiatives, including the Tree Plantation Drive and the 2,500 km World Record Human Chain across Karnataka, recognized by Guinness World Records. Through these and many more activities, I’ve gained valuable experience in teamwork, leadership, event coordination, and community engagement.`,
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
  },
  
  
]as const;

export const workExperience = [
  {
    id: 1,
    title: "Plant Disease Classification Project Intern",
    desc: "Designed and developed AI-powered solution leveraging TensorFlow, OpenCV, and data analytics to detect plant diseases, enhance yields, and support eco-friendly agriculture.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
   
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
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
    name: "X (Twitter)",
    img: "/twit.svg",
    link: "https://x.com/Aryanjstar",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aryanjstar",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "MongoDB"],
  stack2: ["Vue.js", "Typescript", "Python"],
} as const;
