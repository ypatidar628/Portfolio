import project1 from "../assets/projects/chatHub.jpg";
import project2 from "../assets/projects/shoppingCart.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 Month's of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js,Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a BCA student at Renaissance University Indore, Presently undergoing practical training at Code Better in Indore, with an expected graduation in 2026. I have a deep passion for front-end development and a strong grasp of technologies such as React.js, JavaScript, GSAP, and DOM manipulation.
  With a strong interest in database management, I have practical experience with MySQL and MongoDB. I am proficient in Node.js and Express.js for back-end integration.`;

export const EDUCATION = [
  {
    year: "2023 - 2026",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Renaissance University, Indore",
    description: "Pursuing a BCA degree with a focus on software development and computer applications.",
  },
  {
    year: "8th May 2024 - 7th November 2024",
    degree: "Full Stack Web Development Internship",
    institution: "Code Better, Indore",
    description: "I Completed trainig in full-stack web development & I am now a certifide full stack developer , gaining hands-on experience in building web applications.",
    link: "https://drive.google.com/file/d/11ELdnao0bxLAoWhCkEzR-d8wmGqvcFkT/view?usp=sharing"
  },
  {
    year: "2022 - 2023",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shree S.L. Patel  Higher Secondary School, Rampura,Neemuch(M.P.)",
    Percentage: "61%",
  },
]
export const EXPERIENCES = [
  {
    year: "2025-Jan - Present - 2025-April",
    role: "Full Stack Developer Intern",
    company: "Inwizio Technologies Indore",
    description: `I am designing and implementing a dynamic, high-performance full-stack web application with a visually appealing 
                  and fully responsive user interface using modern technologies like  HTML, CSS, Tailwind-Css,GSAP,JavaScript, React.js, 
                  and Node.js.  `,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "Chat-Hub Web App",
    image: project1,
    description:
      "A React.js-based API-driven web application that connects people in real-time and enables them  to chat seamlessly. \n" +
      "Built using React.js, and  CSS.   ",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Shopping Cart Web App",
    image: project2,
    description:
      "A React.js-based API-driven web application that retrieves data and displays it on the user interface, allowing users to \n" +
      "perform actions such as adding items to the cart or placing an order. It is built using React.js, Tailwind CSS, and basic \n" +
      "GSAP animations.",
    technologies: ["HTML", "Tailwind-CSS", "GSAP", "React"],
    link: "https://democart-three.vercel.app/"
  },
];

export const CONTACT = {
  address: "Atal Dwar , Gali no.- 03 , MIG Road ,Indore",
  phoneNo: "+91 7489047023",
  email: "patidrayogendra43@.com",
};
