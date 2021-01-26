import React, { Component } from "react";
import gsap from "gsap";

let stage = 0;
const modalContent0 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ marginBottom: 30 }}>
          There are many important factors that have to be analyzed prior to
          preparing a site plan.
        </h1>
        <p>
          Location, the General Plan land use designations and site constraints
          are all analyzed as part of the process to create a comprehensive
          Master Development Plan.
        </p>
      </div>
    </div>
  );
};
const modalContent1 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ marginBottom: 30 }}>
          There are many important factors that have to be analyzed prior to
          preparing a site plan.
        </h1>
        <p>
          The vision for Carlton Oaks is the result of numerous technical
          studies, conversations with the City, market analysis, and preliminary
          community engagement.
        </p>
      </div>
    </div>
  );
};
const modalContent2 = (step, func) => {
  return (
    /*     <div onClick={func}>
      <img
        className="fullscreen-slide"
        src={`/images/station3/Station-3-${step}.jpg`}
      />
    </div> */

    <div
      //onClick={func}
      className="fullscreen-slide"
      style={{ cursor: "unset" }}
    >
      <div className="overlay-button-container">
        <div
          className="overlay-button"
          onClick={func}
          style={{
            bottom:
              step < 4 ? "20%" : step === 4 ? "45%" : step > 9 ? "90%" : "7%",
            left: step < 5 ? "11%" : "78%",
          }}
        />
      </div>
      {console.log(step)}
      <img
        style={{ height: "100%" }}
        src={`/images/station3/Station-3-${step}.jpg`}
      />
    </div>
  );
};
const modalContent10 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ marginBottom: 30 }}>
          Prior to putting pen to paper on the plans, our team of engineers
          conducted an extensive review of the site's constraints, including
          floodway analysis.
        </h1>
        <p>
          These constraints provided the framework for the vision for the new
          <br />
          Carlton Oaks Country Club and Resort.
        </p>
      </div>
    </div>
  );
};
const modalContent18 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ padding: "30px 60px 0 60px" }}>
          In order to achieve compliance with both FEMA and the City of Santee's
          Flood Damage Prevention Ordinance, the project has incorporated a
          number of design features that will encourage the protection of the
          proposed structures and the overall river corridor.
        </h1>
      </div>
    </div>
  );
};

const modalContent19 = () => {
  return (
    <div>
      <div className="body-sm">
        <h1 style={{ marginBottom: 30 }}>Design Measures & Improvements</h1>
        <ul>
          <li>
            The proposed development areas are primarily located within the
            footprint of the existing hotel and golf course. The stream that
            currently runs through the golf course is being enhanced and will
            maintain existing flow capacities and natural resources.
          </li>
          <li>
            The golf course is being redesigned to allow more stream flow to
            pass in flooding situations. The southeast side of the golf course
            is being graded lower to provide more flood volume. Other sections
            of the course are being graded to remove existing hills and mounds
            that would otherwise be an impediment to flow.
          </li>
          <li>
            The proposed shape and location of the hotel site was intentionally
            designed to avoid disruption to the flow of the San Diego River and
            to maintain the existing river flow capacity. The hotel site is also
            being contoured to allow flows to pass freely to the south.
          </li>
        </ul>
      </div>
    </div>
  );
};
const modalContent20 = () => {
  return (
    <div>
      <div className="body-sm">
        <h1 style={{ marginBottom: 30 }}>Design Measures & Improvements</h1>
        <ul>
          <li>
            Geotechnical soil reinforcement will be utilized to ensure that even
            high flow velocities will not erode or damage the proposed
            development embankments.
          </li>
          <li>
            In compliance with the City of Santee’s Ordinance, all development
            will be reviewed and certified by a registered civil engineer.
            Additionally, several other registered civil engineers will be
            required to review the project specifically in regard to the flood
            calculations.
          </li>
          <li>
            The project will be utilizing water-tight pressure rated sewer pipe
            to avoid all infiltration associated with floods or groundwater.
          </li>
          <li>
            The city of Santee public storm drain system discharges into the
            golf course at several locations. The proposed project will improve
            these channels to avoid erosion and standing water.
          </li>
        </ul>
      </div>
    </div>
  );
};
const modalContent21 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ marginBottom: 30 }}>
          The plans for the new Golf Course and Resort are designed to minimize,
          avoid and reduce impacts to sensitive resources.
        </h1>
        <p>
          The results of both the FEMA analysis and the City analysis conclude
          that the project will have <br />
          <u>no impact</u> on the upstream water surface elevation, as compared
          to the existing condition.
        </p>
      </div>
    </div>
  );
};

