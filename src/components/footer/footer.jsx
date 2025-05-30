"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { socialLinks } from "@/utils/helpers";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Leulseged
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-emerald-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Get In Touch
            </h4>
            <address className="not-italic space-y-2 text-gray-600 dark:text-gray-400">
              <p>Addis Ababa, Ethiopia</p>
              <p>+251 945 600 582</p>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Leulseged. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-blue-500 dark:hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-blue-500 dark:hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
