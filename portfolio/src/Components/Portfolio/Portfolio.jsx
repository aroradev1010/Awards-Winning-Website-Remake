import React, { useRef, useEffect, useState } from "react";
import "./portfolio.css";
function Portfolio() {
  const elemRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsMoving(true);

      elemRef.current.querySelectorAll(".elem").forEach(function (elem) {
        const img = elem.querySelector("img");

        if (img) {
          const diffY = position.y - elem.getBoundingClientRect().top;
          const diffX = e.clientX;

          img.style.transition =
            "transform ease-in-out,opacity .2s ease-in-out";
          img.style.transform = `translate(${diffX}px, ${diffY}px)`;
        }
      });
    };

    const handleMouseStop = () => {
      setIsMoving(false);
    };

    // Attach the event listeners when the component mounts
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseStop);
    window.addEventListener("mouseup", handleMouseStop);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseStop);
      window.removeEventListener("mouseup", handleMouseStop);
    };
  }, [position]);
  return (
    <div className="portfolioSection" ref={elemRef}>
      <div className="elem">
        <div className="textPortfolio">
          <h1 className="portfolioHeading">The Plug</h1>
          <h5>2022</h5>
        </div>

        <img
          src="https://ideogram.ai/api/images/direct/B6m6D14rT0awX5Cml4mn3w.jpg"
          alt=""
        />
      </div>
      <div className="elem">
        <div className="textPortfolio">
          <h1 className="portfolioHeading">Ixperience</h1>
          <h5>2022</h5>
        </div>
        <img
          src="https://ideogram.ai/api/images/direct/dYE8Yh9_QzWus8XIrR39_Q.jpg"
          alt=""
        />
      </div>
      <div className="elem elemLast">
        <div className="textPortfolio">
          <h1 className="portfolioHeading">Hudu</h1>
          <h5>2022</h5>
        </div>
        <img
          src="https://ideogram.ai/api/images/direct/nNQ3YwReS223WYEyxJRnWw.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Portfolio;
