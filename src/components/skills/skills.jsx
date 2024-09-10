"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { SkillData } from "@/utils/helpers";
import { motion } from "framer-motion";

const Skill = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [isSkill, setIsSkill] = useState(false);
  const SkillRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const SkillObserver = new IntersectionObserver(
      ([SkillEntry]) => {
        setIsSkill(SkillEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    if (SkillRef.current) {
      SkillObserver.observe(SkillRef.current);
    }

    return () => {
      if (SkillRef.current) {
        SkillObserver.unobserve(SkillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isSkill) {
      techBoxesRef.current.classList.add("pop-up-child");
      buttonsRef.current.classList.add("pop-up");
    } else {
      techBoxesRef.current.classList.remove("pop-up-child");
      buttonsRef.current.classList.remove("pop-up");
    }
  }, [isSkill]);

  useEffect(() => {
    const selectedSection = SkillData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
      className="px-5"
        id="skills"
        ref={SkillRef}
      >
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
          <FaLaptopCode /> Skills
        </h2>

        {/* Buttons Section */}
        <div
          className="pop-down transition-all w-fit duration-500 m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden"
          ref={buttonsRef}
        >
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Familiar" ? "bg-red-600" : ""
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Familiar
          </button>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Good" ? "bg-red-600" : ""
            } transition-all border-l border-r border-black dark:border-white border-solid`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Good
          </button>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Advance" ? "bg-red-600" : ""
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Advance
          </button>
        </div>

        {/* Tech Stack Boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSkill ? 1 : 0 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
          ref={techBoxesRef}
        >
          {sectionData.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-black to-teal-500"
            >
              <div className="flex justify-center items-center flex-col gap-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p>{tech.icon}</p>
                </motion.div>
                <h3 className="font-semibold cursor-default text-white text-center">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Fragment>
  );
};

export default Skill;
