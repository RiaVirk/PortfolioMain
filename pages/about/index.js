import React, { useState } from "react";
import ParticlesContainer from "../../Components/ParticlesContainer";

import { FaNodeJs, FaPython, FaGithub, FaFigma } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiPytorch,
  SiGoogleads,
  SiGoogleanalytics,
  SiCanva,
  SiMeta,
  SiShadcnui,
  SiGooglegemini,
  SiVercel,
  SiOpenai,
  SiFigma,
  SiGooglemaps,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { id: 1, title: <SiNextdotjs /> },
          { id: 2, title: <SiTypescript /> },
          { id: 3, title: <FaNodeJs /> },
          { id: 4, title: <SiTailwindcss /> },
          { id: 5, title: <SiFramer /> },
          { id: 6, title: <SiShadcnui /> },
          { id: 7, title: <FaPython /> },
          { id: 8, title: <SiDjango /> },
          { id: 9, title: <SiPostgresql /> },
          { id: 10, title: <FaGithub /> },
        ],
      },
      {
        title: "AI & APIs",
        icons: [
          { id: 1, title: <SiOpenai /> },
          { id: 2, title: <SiGooglegemini /> },
          { id: 3, title: <SiPytorch /> },
          { id: 4, title: <SiVercel /> },
          { id: 5, title: <SiPostgresql /> },
          { id: 6, title: <SiGooglemaps /> },
        ],
      },
      {
        title: "Digital Marketing",
        icons: [
          { id: 1, title: <SiGoogleads /> },
          { id: 2, title: <SiGoogleanalytics /> },
          { id: 3, title: <SiCanva /> },
          { id: 4, title: <SiFigma /> },
          { id: 5, title: <SiMeta /> },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Digital Manager & Full-Stack Developer - Percuma by CKE",
        stage: "2025 - ",
      },
      {
        title: "Frontend Web developer - Liaison Co.",
        stage: "2020 - 2025",
      },
      {
        title: "Digital Marketing Manager - Schützenhof Deli",
        stage: "2017 - 2020",
      },
      {
        title: "Interior Designer - Salman Shahzaib Ent. (Real Estate)",
        stage: "2011 - 2016",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Google Ads App Marketing Certification", stage: "2026" },
      { title: "Canva Visual Suite - Canva", stage: "2026" },
      { title: "Marketing with Canva - Canva", stage: "2026" },
      { title: "Scale Creative Campaigns - Canva", stage: "2025" },
      { title: "Canva Essentials - Canva", stage: "2025" },
      { title: "CS50AI - Harvard University", stage: "2025" },
      { title: "CS50SQL - Harvard University", stage: "2025" },
      { title: "CS50T - Harvard University", stage: "2024" },
      { title: "CS50W - Harvard University", stage: "2023" },
      { title: "CS50P - Harvard University", stage: "2023" },
      { title: "CS50X - Harvard University", stage: "2023" },
      {
        title: "Front End Development Libraries - freeCodeCamp",
        stage: "2023",
      },
      {
        title: "JavaScript Algorithms and Data Structures - freeCodeCamp",
        stage: "2023",
      },
      { title: "Responsive Web Design - freeCodeCamp", stage: "2023" },
    ],
  },
];

import Avatar from "../../Components/Avatar";
import Circles from "../../Components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-48 text-center xl:text-left overflow-x-auto">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <ParticlesContainer />
          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Creativity Is <span className="text-space">Intelligence</span>{" "}
            Having Fun.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            6 years ago, I began my journey as a developer. Since then, I
            &#39;ve created 30+ web products, optimized applications for
            max-speed and scalability, and built AI-powered solutions.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 1.0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-space mb-2">
                  <CountUp start={0} end={6} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-space mb-2">
                  <CountUp start={0} end={30} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Web Products
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-xyz after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start pb-32 ">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0 whitespace-nowrap">
                  {item.title}
                </div>
                <div className="hidden md:flex">-</div>
                <div className="text-space whitespace-nowrap">{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div className="text-2xl text-white" key={iconIndex}>
                      {icon.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
