import React, { useEffect, useRef } from "react";
import Hero from "../../Components/Hero/Hero";
import "./homepage.css";
import Portfolio from "../../Components/Portfolio/Portfolio";
import About from "../../Components/About/About";
import Subscription from "../../Components/Subscription/Subscription";
import Footer from "../../Components/Footer/Footer";

function Homepage() {
  useEffect(() => {
    // Create a custom cursor element

    const customCursor = document.createElement("div");
    customCursor.className = "custom-cursor";
    document.body.appendChild(customCursor);

    // Update the custom cursor position based on mouse movement
    const updateCursorPosition = (event) => {
      customCursor.style.left = `${event.clientX}px`;
      customCursor.style.top = `${event.clientY}px`;
    };

    // Add event listener for mouse movement
    document.addEventListener("mousemove", updateCursorPosition);

    // Check if the cursor is over text and change its color
    document.addEventListener("mousemove", function (event) {
      const hoveredElement = document.elementFromPoint(
        event.clientX,
        event.clientY
      );

      if (
        hoveredElement &&
        (hoveredElement.classList.contains("textPortfolio") ||
          hoveredElement.classList.contains("elem") ||
          hoveredElement.classList.contains("portfolioHeading"))
      ) {
        customCursor.style.width = "50px"; // Change cursor color when hovering over text
        customCursor.style.marginRight = "10px"; // Change cursor color when hovering over text
        customCursor.style.height = "50px";
        customCursor.textContent = "->";

        customCursor.style.visibility = "visible"; // Change cursor color when hovering over text
      } else {
        customCursor.style.width = "15px"; // Change cursor color when hovering over text
        customCursor.style.height = "15px";
        customCursor.textContent = "";
        // Reset cursor color when not hovering over text
      }

      if (
        hoveredElement &&
        (hoveredElement.classList.contains("textPortfolio") ||
          hoveredElement.classList.contains("elem") ||
          hoveredElement.classList.contains("portfolioHeading"))
      ) {
        // Add the "elem" class to apply the animation
        customCursor.classList.add("cursorAnimation");
      } else {
        // Remove the "cursorAnimation" class to stop the animation
        customCursor.classList.remove("cursorAnimation");
      }
    });

    customCursor.style.transition =
      "width 0.2s ease-in-out, height 0.2s ease-in-out";

    // Clean up the custom cursor element on component unmount
    return () => {
      document.body.removeChild(customCursor);
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div className="secondMain">
      <div className="custom-cursor"></div>
      <section>
        <Hero />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <About />
        <Subscription />
        <Footer />
      </section>
    </div>
  );
}

export default Homepage;
