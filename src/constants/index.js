import {
    qa,
    backend,
    frontend,
    web,
    javascript,
    typescript,
    python,
    sql,
    playwright,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    awss3,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
} from "../assets";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

const services = [
    {
      title: "Full Stack Software Engineer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "QA Engineer",
      icon: qa,
    },
];

const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Playwright",
      icon: playwright,
    },
    {
      name: "AWSS3",
      icon: awss3,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
];

const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
];

const testimonials = [
    {
      testimonial:
        "Le demonstrates an extraordinary commitment to his work. His meticulous attention to detail and proactive problem-solving approach showcases his intelligence and dedication. As a junior full stack software engineer, Le consistently goes above and beyond, showing an industrious spirit that will undoubtedly lead him to great success.",
      name: "Jennifer Wu",
      designation: "Cybersecurity Investigator",
      company: "Citigroup",
      image: "https://media.licdn.com/dms/image/D4E03AQG1HaXQsTPsGQ/profile-displayphoto-shrink_400_400/0/1689345826462?e=1697068800&v=beta&t=EMf6ez7wGssrJPyFC8pnq3jGfAfbqhZbq3PzjgaJSmo",
    },
    {
      testimonial:
        "Working with Le has been a remarkable experience. His ability to grasp complex concepts quickly and apply them in practical scenarios is  impressive. His diligence and tireless work ethic makes him a valuable asset to any team. I have no doubt that Le will excel in his journey as a full stack software engineer.",
      name: "Jae Yun Song",
      designation: "Software Engineer",
      company: "RingCentral",
      image: "https://media.licdn.com/dms/image/C4D03AQHurfJ9nRimJg/profile-displayphoto-shrink_800_800/0/1608184738450?e=1697068800&v=beta&t=rvccfjrZcR6czbyctVSHYL6KIcpMWjI8JtMM7ODf2qY",
    },
    {
      testimonial:
        "I've had the pleasure of collaborating with Le on various coding projects, and his contributions have been nothing short of exceptional. Le's analytical thinking and eagerness to learn new technologies reflect his enthusiasm for software engineering. Rest assured, tasks done by Le are completed with precision and dedication.",
      name: "Martin Yip",
      designation: "Full Stack Software Engineer",
      company: "App Academy",
      image: "https://martinyip220.github.io/assets/img/profile-img.jpg",
    },
  ];

  const projects = [
    {
      name: "Amplify",
      href: "https://amplify-twmy.onrender.com",
      description:
        "Welcome to Amplify, a Spotify clone! A community where you can share your view of the world through your own ears! Feel free to create and share playlists and listen to music on the fly, anywhere you go!",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "amazon s3",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/AP0KvGaO7A2lp7AhKd/giphy.gif',
      source_code_link: "https://github.com/ltnguyen517/Amplify",
    },
    {
      name: "LCSX",
      href: "https://restaurant-business.onrender.com/",
      description:
        "Welcome to LSCX, a Yelp clone! LSCX is a web application that allows users to search for local businesses, read reviews and ratings, and post their own reviews of businesses.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/u7vIr34peL4rz1TakE/giphy.gif',
      source_code_link: "https://github.com/lingxiGitHub/Yelp-Restaurants",
    },
    {
      name: "HomeyBnB",
      href: "https://homeybnb.onrender.com",
      description:
        "Experience the world from the comfort of your couch with my Airbnb clone! From browsing listings to booking your dream stay, this full-stack web app takes you on a virtual journey like no other. With sleek design and intuitive functionality, you'll feel like a seasoned traveler in no time.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/7q8n6NHIwfCTsGrqA0/giphy.gif',
      source_code_link: "https://github.com/ltnguyen517/HomeyBnB",
    },
  ];

export { services, technologies, experiences, testimonials, projects };
