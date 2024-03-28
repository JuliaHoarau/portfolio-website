'use client'
import { motion } from 'framer-motion';

const SplitText = ({ text, className }) => {
  // Split text by spaces to get words for individual animation
  const words = text.split(" ");

  return (
    <div className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: '30%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ display: 'inline-block', margin: '0 4px' }} // Adjust spacing as needed
        >
          {word + (index < words.length - 1 ? "\u00A0" : "")}
        </motion.span>
      ))}
    </div>
  );
};
 export default SplitText