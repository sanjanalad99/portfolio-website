import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Computer Engineering",
    location: "MH, India",
    description:"I have successfully attained a Bachelor's degree, having undertaken subjects such as Artificial Intelligence, Machine Learning, Cloud Computing, and Big Data. Throughout my academic journey, I engaged in a multitude of group and individual projects, enriching my understanding and practical experience in these fields.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Web Solutions Sepcialist",
    location: "MH, India",
    description:
      "I worked as a Web Solutions Specialist for 5 months where I performed problem-solving for our clients related to DNS issues on platforms like Salesforce .",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Master's in Computer Engineering",
    location: "CA, USA",
    description:
      "I decided to pursue master's as I believed there was so much more to learn and explore. I was able to work on interesting prjects that enhanced my skills in Python for Machine Learning and Artifical Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Web Development Intern",
    location: "Boston, MA, USA",
    description:
      "I am currently working as a web development intern enhancing my skills in javascript, python, HTML/CSS and react. I got to take over the project management tasks and update the CEO/Co-Founder about updates on different projects giving me an insight on what goes behind building a start up company.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Breast Cancer Prediction",
    description:
      "I built my own neural network to detect presence of breast cancer tissues in a vast dataset of breast tissues by efficient model training on histapathology images. Acheived an 84% of accuracy within 20 epochs of training.",
    tags: ["Python", "Pytorch", "CUDA"],
    imageUrl: "/images/BCP.png",
  },
  {
    title: "Smart Shoe",
    description:
      "Designed a shoe with Arduino programming using ultrasonic and peizoelectronic sensors.Engineered a real-time object detection logic with buzzer frequencies using PWM(Pulse Width Modulation)",
    tags: ["Arduino IDE", "Sensors"],
    imageUrl: "/images/Smart.png",
  },
  {
    title: "Front-End Development",
    description:
      "Designed front-end code for the start up company to attract users increasing 30% of website visits",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Framer"],
    imageUrl: "/images/Crypto.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Python",
"Power BI",
"AI and ML",
  "Framer Motion",
] as const;