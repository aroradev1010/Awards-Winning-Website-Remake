import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";

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
      delay: 1,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const linkVariants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function Navbar() {
  const [expandedMenu, setExpandedMenu] = useState(false);

  const toggleMenu = () => {
    setExpandedMenu(!expandedMenu);
  };

  return (
    <motion.div
      className={`nav ${expandedMenu ? "expanded" : ""}`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="logo">
        <a href="">Dev Arora</a>
      </div>
      <div className="menu-container">
        {expandedMenu ? null : (
          <h4 className="hover-underline-animation" onClick={toggleMenu}>
            MENU+
          </h4>
        )}
        {expandedMenu && (
          <motion.div className="expanded-menu" variants={linkVariants}>
            <a href="#" className="hover-underline-animation">
              Plug
            </a>
            <a href="#" className="hover-underline-animation">
              Ixperience
            </a>
            <a href="#" className="hover-underline-animation">
              Hudu
            </a>
            <a href="#" className="hover-underline-animation">
              playground
            </a>
            <a href="#" className="hover-underline-animation">
              Contact
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
