'use client';
import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { TbBulbFilled } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useTheme } from 'next-themes';
import { NavbarMenu } from '@/utils/helpers';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Fragment>
      {/* Desktop Header */}
      <div className="hidden md:flex justify-center pb-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full md:w-[80%] md:max-w-3xl h-[70px] justify-self-center place-self-center md:px-8 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-blur-lg flex justify-center items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-40 rounded-full transition-all duration-500"
          style={{ top: 0, margin: 'auto' }}
        >
          <div className="h-full flex gap-4">
            {/* Navbar Links */}
            {NavbarMenu.map(({ name, link }) => (
              <Link
                className="text-[#c72c6c] dark:text-[#07d0e5] font-semibold"
                href={link}
                key={name}
              >
                <div className="h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4 border-[#c72c6c] dark:border-[#07d0e5] transition-all">
                  {name}
                </div>
              </Link>
            ))}
          </div>
          {/* Toggle Theme Button */}
          {/* <div className="flex items-center gap-4">
            <button
              className="text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
            </button>
          </div> */}
        </motion.div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setTheme={setTheme}
        showMenu={showMenu}
        theme={theme}
      />

      {/* SideMenu for Mobile Screen */}
      {showMenu && (
        <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
      )}
    </Fragment>
  );
};

// Mobile Sidebar for Small Screens
const NavbarMobile = ({ setShowMenu, setTheme, theme, showMenu }) => (
  <div
    className="w-full md:w-[80%] max-w-5xl px-5 py-3 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-filter backdrop-blur-lg flex justify-between md:hidden shadow-md shadow-gray-300 dark:shadow-gray-800 fixed z-40 rounded-full"
    style={{ top: 0, margin: 'auto' }}
  >
    <div className="flex items-center gap-4">
      <button
        className="text-black dark:text-white text-3xl font-semibold"
        onClick={() => setShowMenu(!showMenu)}
      >
        <GiHamburgerMenu />
      </button>
    </div>

    {/* Toggle Theme Button */}
    {/* <div className="flex items-center gap-4">
      <button
        className="text-[#c72c6c] dark:text-[#07d0e5] text-2xl font-semibold hover:scale-110"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
      </button>
    </div> */}
  </div>
);

const MobileNavbar = ({ setShowMenu, showMenu }) => (
  <Fragment>
    <div
      className={`w-full h-screen bg-[rgba(117,146,242,0.3)] dark:bg-[rgba(0,0,0,0.3)] fixed ${
        showMenu ? null : 'hidden'
      } top-0 left-0 z-40`}
      onClick={() => setShowMenu(!showMenu)}
    >
      {/* Sidebar */}
      <div
        className={`w-[70%] h-screen bg-white dark:bg-black shadow-sm shadow-gray-600 dark:shadow-gray-300 ${
          showMenu ? null : 'translate-x-[-450px]'
        } transition-all duration-1000`}
      >
        <div className="p-3 bg-gray-200 dark:bg-gray-800 flex justify-between items-center gap-3">
          {/* Sidebar Close button */}
          <button
            className="text-black dark:text-white text-3xl font-bold"
            onClick={() => setShowMenu(!showMenu)}
          >
            <IoMdClose />
          </button>
        </div>

        <div className="p-2 flex flex-col gap-2">
          {/* Navbar Links */}
          {NavbarMenu.map(({ name, link }) => (
            <Link
              className="text-lg p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded"
              href={link}
              key={name}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Fragment>
);

export default Header;
