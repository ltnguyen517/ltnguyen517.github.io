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
    geisinger,
    citymd,
    temple,
    nyp,
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
      title: "Events Director & Web Developer Volunteer",
      company_name: "Chieu Kien Buddhist Center",
      icon: temple,
      iconBg: "#011e33",
      date: "June 2011 - Present",
      points: [
        "Designed and produced email communications using Mailchimp, resulting in a 30% increase in email open rates and engagement with the temple community.",
        "Successfully managed and coordinated various events, including fundraising drives and meditation retreats, that served to raise funds to benefit the welfare of the community.",
        "Facilitated effective communication and collaboration among temple staff and volunteers by leading weekly meetings and maintaining detailed meeting minutes, resulting in improved team dynamics.",
        "Initiating the design and development of a modern, user-friendly website for the local Buddhist temple, aimed at improving online engagement and accessibility for the community members.",
      ],
    },
    {
      title: "Medical Graduate",
      company_name: "NewYork-Presbyterian Queens",
      icon: nyp,
      iconBg: "#011e33",
      date: "March 2021 - April 2022",
      points: [
        "Accurately diagnosed and treated complex medical cases, achieving a 95% success rate in identifying appropriate treatment plans under high-pressure conditions.",
        "Devised and executed patient care strategies, leading to a 15% reduction in recovery time and ensuring optimal outcomes for diverse medical conditions.",
        "Applied exceptional communication skills to interact with patients, resulting in a 96% satisfaction rate and positive feedback regarding the quality of care provided.",
      ],
    },
    {
      title: "Medical Scribe",
      company_name: "CityMD",
      icon: citymd,
      iconBg: "#011e33",
      date: "October 2017 - January 2019",
      points: [
        "Facilitated efficient patient care by documenting medical history, physical exam findings, and treatments in real-time, resulting in an average of 20% reduction in patient wait times.",
        "Collaborated with healthcare providers to ensure accurate and complete documentation of patient visits, resulting in improved continuity of care and reduced errors in medical records by 15%.",
        "Leveraged knowledge of medical terminology and procedures to accurately transcribe patient charts and records, honing my attention to detail and ability to manage complex data.",
        "Cooperated with healthcare professionals to identify areas of improvement in the electronic medical records system, resulting in a 30% decrease in documentation errors.",
      ],
    },
    {
      title: "Medical Researcher",
      company_name: "Geisinger Commonwealth SOM",
      icon: geisinger,
      iconBg: "#011e33",
      date: "August 2016 - May 2017",
      points: [
        "Collaborated with a team of researchers to design a study aimed at investigating the association between trusting formal or informal sources of health information and smoking cessation, utilizing best practices for data analysis.",
        "Presented research findings at a research symposium, employing communication skills and data visualization to engage with a diverse audience and answer questions.",
        "Demonstrated strong attention to detail in data management, ensuring that all study information was properly recorded and accounted for.",
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
