import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
  name: 'Frontend Developer',
  description: 'Ipsum occaecat ullamco enim pariatur est eiusmod minim eu. Quis incididunt laboris minim duis anim sit culpa esse. Ut velit eu veniam labore. ',
  link: 'Learn more'
  },
  {
    name: 'Backend Developer',
    description: 'Ipsum occaecat ullamco enim pariatur est eiusmod minim eu. Quis incididunt laboris minim duis anim sit culpa esse. Ut velit eu veniam labore. ',
    link: 'Learn more'
  },
  {
    name: 'Cloud Engineer',
    description: 'Ipsum occaecat ullamco enim pariatur est eiusmod minim eu. Quis incididunt laboris minim duis anim sit culpa esse. Ut velit eu veniam labore. ',
    link: 'Learn more'
  },
  {
    name: 'UI/UX Designer ',
    description: 'Ipsum occaecat ullamco enim pariatur   est eiusmod minim eu. Quis incididunt laboris minim duis anim sit culpa esse. Ut velit eu veniam labore. ',
    link: 'Learn more'
  },
]

const Services = () => {
  return (
    <section className='section lg:mt-40' 
      id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            I'm a interested in the position of a Front-end Developer & Backend-end Developer with over 1 years of experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructuring service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{ name }</h4>
                      <p className='font-semibold leading-tight'>{ description }</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a 
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center' 
                        href='/'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='/' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
