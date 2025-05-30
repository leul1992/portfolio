"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { motivations } from "@/utils/helpers";

export const TextGenerateEffect = ({ 
  className = "",
  cursor = true,
  cursorClassName = "",
  cursorBlinking = true,
  typingSpeed = 50,
  deletingSpeed = 30,
  delay = 8000 // 8 seconds delay between messages
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentMotivation, setCurrentMotivation] = useState("");
  const [usedIndices, setUsedIndices] = useState([]);

  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  const getRandomMotivation = () => {
    // If all motivations have been shown, reset the used indices
    if (usedIndices.length >= motivations.length) {
      setUsedIndices([]);
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * motivations.length);
    } while (usedIndices.includes(randomIndex));

    setUsedIndices([...usedIndices, randomIndex]);
    return motivations[randomIndex];
  };

  useEffect(() => {
    // Set initial random motivation
    if (!currentMotivation) {
      setCurrentMotivation(getRandomMotivation());
    }

    const handleTyping = () => {
      const shouldDelete = isDeleting 
        ? text.substring(0, text.length - 1) 
        : text + currentMotivation.substring(text.length, text.length + 1);

      setText(shouldDelete);

      if (!isDeleting && shouldDelete === currentMotivation) {
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeedState(deletingSpeed);
        }, delay);
      } else if (isDeleting && shouldDelete === "") {
        setIsDeleting(false);
        setCurrentMotivation(getRandomMotivation());
        setTypingSpeedState(typingSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeedState);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentMotivation, typingSpeed, deletingSpeed, delay, typingSpeedState, usedIndices]);

  return (
    <span className={`inline-block ${className}`}>
      {text}
      {cursor && (
        <motion.span
          className={`inline-block h-6 w-0.5 bg-current ${cursorClassName}`}
          animate={{ opacity: cursorBlinking ? [0, 1, 0] : 1 }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.8,
            ease: "easeInOut",
            repeatDelay: 0.2
          }}
        />
      )}
    </span>
  );
};