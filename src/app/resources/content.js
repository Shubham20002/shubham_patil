import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shubham",
  lastName: "Patil",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  location: "Pune",
  languages: ["English", "Hindi", "Marathi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about Fullstack development, web performance, and the latest in tech.
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
  headline: <>Full Stack Developer</>,
  subline: (
    <>
  Hi, I'm Shubham — a full stack developer specializing in <InlineCode>React</InlineCode>, <InlineCode>Vue.js</InlineCode>, and <InlineCode>Next.js</InlineCode>. 
  I craft high-performance applications with a focus on clean code and great user experience.
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
        Hi, I'm Shubham Patil, a passionate Full Stack Developer with 3 years of hands-on experience in building dynamic and scalable web and mobile applications.
I specialize in frontend technologies like HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS, VueJS, and NextJS, while also being proficient in backend development using NodeJS, ExpressJS, and Firestore.
With a strong foundation in both web and mobile platforms (including React Native), I love crafting seamless user experiences and efficient backend architectures. I'm always excited to take on new challenges and bring innovative ideas to life!
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

          <>Developed a motor insurance project from start to finish, using Vue.js to create a responsive and user-friendly frontend interface.</>,
          <>Collaborated closely with stakeholders to gather requirements, design user flows, and implement features.</>,
          <>Ensured the performance, quality, and responsiveness of the web application, and debugged and resolved issues to improve user experience.</>,
          <>Delivered the project on time by following Agile development methodologies, managing sprints, and meeting key deadlines.</>,
          <>Designed and developed Mobile SDK using React Native</>
        ],
        images: [],
      },
      {
        company: "Wipro Limited",
        timeframe: "April 2022 – July 2024",
        role: "Project Engineer",
        achievements: [
        
          <>Created responsive and user-friendly web applications using Vue.js and React, ensuring seamless experiences across devices.</>,
          <>Converted Figma designs into pixel-perfect Vue.js components, maintaining high design consistency.</>,
          <>Connected frontend interfaces with backend services through RESTful APIs, collaborating effectively with backend teams.</>,
          <>Enhanced application performance and responsiveness by debugging, testing, and fixing issues across major browsers.</>,
          <>Managed sprints, tracked progress, and delivered high-quality projects on time following Agile best practices.</>,
          <>Built reusable UI elements in React and Vue.js to improve maintainability and reduce development time.</>,
          <>Leveraged Git for collaborative development, maintaining clean and organized project history.</>,
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