const modalContent22 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ marginBottom: 30 }}>
          The revised maps and river modeling will be held at FEMA and at the
          City as an official record.
        </h1>
        <p>
          As part of this process, the floodway and floodplain will be remapped
          and all of the residential, hotel and resort areas will be fully
          removed from the floodway and floodplain.
        </p>
      </div>
    </div>
  );
};

class Station3 extends Component {
  constructor(props) {
    super(props);
    this.modalcontent = React.createRef();
  }
  state = {
    step: 0,
    modalContent: modalContent1,
  };

  clearScene = () => {
    stage = 0;

    //this.props.clearScene();
    this.setState({ step: 0 }, () => {
      this.props.exhibit0();
    });
  };
  componentDidMount() {
    if (this.state.step === 0) {
      gsap.fromTo(
        ".modal",
        { scale: 0, display: "none" },
        {
          scale: 1,
          display: "block",

          ease: "circ.inOut",
          duration: 1,
        }
      );
    }
  }

  fadeInOut = (obj, delay) => {
    gsap.to(obj, {
      opacity: 0,
      ease: "circ.inOut",
      duration: 0,
      delay: delay ? delay : 0,
      onComplete: this.fadeIn,
      onCompleteParams: [obj],
    });
  };
  fadeIn = (obj) => {
    stage = stage + 1;
    this.setState({ step: stage });
    gsap.to(obj, {
      opacity: 1,
      ease: "circ.inOut",
      duration: 0.03,
    });
  };
  fadeOut = (obj, delay) => {
    gsap.to(obj, {
      opacity: 0,
      ease: "circ.inOut",
      duration: 0.3,
      delay: delay ? delay : 0,
    });
  };
  seq1 = () => {
    this.fadeInOut(".content");
  };
  seq2 = () => {
    gsap.to(".grid-top", {
      opacity: 1,
      display: "block",
      ease: "circ.inOut",
      duration: 1,
    });
    gsap.to(".subcontent", {
      opacity: 1,
      display: "flex",
      ease: "circ.inOut",
      duration: 1,
    });
    gsap.fromTo(
      ".infoBlockAnim1",
      {
        opacity: 0,
        y: -30,
        display: "none",
      },
      {
        display: "block",
        opacity: 1,
        y: 0,

        ease: "circ.inOut",
        duration: 1,
        onComplete: this.seq3,
      }
    );
  };

