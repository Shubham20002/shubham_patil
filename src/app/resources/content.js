import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shubham",
  lastName: "Patil",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Marathi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about frontend development, web performance, and the latest in tech.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Shubham20002",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://www.linkedin.com/in/PatilShubham07",
  },
  {
    name: "Portfolio",
    icon: "link",
    link: "https://shubham20002.github.io/Resume07/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shubham992284@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Developer & Problem Solver</>,
  subline: (
    <>
      I'm Shubham, a frontend developer skilled in <InlineCode>React</InlineCode> and <InlineCode>Vue.js</InlineCode>.
      I build fast, responsive interfaces and love turning designs into real user experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shubham is a Pune-based frontend developer passionate about building interactive and user-friendly web
        applications. Skilled in React and Vue, he focuses on performance, clean code, and seamless user experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "1Silverbullet Tech",
        timeframe: "July 2024 – Present",
        role: "SDE1",
        achievements: [
          <>Developed a motor insurance project using Vue.js, with responsive and user-friendly UI.</>,
          <>Converted Figma designs into pixel-perfect Vue.js components.</>,
          <>Improved user experience and resolved bugs effectively.</>,
        ],
        images: [],
      },
      {
        company: "Wipro Limited",
        timeframe: "April 2022 – July 2024",
        role: "Project Engineer",
        achievements: [
          <>Built reusable React and Vue components and implemented REST APIs.</>,
          <>Ensured cross-browser compatibility and collaborated with backend teams.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "KIT’s College of Engineering",
        description: <>B.Tech in Mechanical Engineering (CGPA: 8.51)</>,
      },
      {
        name: "Coding Ninjas",
        description: <>Full Stack Web Development Training (Frontend, Backend, Java)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React & Vue",
        description: <>Built scalable UIs with reusable components using React and Vue.</>,
        images: [],
      },
      {
        title: "JavaScript & HTML/CSS",
        description: <>Strong foundation in core web technologies and responsive design.</>,
        images: [],
      },
      {
        title: "MongoDB & Firebase",
        description: <>Experience managing data with MongoDB and Firebase.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about frontend and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
