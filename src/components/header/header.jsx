"use client";
import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "next-themes";
import { NavbarMenu } from "@/utils/helpers";
import { Button } from "./button";
import Image from "next/image";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Fragment>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-white/90 dark:bg-gray-900/90 shadow-sm backdrop-blur-lg"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent"
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={70}
                height={70}
                className="inline-block mr-2"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NavbarMenu.map(({ name, link }) => (
                <Link
                  key={name}
                  href={link}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    pathname === link
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-emerald-400"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <BsSunFill className="h-5 w-5" />
                ) : (
                  <BsMoonFill className="h-5 w-5" color="black" />
                )}
              </Button>

              <Button
                className="md:hidden"
                size="icon"
                variant="ghost"
                onClick={() => setShowMenu(!showMenu)}
                aria-label="Toggle menu"
              >
                {resolvedTheme == "dark" ? (
                  <GiHamburgerMenu className="h-5 w-5" />
                ) : (
                  <GiHamburgerMenu className="h-5 w-5" color="black" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent"
                  onClick={() => setShowMenu(false)}
                >
                  Leulseged
                </Link>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setShowMenu(false)}
                  aria-label="Close menu"
                >
                  { resolvedTheme == 'dark' ? <IoMdClose className="h-6 w-6" /> : <IoMdClose className="h-6 w-6" color='black' />}
                </Button>
              </div>

              <nav className="flex flex-col gap-2 flex-1">
                {NavbarMenu.map(
                  (
                    { name, link },
                    index
                  ) => (
                    <motion.div
                      key={name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "spring", delay: 0.1 * index }}
                    >
                      <Link
                        href={link}
                        className={`px-6 py-4 rounded-xl text-lg font-medium transition-colors ${
                          pathname === link
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => setShowMenu(false)}
                      >
                        {name}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>

              <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-800">
                <Button className="w-full" size="lg" onClick={toggleTheme}>
                  {resolvedTheme === "dark" ? (
                    <span className="flex items-center justify-center gap-2">
                      <BsSunFill className="h-5 w-5" />
                      Switch to Light Mode
                    </span>
                  ) : (
                    <span className="flex items-center text-black justify-center gap-2">
                      <BsMoonFill className="h-5 w-5" color="black" />
                      Switch to Dark Mode
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Header;
