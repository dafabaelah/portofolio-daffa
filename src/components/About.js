import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// import link
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section lg:mt-40' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-24 lg:gap-y-5 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a interested in the position of a Front-end Developer & Backend-end Developer with over 1 years of experience.</h3>
            <p className='mb-6'>I'm a fresh graduate in Computer Engineering from Pasundan University with a profound passion for software engineering. My practical experience includes proficient use of PHP for Laravel implementation and expertise in JavaScript for both Frontend and Backend web development. In my most recent project, I actively participated in hands-on work with JavaScript. I am enthusiastic about applying my academic background and practical skills to real-world projects, staying current with industry trends and technologies to contribute effectively to the dynamic field of software engineering.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : 0} 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> 
                  experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : 0} 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> 
                  Completed
                </div>
              </div>
              {/* <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : 0}
                  k+ 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> 
                  Clients
                </div>
              </div> */}
            </div>
            {/* button */}
            <div className='flex gap-x-8 items-center'>
              <Link to='contact' 
                activeClass='active' 
                smooth={true} 
                spy={true} >
                  <button className='btn btn-lg'>Contact me</button>
              </Link>
              <a href='/cv' className='text-gradient btn-link'>
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
};

export default About;
