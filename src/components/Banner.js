import React from 'react';
// images
// import Image from '../assets/avatar-df.svg';
// icons
import { FaGithub, FaYoutube, FaLinkedin} from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// import link
import { Link } from 'react-scroll';

import { Link as Ldom } from 'react-router-dom';

const Banner = () => {
  return (
    <section 
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left lg:mt-[-75px]'>
            <motion.h1 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[45px] font-bold leading-[0.8] lg:text-[70px]'
            >
              DAFFA <span>AKHDAN FADHILLAH</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-3 text-[36px] lg:text-[40px] m:text-[27px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Frontend Developer', 
                  2000, 
                  'Backend Developer', 
                  2000, 
                  'Cloud Engineer', 
                  2000,
                  'UI/UX Designer', 
                  2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='max-w-lg mx-auto lg:mx-0'
            >
              Passionate Computer Engineering graduate with hands-on experience in PHP and JavaScript for both Frontend and Backend web development, eager to contribute to innovative projects and dynamic teams.

            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link to='contact' 
                activeClass='active' 
                smooth={true} 
                spy={true} >
                  <button className='btn btn-lg'>Contact me</button>
              </Link>
                <Ldom to='/cv' className='text-gradient btn-link'>
                My Resume
                </Ldom>
            </motion.div>
            {/* social media */}
            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:mt-[-30px]'
            >
              <a href='https://www.youtube.com/@daffa-akhdan-fadhillah' aria-label='YouTube Daffa Akhdan Fadhillah'>
                <FaYoutube />
              </a>
              <a href='https://github.com/dafabaelah' aria-label='Github Daffa akhdan Fadhillah'>
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/daffa-akhdan-fadhillah/' aria-label='Linkedin Daffa Akhdan Fadhillah'>
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] lg:-mt-11'
          >
            <img src='https://cdn.jsdelivr.net/gh/dafabaelah/portofolio-daffa@main/src/assets/avatar-df.svg' alt="avatar" width="400px" />
          </motion.div>
        </div>

      </div>
    </section>
    );
};

export default Banner;
