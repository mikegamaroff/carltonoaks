import React, { useRef, useState, useEffect } from "react";
import { Line } from "./AnimLine";
import gsap from "gsap";
import _ from "lodash";

const content0 = <></>;
const content1 = (
  <>
    <div className="courseBody-header">Escondido Country Club</div>
    <Line />
    <ul>
      <li>Closed 2013</li>
      <li>10 acres</li>
      <li>7 years of legal challenges</li>
      <li>Construction began in 2019 on 380 homes</li>
    </ul>
  </>
);
const content2 = <></>;
const content3 = (
  <>
    <div className="courseBody-header">StoneRidge Country Club</div>
    <Line />
    <ul>
      <li>Closed 2017</li>
      <li>117 acres</li>
      <li>
        160 homes with new health center, pickleball/tennis courts, event space
        and pool
      </li>
    </ul>
  </>
);
const content4 = <></>;
const content5 = (
  <>
    <div className="courseBody-header">Carmel Highlands Gold Course</div>
    <Line />
    <ul>
      <li>Closed 2015</li>
      <li>112 acres</li>
      <li>536 homes - known as The Junipers</li>
      <li>3 acre park</li>
    </ul>
  </>
);
const content6 = <></>;
const content7 = (
  <>
    {" "}
    <div className="courseBody-header">Carmel Mountain Ranch</div>
    <Line />
    <ul>
      <li>Closed 2018</li>
      <li>167 acres</li>
      <li>Proposed Use: 1,200 units, 70% parks and open space</li>
    </ul>
  </>
);
const content8 = <></>;
const content9 = (
  <>
    {" "}
    <div className="courseBody-header">Town Park Gold Course</div>
    <Line />
    <ul>
      <li>Closed 2019</li>
      <li>44.57 acres</li>
      <li>Construct on began in January 2020 on 850 apartments</li>
      <li>Plans include 9-hole, par 3 course</li>
    </ul>
  </>
);
const content10 = (
  <>
    <div className="courseBody-header">Cottonwood Golf Club</div>
    <Line />
    <ul>
      <li>280 acres</li>
      <li>Proposed Use Sand Mine</li>
      <li>
        Future Following 20+ years of mining, new homes and parks will be
        constructed
      </li>
    </ul>
  </>
);
const content11 = <></>;
const content12 = (
  <>
    <div className="courseBody-header">Cottonwood Golf Club</div>
    <Line />
    <ul>
      <li>280 acres</li>
      <li>Proposed Use Sand Mine</li>
      <li>
        Future Following 20+ years of mining, new homes and parks will be
        constructed
      </li>
    </ul>
  </>
);
const content13 = <></>;
const content14 = (
  <>
    <div className="courseBody-header">Salt Creek Golf Club</div>
    <Line />
    <ul>
      <li>Closed 2019</li>
      <li>164 acres</li>
      <li>Out for bid to developers</li>
    </ul>
  </>
);

const content15 = (
  <>
    <div className="courseBody-header">Calrton Oaks Gold Club</div>
    <Line />
    <ul>
      <li>Still open!</li>
      <li>165 acres</li>
      <li>
        18-hole gold course, with 54 room hotel, clubhouse, event space and
        driving range
      </li>
    </ul>
  </>
);

const content16 = (
  <>
    <div className="courseBody-header">Calrton Oaks Country Club & Resort</div>
    <Line />
    <div className="body-lg blue-text">
      <p>
        The vision for the reimagined Carlton Oaks Country Club and Resort is to
        creae an integrated and vibrant community hub with updated amenities,
        membership benefits and programming, and homes to preserve this vital
        recreational facility for the benefit of Santee residents and
        businesses.
      </p>
    </div>
  </>
);

