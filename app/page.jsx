'use client'
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Tabs from './components/Tabs';
import SplitText from './components/SplitText';

const Home = () => {
  const introText = "Hi there! I'm Julia Hoarau, an aspiring graphic designer and web developer from Brisbane, Australia.";

  // Direct fade-in animation control
  const initial = { y: '-10%', opacity: 0 };
  const animate = { y: 0, opacity: 1, transition: { duration: 2 } }; // Customize the duration as needed

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

        <div className="col-span-3 row-start-2 flex items-center justify-center p-10">
          <SplitText
            text={introText}
            className="leading-sm lg:leading-normal font-jost text-center font-medium text-3xl xl:p-5 xl:p-10 text-secondary lg:text-5xl w-full lg:w-2/3"
          />
        </div>
      </div>

      <div>
        <Tabs />
      </div>
    </div>
  );
};

export default Home;
