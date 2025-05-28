import React from 'react';
import { motion } from 'framer-motion';
import srijit from '../assets/srijit_photo.jpg';

const Hero = () => {
  // Define animations
  const textAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='my-20 w-full flex flex-col lg:flex-row justify-center lg:justify-evenly items-center h-[50vh] gap-5'>
      <motion.div
        className='text-white flex flex-col items-start justify-start text-left mb-10'
        initial='hidden'
        animate='visible'
        variants={textAnimation}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h1 className='text-2xl lg:text-3xl font-bold text-center '>Hey there👋</h1>
        <p className='text-3xl md:text-4xl lg:text-5xl text-left w-full font-medium mt-2'>
          I'm <span className='bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text font-bold'>Srijit</span>, a <span className='bg-gradient-to-r from-purple-50 to-gray-500 text-transparent bg-clip-text '>Software Engineer</span>.
        </p>
        <p className='text-lg lg:text-xl text-gray-500 lg:mt-2'>
          currently focused on coding javascript for a living.
        </p>
      </motion.div>

      <motion.div
        className='flex justify-center items-center rounded-full bg-white/20'
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1 }}
      >
        <div className='w-80 h-80 rounded-[1000px] overflow-hidden'>
          <img src={srijit} alt="Srijit's Photo" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
