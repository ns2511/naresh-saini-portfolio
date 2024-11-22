import React, { useEffect } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  useEffect(() => {
    const createTrail = (e) => {
      const trail = document.createElement("div");
      trail.className = styles.trail;
      document.body.appendChild(trail);

      // Set the trail position
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;

      // Remove the trail after animation completes
      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    // Add mousemove event listener
    document.addEventListener("mousemove", createTrail);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", createTrail);
    };
  }, []);

  return null; // This component doesn't render any visible elements
};

export default CustomCursor;
