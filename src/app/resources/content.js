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

          <> Developed responsive insurance portals for Motor, Term, Health, and Savings categories, improving user engagement
by 25% through seamless cross-device experiences.</>,
          <> Integrated APIs for real-time data handling, payment processing, reducing transaction processing times by 40%.
</>,
          <>Enhanced mobile responsiveness, optimizing page load times by 30% for better performance on diverse screens</>,
          <>Optimized the source code of a web application by implementing advanced ECMAScript (ES6) techniques, resulting
in a significant reduction of loading time by 3 seconds, thereby improving performance and user experience.</>,
          <>Designed and developed Mobile SDK using React Native</>,
          <> Gained domain expertise in insurance, focusing on user-centric application development and maintaining high-quality
standards across all project stages.</>
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
        title: "React, Next.js & Vue",
        description: <>Built scalable and performant UIs with reusable components using React.js, Next.js, Vue.js, and Vue CLI, implementing state management with Redux Toolkit and Vue Router.</>,
        images: [],
      },
      {
        title: "JavaScript, HTML5, CSS & TailwindCSS",
        description: <>Strong foundation in JavaScript, HTML5, and CSS, creating responsive designs using TailwindCSS and Bootstrap. Experience with jQuery for dynamic interactivity.</>,
        images: [],
      },
      {
        title: "MongoDB, Firebase & RESTful APIs",
        description: <>Experience managing backend data with MongoDB and Firebase, integrating APIs with Node.js and Express, and ensuring smooth client-server communication through RESTful services.</>,
        images: [],
      },
      {
        title: "Developer Tools",
        description: <>Proficient with development and debugging tools like VS Code, Git, Github, Postman, Chrome Developer Tools, and Vue DevTools for efficient workflows.</>,
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
