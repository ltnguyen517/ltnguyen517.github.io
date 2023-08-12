import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full tan-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[#f2dea4] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Formerly from the healthcare field for nearly a decade, I am passionate about bringing a unique combination of analytical problem-solving skills, attention to detail, and empathy to my work now as a software engineer. I am committed to leveraging my expertise in both fields to create and drive innovative solutions that improve the lives of others. With experience working in high-pressure environments and a dedication to continuous learning, I excel at adapting to new challenges and collaborating with diverse teams. Whether I am working independently or as part of a team, I am always looking for ways to improve processes and deliver exceptional results.
        <br />
        <br />
        My technical skills include proficiency in Javascript, Python, SQL, and frameworks/technologies such as React, Redux, Postgres, Express, Flask, SQLAlchemy, Node and AWS, as well as experience with Agile development methodologies.
        <br />
        <br />
        I am highly motivated, adaptable, and a quick learner, always seeking opportunities to grow. If you are looking for a dedicated software engineer with a passion for innovation and making a difference, let's connect!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
