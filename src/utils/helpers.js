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
  // {
  //   name: "Education",
  //   link: "#education",
  // },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Project",
    link: "#project",
  },
  {
    name: "Contact",
    link: "#contact",
  }
];



export const SkillData = [
  {
    Advance: [
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
    image: '/images/reciapp.jpg',
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
    image: '/images/trackexp.jpg',
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
    image: '/images/inventory.png',
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
    image: '/images/missingperson.jpg',
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
  // {
  //   image: '/images/mid.png',
  //   title: 'project3',
  //   description: '#',
  //   technologies: [
  //     'React',
  //     'Styled-components',
  //     'TypeScript',
  //     'Stripe',
  //     'Firebase',
  //   ],
  //   links: {
  //     preview: '#',
  //     github: '#',
  //   },
  // },
]