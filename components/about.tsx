"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a master&apos;s degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to pursue my
        passion for building websites and data prediction models. I started looking for full-time opportunities as {" "}
        <span className="font-medium">front-end web developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Python libraries, JavaScript, HTML/CSS, React.js, Node.js
        </span>
        . I am also familiar with data visualization tools like MATLAB and POWER BI, EXCEL to build interactive dashboards. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">entry-level, full-time position</span> as a software
        engineer or Data Scientist/Analyst.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy going to the gym and being active on social media. I also enjoy{" "}
        <span className="font-medium">dancing</span>. I am currently
        learning about{" "}
        <span className="font-medium">Open AI and LLM for generative AI</span>.
      </p>
    </motion.section>
  );
}
