'use client'
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; 
import LogoGallery from './LogoGallery';
import GraphicDesignGallery from './GraphicDesignGallery';
// Assuming WebDesignGallery is also imported or defined

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('logo');

  const tabs = [
    { id: 'logo', title: 'Logo Design' },
    { id: 'graphicDesign', title: 'Graphic Design' },
  ];

  // Removed the duplicated renderContent function
  const ref = useRef(null); // Corrected useRef usage
  const isInView = useInView(ref, { once: true }); // Only trigger once

  const imageVariants = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1 } // Adjust duration as needed
    }
  };

  const renderContent = (tab) => {
    switch (tab) {
      case 'logo':
        return <LogoGallery />;
      case 'graphicDesign':
        return <GraphicDesignGallery />;
      default:
        return null;
    }
  };

  return (
    <div className='mt-20 min-h-screen'>
      <div className='flex flex-col justify-center items-center'>
        {/* Animate the h2 when it comes into view */}
        <motion.h2
          ref={ref} // Attach the ref
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }} // Trigger animation based on in-view status
          transition={{ duration: 1 }} // Customize the duration as needed
          className="text-3xl lg:text-5xl text-center font-jost font-medium text-secondary lg:mb-3 lg:mt-8">
          MY WORK
        </motion.h2>
        {/* Apply animation to the image */}
        <motion.div 
          className='w-2/3 md:w-2/5 xl:w-1/6 my-8 object-cover'
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img src="images/divider3.png" alt="" className='w-full h-auto'/>
        </motion.div>
      </div>
      <ul role="tablist" className="mx-auto flex flex-row justify-center items-center text-center font-jost w-full lg:w-1/2 mb-8">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`tab text-sm text-brand text-base lg:text-2xl cursor-pointer relative flex justify-center ${activeTab === tab.id ? 'text-secondary' : ''}`} // Corrected `!important` misuse
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            {activeTab === tab.id && (
              <motion.div
                className="mt-3 h-1 bg-secondary" // Centered underline
                layoutId="underline"
                initial={false}
                animate={{ width: '30%' }}
                transition={{ duration: 0.3 }}
              />
            )}
          </li>
        ))}
      </ul>
      <div>
        {renderContent(activeTab)}
      </div>
    </div>
  );
};

export default Tabs;
