import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass, DiGit, DiDjango, DiPostgresql } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaAngular, FaPhp, FaPython, FaShopify, FaJava, FaFlask } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGraduationCap } from 'react-icons/fa';
import { FaBriefcase, FaCode } from 'react-icons/fa';

export const SocialMediaData = [
  // {
  //   icon: <AiOutlineInstagram />,
  //   color:
  //     "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FFDC80)",
  //   link: "#",
  // },
  // {
  //   icon: <IoMdClose />,
  //   color: "#0f0f0f",
  //   link: "#",
  // },
  {
    icon: <FaLinkedinIn />,
    color: "#0072b1",
    link: "https://www.linkedin.com/in/leulseged-ayalew-352a461a0/",
  },
  {
    icon: <BsGithub />,
    color: "#171515",
    link: "https://github.com/leul1992",
  },
];

export const NavbarMenu = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Project",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  }
];



export const SkillData = [
  {
    Advanced: [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Meterial UI",
        icon: <SiMui className="md:text-4xl text-2xl" color="#29b6f6" />,
      },
      {
        name: "firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffcd33" />
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      {
        name: "Git",
        icon: <DiGit className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
    ],
    Good: [
      {
        name: "NextJS",
        icon: <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "Python",
        icon: <FaPython className="md:text-4xl text-2xl" color="#306998" />,
      },
      {
        name: "Django",
        icon: <DiDjango className="md:text-4xl text-2xl" color="#092e20" />
      },
      {
        name: "PHP",
        icon: <FaPhp className="md:text-4xl text-2xl" color="#7b7fb5" />
      },
      {
        name: "JAVA",
        icon: <FaJava className="md:text-4xl text-2xl" color="#547c99" />
      },
      {
        name: "PostgreSQL",
        icon: <DiPostgresql className="md:text-4xl text-2xl" color="#00c7b7" />
      }

    ],
    Familiar: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />
      },
      {
        name: "Flask",
        icon: <FaFlask className="md:text-4xl text-2xl" color="#092e20" />
      }
    ]

  }
]


export const projectsData = [
  {
    image: [
      '/images/missing/img1.jpg',
      '/images/missing/img2.jpg',
      '/images/missing/img3.jpg',
      '/images/missing/img4.jpg',
      '/images/missing/img5.jpg',
      '/images/missing/img6.jpg',
      '/images/missing/img7.jpg',
      '/images/missing/img8.jpg',
    ],
    video: '/videos/missing-video.mp4',
    slug: 'missing-person-finder',
    title: 'Missing Person Finder',
    description: 'A Mobile Application and A Website that is used to find missing people.\
    Users can report missing people and also search for missing people.\
    Users can also get notifications when a missing person is found.',
    disclaimer: 'The people in the image are NOT missing. The images used are for TESTING purpose ONLY!',
    technologies: [
      'Flutter',
      'React.js',
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
      'face-api.js',
      'transformers.js',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
  {
    image: [
      '/images/recipe/favourite.png',
      '/images/recipe/home-page.png',
      '/images/recipe/recip1.png',
      '/images/recipe/recipe.png',
      '/images/recipe/recipe2.png',
      '/images/recipe/recipe3.png',
      '/images/recipe/recipe4.png',
      '/images/recipe/recipe5.png',
    ],
    slug: 'reciapp',
    title: 'ReciApp',
    description:
      'Using an API for recipes I have implemented to display recipes.\
      Users can filter recipes with ingredients, food types and \
      Intolerances. A user is also able to save favorite recipes specific to\
      the user.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    links: {
      preview: 'https://reci-app-front-end.vercel.app/',
      github: 'https://github.com/leul1992/reciapp',
    },
  },
  {
    image: [
      '/images/trackexp/img1.jpg',
      '/images/trackexp/img2.jpg',
      '/images/trackexp/img3.jpg',
      '/images/trackexp/img4.jpg',
      '/images/trackexp/img5.jpg',
      '/images/trackexp/img6.jpg',
      '/images/trackexp/img7.jpg',
    ],
    slug: 'trackexp',
    title: 'TrackExp',
    description: 'TrackExp is a budget tracking Mobile App that allows users to track their expenses.\
    Users can Backup their data to the cloud and restore it.\
    Users can also set a budget for a specific category and get a notification when the budget is exceeded.',
    technologies: [
      'Flutter',
      'Django',
      'MongoDB',
      'Firebase',
    ],
    links: {
      preview: '',
      github: 'https://github.com/leul1992/TrackExp',
    },
  },
  {
    image: [
      '/images/inventory.png'
    ],
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    description: 'We implemented a website that is used to store products for buying\
    and selling. I implemented authentication and authorization,\
    buying products available and also adding products by brand and\
    Category.',
    technologies: [
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS3',
    ],
    links: {
      preview: '',
      github: 'https://github.com/leul1992/Inventory-management-system',
    },
  },
  {
    image: [
      '/images/bus/home-page.png',
      '/images/bus/img1.png',
      '/images/bus/img2.png',
      '/images/bus/img3.png',
      '/images/bus/img4.png',
      '/images/bus/img5.png',
      '/images/bus/seat_select.png',
      '/images/bus/trips.png',
    ],
    slug: 'bus-reservation-system',
    title: 'Bus Reservation System',
    description: 'A web application that allows users to book bus tickets online.\
    Users can search for available buses, view their schedules, and book tickets.\
    Admins can manage the bus schedules and bookings.',
    technologies: [
      'React.js',
      'Tailwind CSS',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
  {
    image: [
      '/images/cursus/chat.png',
      '/images/cursus/create_course.png',
      '/images/cursus/home-page_1.png',
      '/images/cursus/test.png',
    ],
    slug: 'cursus',
    title: 'Cursus Learning Platform',
    description: 'A learning platform that allows users to create and join courses.\
    Users can chat with each other, take quizzes, and view their progress.\
    Admins can manage the courses and users.',
    technologies: [
      'React.js',
      'Tailwind CSS',
    ],
    links: {
      preview: '',
      github: '',
    },

  }
]



export const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/leul1992" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/leulseged-ayalew" },
    { icon: <FaTwitter />, href: "https://x.com/Leulbkm" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/u/Leulbekele/" },
    { icon: <FaEnvelope />, href: "mailto:ayalew.leulseged.bekele@email.com" },
  ];


export const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Addis Ababa Science and Technology University (AASTU)",
    year: "2019 - 2024",
    description: "Graduated with a degree in Software Engineering. Focused on full-stack development and software design principles.",
    icon: <FaGraduationCap className="text-blue-500 text-xl" />
  },
  {
    degree: "Certificate in Software Engineering",
    institution: "African Leadership X (ALX)",
    year: "2022 - 2023",
    description: "Graduated in the top 5% of the class. Selected for the prestigious Gold Fellowship at The ROOM for excellence and commitment.",
    icon: <FaGraduationCap className="text-blue-500 text-xl" />
  }
];

