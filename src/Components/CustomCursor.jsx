// CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import '../css/CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    const hoverEvent = () => setHovered(true);
    const unhoverEvent = () => setHovered(false);
    const clickableElements = document.querySelectorAll('a, button, input, textarea, img');
    clickableElements.forEach(el => {
      el.addEventListener("mouseover", hoverEvent);
      el.addEventListener("mouseout", unhoverEvent);
    });

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      clickableElements.forEach(el => {
        el.removeEventListener("mouseover", hoverEvent);
        el.removeEventListener("mouseout", unhoverEvent);
      });
    };
  }, []);

  return (
    <>
      <div className={`cursor ${hovered ? 'hovered' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </>
  );
};

export default CustomCursor;