import React, { useEffect } from "react";
import "./anim.css";
import { TimelineMax } from "gsap";
// import { gsap } from "gsap";

const Animpage = () => {
  const tl = new TimelineMax();

  useEffect(() => {
    tl.to(".xchange", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".animation", { y: "-100%", duration: 1 }, "-=1");
  });

  return (
    <div>
      <div className="animation">
        <div className="anim-div">
          <span className="xchange">Xchange</span>

          <span className="xchange">Currency</span>

          <span className="xchange">Converter</span>
        </div>
      </div>
      <div className="slider"></div>
    </div>
  );
};

export default Animpage;
