'use client';

import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function Introduction() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <motion.div
      id="about"
      className="flex flex-col gap-10 px-10 pt-16 md:pt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Text Animation with Typewriter Effect */}
      <motion.p
        className="text-lg font-semibold"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        suppressHydrationWarning={true}
      >
        <div>
          <Typewriter
            words={['Leulseged Here, A Software Engineer', 'I hear you are looking for a skilled Developer and Engineer.']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div>
          <Typewriter
            words={['Nice To Meet You', 'Well you are in the right place🏡']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={7000}
          />
        </div>
      </motion.p>

      {/* Download CV Button Animation */}
      <motion.a
        className="flex border-4 p-4 w-40 rounded-full hover:border-transparent items-center justify-center hover:bg-gray-200 hover:text-black"
        href="/cv/Cv_Leulseged.pdf"
        target='_blank'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <pre>Download CV</pre>
        <FaDownload className="ml-2 size-4" />
      </motion.a>
    </motion.div>
  );
}

export default Introduction;
