'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Tabs from './components/Tabs';
import SplitText from './components/SplitText';

const Home = () => {
  const introText = "Hi there! I'm Julia Hoarau, an aspiring graphic designer and web developer from Brisbane, Australia.";

  // Direct fade-in animation control
  const initial = { y: '-10%', opacity: 0 };
  const animate = { y: 0, opacity: 1, transition: { duration: 5 } }; // Customize the duration as needed


  const [showGif, setShowGif] = useState(false); // State to control the display of the GIF

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(true); // Show the GIF after a delay
    }, 3100); // Adjust the time based on your animations + desired delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="bg-primary">
      <div className="relative h-screen flex grid grid-cols-3 grid-rows-3">
        {/* Apply the fade-in animation directly to each motion.div */}
        <motion.div className="hidden xl:flex col-start-1 row-start-1 w-full h-full flex justify-start items-start m-1"
                     initial={initial} animate={animate}>
          <img src="/images/top-left.png" alt="Top Left" className="object-fit w-full xl:w-3/5"/>
        </motion.div>

        <motion.div className="lg:flex col-start-2 xl:col-span-1 xl:col-start-3 col-span-2 xl:row-start-1 row-start-1 flex justify-end items-start m-1"
                     initial={initial} animate={animate}>
          <img src="/images/top-right.png" alt="Top Right" className="object-fit w-3/4 xl:w-3/5"/>
        </motion.div>

        <motion.div className="col-span-2 xl:flex xl:col-span-1 xl:col-start-1 row-start-3 flex justify-start items-end m-1"
                     initial={initial} animate={animate}>
          <img src="/images/bottom-left.png" alt="Bottom Left" className="object-fit w-3/4 xl:w-3/5"/>
        </motion.div>

        <motion.div className="hidden xl:flex col-start-3 row-start-3 flex justify-end items-end m-1"
                     initial={initial} animate={animate}>
          <img src="/images/bottom-right.png" alt="Bottom Right" className="object-fit w-full xl:w-3/5"/>
        </motion.div>

        <div className="col-span-3 row-start-2 flex flex-col items-center justify-center p-10 z-10">
        
          <SplitText
            text={introText}
            className="leading-sm md:leading-normal font-jost text-center items-center justify-center font-medium text-2xl xl:p-5 xl:p-10 text-secondary md:text-5xl w-full lg:w-2/3"
           />
           <div className="mt-5 w-44 h-44 md:h-44 flex items-center justify-center" style={{ minHeight: '100px' }}>
                      {showGif && (
            <motion.img src="/images/down-arrow.gif" alt="Scroll Down" className="lg:w-44 md:w-30 w-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }} // This controls the fade-in of the GIF itself
            />
          )}
          </div>
           </div>


        
      </div>

      <div>
        <Tabs />
      </div>
    </div>
  );
};

export default Home;
