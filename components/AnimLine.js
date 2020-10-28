import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
export const Line = (props) => {
  const line = useRef(null);

  useEffect(() => {
    if (line.current) {
      gsap.fromTo(
        line.current,

        { scaleX: 0 },
        {
          scaleX: 1,

          ease: "circ.inOut",
          duration: 2,
          /*   onComplete: setOverlayState, */
        }
      );
    }
  });

  return (
    <>
      <div className="green-line" ref={line} />
    </>
  );
};
