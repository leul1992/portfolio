"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialMediaData } from "@/utils/helpers";

const SocialMedia = () => {
  return (
    <div className="fixed left-4 bottom-1/2 transform translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4">
        {SocialMediaData.map((social, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ y: -5 }}
          >
            <Link
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="block p-3 rounded-full text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: social.color }}
            >
              <div className="text-xl">{social.icon}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