  seq3 = () => {
    this.fadeInOut(".subcontent", 3);
    gsap.fromTo(
      ".infoBlockAnim2",
      {
        opacity: 0,
        y: -30,
        display: "none",
      },
      {
        display: "block",
        opacity: 1,
        y: 0,
        delay: 3,
        ease: "circ.inOut",
        duration: 1,
        onComplete: this.seq4,
      }
    );
  };
  /*   seq4 = () => {
    this.fadeInOut(".subcontent", 3);
    gsap.to(".infoBlockAnim3", {
      opacity: 0,
      delay: 3,
      onComplete: this.seq5,
    });
  }; */
  seq4 = () => {
    this.fadeInOut(".subcontent", 3);
    gsap.fromTo(
      ".infoBlockAnim3",
      {
        opacity: 0,
        y: -30,
        display: "none",
      },
      {
        display: "block",
        opacity: 1,
        y: 0,
        delay: 3,
        ease: "circ.inOut",
        duration: 1,
        onComplete: this.seq5,
      }
    );
  };
  seq5 = () => {
    this.fadeInOut(".subcontent", 3);
    gsap.to(".infoBlockAnim3", {
      opacity: 1,
      delay: 3,
      onComplete: this.seq6,
    });
  };
  seq6 = () => {
    this.fadeOut(".infoBlockAnim1", 3.1);
    this.fadeOut(".infoBlockAnim2", 3.2);
    this.fadeOut(".infoBlockAnim3", 3.3);
    gsap.to(".subcontent", {
      opacity: 0,
      display: "none",
      ease: "circ.inOut",
      duration: 0.5,
      delay: 3,
    });
    gsap.to(".grid-top", {
      opacity: 0,
      display: "none",
      ease: "circ.inOut",
      duration: 1,
      delay: 2.5,
    });
    gsap.to(".whitePanel", {
      css: {
        maxWidth: "1100px",
        width: "75%",
        height: "60%",
        top: "50%",
      },
      delay: 3,
      ease: "circ.inOut",
      duration: 1,
      onComplete: this.seq7,
    });
  };
  seq7 = () => {
    this.setState({ modalContent: modalContent2 });

    gsap.to(".content", {
      opacity: 1,
      display: "flex",
      ease: "circ.inOut",
      duration: 1,
    });
  };

  fadeIntro = () => {
    this.props.reset();

    gsap.fromTo(
      ".modal",
      { scale: 1, display: "block" },
      {
        scale: 0,
        display: "none",

        ease: "circ.inOut",
        duration: 1,
        onComplete: this.clearScene,
      }
    );
  };

  resetIntro = () => {
    gsap.to(".modal", {
      display: "none",
      ease: "none",
      duration: 0,
      onComplete: this.props.reset,
    });
    this.setState({ step: 0 });
  };

  render() {
    return (
      <div>
        <div className="overlay-container3 zindex2 modal">
          <a href="/" className="backButton transition back">
            «
          </a>
          <div>
            <div className="infoGraphic-grid" style={{ width: "90%" }}>
              <div className="grid-top">Did you know?</div>
              <div className="infoBlock infoBlockAnim1 ">
                <div className="infoText">Labor makes up roughly</div>
                <div className="infoPerc">40%</div>
                <div className="infoText">
                  of Carlton Oaks' operating budget
                </div>
              </div>
              <div className="infoBlock infoBlockAnim2">
                <div className="infoText">
                  The average American golf course uses
                </div>
                <div className="infoPerc">312k</div>
                <div className="infoText">gallons of water each day*</div>
              </div>
              <div className="infoBlock infoBlockAnim3">
                <div className="infoText">The current course has</div>
                <div className="infoPerc">132</div>
                <div className="infoText">acres of turf irrigation</div>
              </div>
            </div>
          </div>
          <div
            className={
              (this.state.step > 1 && this.state.step < 10) ||
              (this.state.step > 10 && this.state.step < 18)
                ? "overlay-full black whitePanel"
                : "overlay-content whitePanel"
            }
          >
            <div className="center-content content" ref="modalcontent">
              {eval(
                `modalContent${
                  (this.state.step > 1 && this.state.step < 10) ||
                  (this.state.step > 10 && this.state.step < 18)
                    ? 2
                    : this.state.step
                }`
              )(this.state.step, this.seq1)}
              <div>
                <div
                  className="button transition"
                  style={{
                    display:
                      this.state.step > 1 &&
                      this.state.step !== 10 &&
                      this.state.step < 18
                        ? "none"
                        : "block",
                  }}
                  onClick={this.state.step < 22 ? this.seq1 : this.fadeIntro}
                >
                  {this.state.step === 10 ? "LEARN MORE" : "NEXT"}
                </div>
              </div>
            </div>
          </div>
          {(this.state.step > 1 && this.state.step < 10) ||
          (this.state.step > 10 && this.state.step < 18) ? null : (
            <div className="overlay-footer">
              <div className="overlay-logo">
                <img src="images/logo.png" />
              </div>
              <div className="station-title">Station 3 – Building Blocks</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Station3;
