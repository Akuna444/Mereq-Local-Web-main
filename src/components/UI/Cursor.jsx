"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

// Cursor Component
const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("#portfolio");
    const cursorText = document.querySelector(".cursor-text");
    console.log("lidd", cursorText);

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event) => {
      const link = event.target;

      gsap.to(cursor, { scale: 4 });
      cursorText.style.display = "block";

      // if (link.classList.contains("view")) {
      //   gsap.to(cursor, { scale: 4 });
      //   cursorText.style.display = "block";
      // } else {
      //   gsap.to(cursor, { scale: 4 });
      //   cursorText.style.display = "block";
      // }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      cursorText.style.display = "none";
    };

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
  }, []);
  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text ">See Project</span>
    </div>
  );
};

export default Cursor;
