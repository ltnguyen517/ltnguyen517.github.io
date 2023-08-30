import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f2dea4]' />
          <div className='w-1 sm:h-80 h-40 gold-gradient' />
        </div>

        <div className={`${styles.heroHeadText} text-white`} style={{WebkitTextStroke: '0.45px #f2dea4', textStroke: '0.45px #f2dea4',}}>
          <TypewriterComponent
              options={{
                strings: [
                  "Greetings, I'm Brian!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          {/* <h1 className={`${styles.heroHeadText} text-white`}>
            Greetings, I'm <span className='text-white'>Le!</span>
          </h1> */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full stack software engineer with 1+ years of experience developing <br className='sm:block hidden' />
            user-centered applications, user interfaces, and 3D visuals.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
