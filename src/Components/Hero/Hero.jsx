import React from "react";
import "./hero.css";
import Navbar from "../Navbar/Navbar";
import { MdOutlineArrowOutward, MdArrowDownward } from "react-icons/md";
import { easeInOut, motion } from "framer-motion";
import AnimatedCharacters from "../AnimatedText";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const variants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.3,
      stagger: 0.2, // Specify the duration in seconds
    },
  },
};

function Hero() {
  const placeholderText = [
    { type: "heading1", text: "Product" },
    {
      type: "heading1",
      text: "Designer",
      style: { marginLeft: "20vw", textAlign: "right" }, // Add margin-left style to Designer heading
    },
    {
      type: "paragraph",
      text: "Based in Toronto",
      style: { textAlign: "right" }, // Align paragraph text to the right
    },
  ];

  return (
    <div className="hero">
      <Navbar />
      <motion.div
        className="heading"
        initial="hidden"
        // animate="visible"
        animate="visible"
        variants={container}
      >
        <div className="blockText">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <motion.div
        className="smallHeading"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <h5 className="">available for freelance</h5>
        <h5>work from May 23'</h5>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="heroFooter"
      >
        <a href="" className="hover-underline-animation">
          previously worked at yml <MdOutlineArrowOutward />
        </a>
        <a href="" className="hover-underline-animation">
          prototype ambassador <MdOutlineArrowOutward />
        </a>
        <div className="iconset">
          <div className="circle">
            <MdArrowDownward />
          </div>
          <div className="circle">
            <MdArrowDownward />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
