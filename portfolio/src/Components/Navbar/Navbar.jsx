// import React, { useState } from "react";
// import "./navbar.css";
// import { motion } from "framer-motion";

// function Navbar() {
//   const [expandedMenu, setExpandedMenu] = useState(false);

//   const toggleMenu = () => {
//     setExpandedMenu(!expandedMenu);
//   };

//   return (
//     <div className={`nav ${expandedMenu ? "expanded" : ""}`}>
//       <div className="logo">
//         <a href="">Dev Arora</a>
//       </div>
//       <div className="menu-container">
//         {expandedMenu ? null : (
//           <h4 className="hover-underline-animation" onClick={toggleMenu}>
//             MENU+
//           </h4>
//         )}
//         {expandedMenu && (
//           <div className="expanded-menu">
//             <a className="hover-underline-animation" href="#">
//               Plug
//             </a>
//             <a className="hover-underline-animation" href="#">
//               Ixperience
//             </a>
//             <a className="hover-underline-animation" href="#">
//               Hudu
//             </a>
//             <a className="hover-underline-animation" href="#">
//               playground
//             </a>
//             <a className="hover-underline-animation" href="#">
//               Contact
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { motion, useAnimation, useInView } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 0, y: 0 },
};

function Navbar() {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const toggleMenu = () => {
    setExpandedMenu(!expandedMenu);
  };

  return (
    <div className={`nav ${expandedMenu ? "expanded" : ""}`}>
      <div className="logo">
        <a href="">DevArora</a>
      </div>
      <div className="menu-container">
        {expandedMenu ? null : (
          <h4 className="hover-underline-animation" onClick={toggleMenu}>
            MENU+
          </h4>
        )}
        {expandedMenu && (
          <div>
            <a
              className="hover-underline-animation"
              href="#"
              variants={menuVariants}
            >
              Plug
            </a>
            <a
              className="hover-underline-animation"
              href="#"
              variants={menuVariants}
            >
              Ixperience
            </a>
            <a
              className="hover-underline-animation"
              href="#"
              variants={menuVariants}
            >
              Hudu
            </a>
            <a
              className="hover-underline-animation"
              href="#"
              variants={menuVariants}
            >
              playground
            </a>
            <a
              className="hover-underline-animation"
              href="#"
              variants={menuVariants}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