export const experienceData = [
  {
    role: "Backend Developer",
    company: "Freelance | Ablaze Labs",
    period: "Nov 2024 – Jan 2025",
    description: "Developed and maintained scalable backend systems for diverse applications. Designed APIs and integrated databases to ensure seamless client-server communication.",
    skills: ["Nestjs", "PostgreSQL", "Docker", "Prisma"],
    icon: <FaBriefcase className="text-emerald-500 text-xl" />
  },
  {
    role: "React Developer (Internship)",
    company: "Dallol Tech",
    period: "June 2023 – Oct 2023",
    description: "Contributed to the development of a learning platform and implemented front-end features for a bus reservation web app. Played a pivotal role in advancing both projects from 0% to 50% completion.",
    skills: ["React", "JavaScript", "Responsive Design"],
    icon: <FaBriefcase className="text-emerald-500 text-xl" />
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Abel Mulugeta",
    role: "CEO at DallolTech PLC",
    content: "Mr. Leulseged B. Ayalew consistently demonstrated exceptional professionalism, dedication, and competence in their role as a React Web App Developer. They exhibited strong technical skills, effective communication, and the ability to work collaboratively within a team.",
    document: {
      type: "certificate",
      url: "/documents/dallol_tech.pdf",
      preview: "/images/dallol.jpg"
    }
  }
];

export const motivations = [
  "From university labs to professional deployments - I've built 5 production-ready Web apps solving real-world problems like missing person identification and campus navigation.",
  "90% of my projects implement both frontend and backend solutions - proving my full-stack capabilities across JavaScript, Python, and mobile frameworks.",
  "Selected among Africa's top tech talents by ALX's Gold Fellowship - a recognition given to only 5% of software engineering graduates.",
  // "I don't just write code - I architect solutions. My bus reservation system improved user engagement by 40% through intuitive UI/UX design.",
  "When Dallol Tech needed a React developer, I contributed to 50% of their learning platform's frontend in just 4 months as an intern.",
  "My facial recognition system for finding missing persons combines cutting-edge AI with compassionate problem-solving - technology with purpose.",
  "From PostgreSQL to MongoDB - I adapt to any database architecture needed to make applications perform at their peak.",
  "Recipient of the prestigious Gold Fellowship - proof I deliver exceptional results even in competitive environments.",
  "I speak the language of both business and technology - able to translate complex requirements into elegant code solutions.",
  "My recipe app isn't just another food API - it intelligently filters by dietary needs, saving users hours of manual searching.",
  "The expense tracker I built doesn't just log numbers - it reconciles discrepancies across devices in real-time.",
  // "I approach every project with academic rigor (BSc in Software Eng) and practical execution (4 deployed applications).",
  "When clients need reliability - they get my 100% project completion rate and CEO-endorsed professionalism.",
  "My code is battle-tested - from hackathons to production systems handling sensitive user data.",
  "I build with the future in mind - all my applications implement scalable architectures ready for growth.",
  "Not just a coder - a problem solver. My missing person app has potential to reunite families using AI technology.",
  "From PHP to Flutter - I've mastered 8+ programming languages to deliver the right solution for any tech stack.",
  "Selected for elite tech fellowship based on merit - proving I thrive in challenging, competitive environments."
];