const content17 = (
  <>
    <div className="courseBody-header">Calrton Oaks Country Club & Resort</div>
    <Line />
    <div className="body-lg blue-text">
      <p>
        This partnership with Lennar will allow reinvestment into the propery
        and enable us to enhance the onsite amenities and continue to offer
        golf.
      </p>
      <p>
        The new homeowners will provide economic vitality to the Carlton Oaks
        Country Club and Resort by activating the facilities year-round, further
        assuring the long-term preservation of the golf course.
      </p>
    </div>
  </>
);
const content18 = <></>;
let open = false;
let buttonStep = 0;
export const GolfVideo = (props) => {
  const course1 = useRef(null);
  const courseVideo = useRef(null);
  const overlay = useRef(null);
  const nextButton = useRef(null);
  const [step, setStep] = useState(0);
  const steps = [9, 11, 20, 23, 33, 35, 42.4, 44, 55, 62, 65, 73, 75, 84, 94];
  const skipOverlay = [1, 3, 5, 7, 10, 12];
  const vidPlay = () => {
    if (step < 15) {
      course1.current.addEventListener("timeupdate", handleEvent);
      course1.current.addEventListener("timeupdate", buttonTrigger);
      course1.current.play();
      if (buttonStep > 0) {
        buttonFade(1);
      }

      if (step > 0 && open) {
        gsap.fromTo(
          overlay.current,
          { scale: 1 },
          {
            scale: 0,
            ease: "circ.inOut",
            duration: 1,
            onComplete: setOverlayState,
          }
        );
      }
    } else if (step === 15 || step === 16) {
      fadeInOut(overlay.current);
    } else if (step === 17) {
      props.reset(0);
      props.resetIntro();
      buttonStep = 0;

      gsap.to(courseVideo.current, {
        scale: 0,
        ease: "circ.out",
        duration: 0.3,
        onComplete: props.exhibit0,
      });
    }
  };

  useEffect(() => {
    if (courseVideo.current && step === 0) {
      gsap.fromTo(
        courseVideo.current,
        { scale: 0, visibility: "hidden" },
        { scale: 1, visibility: "visible", ease: "circ.inOut", duration: 0.5 }
      );
      vidPlay();
    }
  });

  const fadeInOut = (obj) => {
    gsap.to(obj, {
      opacity: 0,
      ease: "circ.inOut",
      duration: 0.3,
      onComplete: fadeOut,
      onCompleteParams: [obj],
    });
  };
  const fadeOut = (obj) => {
    setStep(step + 1);
    gsap.to(obj, {
      opacity: 1,
      ease: "circ.inOut",
      duration: 0.3,
    });
  };

  const setOverlayState = () => {
    open = !open;
  };

  const buttonFade = (val) => {
    gsap.fromTo(
      nextButton.current,
      { scale: val, opacity: val },
      {
        scale: val === 0 ? 1 : 0,
        opacity: val === 0 ? 1 : 0,
        ease: val === 0 ? "elastic.out(1, 0.3)" : "circ.out",
        duration: val === 0 ? 1 : 0.3,
      }
    );
  };
  const buttonTrigger = (e) => {
    console.log(course1.current.currentTime);
    if (course1.current.currentTime >= steps[buttonStep]) {
      buttonFade(0);
      course1.current.removeEventListener("timeupdate", buttonTrigger);
      buttonStep = buttonStep + 1;
    }

    /*     if (step === 18) {
      course1.current.removeEventListener("timeupdate", handleEvent);
      course1.current.removeEventListener("timeupdate", buttonTrigger);
      props.reset(0);
      props.resetIntro();
      buttonStep = 0;

      gsap.to(courseVideo.current, {
        scale: 0,
        ease: "circ.out",
        duration: 0.3,
        onComplete: props.exhibit0,
      });
    } */
  };

  const handleEvent = (e) => {
    if (course1.current.currentTime >= steps[step]) {
      course1.current.pause();
      course1.current.removeEventListener("timeupdate", handleEvent);

      /*  console.log(!_.includes(skipOverlay, step)); */
      if (!_.includes(skipOverlay, step) && !open) {
        gsap.fromTo(
          overlay.current,
          { scale: 0, visibility: "hidden" },
          {
            scale: 1,
            visibility: "visible",
            ease: "circ.inOut",
            duration: 0.5,
            onComplete: setOverlayState,
          }
        );
      }
      setStep(step + 1);
      console.log("step = " + step);
    }
  };

  return (
    <div className="video-container zindex3" ref={courseVideo}>
      <div
        style={{ opacity: 0 }}
        className="button next"
        onClick={vidPlay}
        ref={nextButton}
      >
        Next
      </div>
      <div
        className="overlay-content-courses"
        ref={overlay}
        style={{ visibility: "hidden" }}
      >
        <div className="courseBody">{eval(`content${step}`)}</div>
      </div>

      <video ref={course1} playsInline preload="true">
        <source type="video/mp4" src="/images/video/CarltonOaksFull.mp4" />
      </video>
    </div>
  );
};
