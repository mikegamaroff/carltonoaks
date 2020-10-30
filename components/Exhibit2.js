import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
const subcontentText0 = <></>;
const subcontentText1 =
  "Minimum wage has increased roughly $1 per year over the last 5 years. We value our employees and understand the need for change. Yet, increasing costs are a challenge.";
export const Exhibit2 = (props) => {
  const [step, setStep] = useState(0);
  const modal = useRef(null);
  const content = useRef(null);
  const whitePanel = useRef(null);
  const infoBlock1 = useRef(null);
  const infoBlock2 = useRef(null);
  const infoBlock3 = useRef(null);
  const subcontent = useRef(null);
  const clearScene = () => {
    setStep(1);
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
  const sequenceStart = () => {
    gsap.to(content.current, {
      opacity: 0,
      display: "none",

      ease: "circ.inOut",
      duration: 1,
    });
    gsap.to(whitePanel.current, {
      css: {
        maxWidth: "90%",
        width: "90%",
        height: "15%",
        top: "75%",
      },
      delay: 0.2,
      ease: "circ.inOut",
      duration: 1,
    });

    gsap.fromTo(
      subcontent.current,
      {
        opacity: 0,
        display: "none",
      },
      {
        display: "block",
        opacity: 1,
        delay: 1.2,
        ease: "circ.inOut",
        duration: 1,
      }
    );

    gsap.fromTo(
      infoBlock1.current,
      {
        opacity: 0,
        y: -30,
        display: "none",
      },
      {
        display: "block",
        opacity: 1,
        y: 0,
        delay: 1.4,
        ease: "circ.inOut",
        duration: 1,
      }
    );
    gsap.fromTo(
      infoBlock2.current,
      {
        opacity: 0,
        y: -30,
        display: "none",
      },
      {
        display: "block",
        opacity: 1,
        y: 0,
        delay: 2.4,
        ease: "circ.inOut",
        duration: 1,
      }
    );
    gsap.fromTo(
      infoBlock3.current,
      {
        opacity: 0,
        y: -30,
        display: "none",
      },
      {
        display: "block",
        opacity: 1,
        y: 0,
        delay: 3.4,
        ease: "circ.inOut",
        duration: 1,
      }
    );
  };
  return (
    <div>
      <div className="overlay-container zindex2" id="modal" ref={modal}>
        <div className="infoGraphic-grid" style={{ width: "90%" }}>
          <div className="infoBlock" ref={infoBlock1}>
            <div className="infoText">Labor makes up</div>
            <div className="infoPerc">40%</div>
            <div className="infoText">of Carlton Oaks' operating budget</div>
          </div>
          <div className="infoBlock" ref={infoBlock2}>
            <div className="infoText">Carlton Oaks uses approximately</div>
            <div className="infoPerc">470k</div>
            <div className="infoText">gallons of water each day.</div>
          </div>
          <div className="infoBlock" ref={infoBlock3}>
            <div className="infoText">The current course has</div>
            <div className="infoPerc">132</div>
            <div className="infoText">acres of turn irrigation</div>
          </div>
        </div>
        <div className="overlay-content" ref={whitePanel}>
          <div ref={subcontent} className="subcontent">
            {eval(`subcontentText${step}`)}
          </div>
          <div
            ref={content}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginBottom: 30 }}>
              Carlton Oaks isn't immune to market constraints.
            </h1>
            <div className="body-lg">
              Escalating operation, labor and maintenance costs have made it
              increasingly difficult to maintain the course at the level that
              was once possible and at the level players expect.
            </div>
            <div>
              <div className="button transition" onClick={sequenceStart}>
                LEARN MORE
              </div>
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
