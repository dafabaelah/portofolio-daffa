import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section mt-10' id='about' ref={ref}>
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
            <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
            <p className='mb-6'>Deserunt fugiat cupidatat qui aliquip sit ullamco ipsum do tempor sunt. Mollit laborum anim officia velit adipisicing qui duis. Duis excepteur magna ut ea reprehenderit anim adipisicing in. Do mollit fugiat amet aute. Ullamco cupidatat laborum fugiat amet reprehenderit reprehenderit sint duis amet. Aliqua officia ad labore eu elit laborum qui proident minim.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : 0} 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> 
                  experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : 0} 
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> 
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : 0}
                  k+ 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> 
                  Clients
                </div>
              </div>
            </div>
            {/* button */}
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='/' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
};

export default About;
