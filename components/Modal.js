import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { GolfVideo } from "./GolfVideo";

export const Modal = (props) => {
  const [step, setStep] = useState(0);
  const modal = useRef(null);

  const clearScene = () => {
    setStep(-1);
    props.clearScene();
  };

  useEffect(() => {
    if (modal.current && step === 0) {
      gsap.fromTo(
        modal.current,

        { scale: 0, display: "none" },
        {
          scale: 1,
          display: "block",

          ease: "circ.inOut",
          duration: 1,
          onComplete: clearScene,
        }
      );
    }
  });
  const fadeIntro = () => {
    gsap.to(
      modal.current,

      {
        opacity: 0,
        ease: "none",
        duration: 1,
        onComplete: resetIntro,
      }
    );
  };

  const resetIntro = () => {
    gsap.to(
      modal.current,

      {
        display: "none",
        ease: "none",
        duration: 0,
      }
    );
  };
  const launchVideo = () => {
    setStep(1);
  };
  return (
    <div>
      {step === 1 ? (
        <GolfVideo
          setStep={setStep}
          reset={props.reset}
          resetIntro={resetIntro}
          exhibit0={props.exhibit0}
        />
      ) : null}
      <div className="overlay-container zindex2" id="modal" ref={modal}>
        <div className="overlay-content">
          <h1 style={{ marginBottom: 30 }}>
            Across the county, golf courses are being redeveloped.
          </h1>
          <div className="body-lg">
            From Escondido Country Club and Riverwalk to Cottonwood Golf Course
            and Carmel Mountain Ranch, new developments are planned where lush
            fairways once were.
          </div>
          <div>
            <div className="button transition" onClick={launchVideo}>
              EXPLORE
            </div>
          </div>
        </div>
        <div className="overlay-footer">
          <div className="overlay-logo">
            <img src="images/logo.png" />
          </div>
          <div className="station-title">Station 2 – State of Golf</div>
        </div>
      </div>
    </div>
  );
};
