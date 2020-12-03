import React, { Component } from "react";
import { Line } from "./AnimLine";
import gsap from "gsap";
import _ from "lodash";
const content = <></>;
const content0 = <></>;
const content1 = (
  <>
    <div className="courseBody-header">Escondido Country Club</div>
    <Line />
    <ul>
      <li>Closed 2013</li>
      <li>109 acres</li>
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
    <div className="courseBody-header">Carmel Highlands Golf Course</div>
    <Line />
    <ul>
      <li>Closed 2015</li>
      <li>112 acres</li>
      <li>
        Proposed Use: Age-qualified community (exclusive to residents age 55+)
        comprised of 455 homes, 81 low-income apartments, 3-acre public park,
        3-mile public trail
      </li>
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
      <li>Proposed Use: 1,200 homes, 70% parks and open space</li>
    </ul>
  </>
);
const content8 = <></>;
const content9 = (
  <>
    {" "}
    <div className="courseBody-header">Town Park Villas Golf Course</div>
    <Line />
    <ul>
      <li>Closed 2019</li>
      <li>44.57-acre site</li>
      <li>Construction began in January 2020 on 850 apartments</li>
      <li>Plans include 9-hole, par 3 course</li>
    </ul>
  </>
);
const content10 = (
  <>
    <div className="courseBody-header">Riverwalk Golf Club</div>
    <Line />
    <ul>
      <li>200 acres</li>
      <li>
        Proposed Use: 4,300-unit housing development, with a new trolley
        station, river park and 1 million square feet of office space
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
      <li>Proposed Use: Sand Mine</li>
      <li>
        Future Use: Following 20+ years of mining, new homes and parks will be
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
    <div className="courseBody-header">Carlton Oaks Golf Club</div>
    <Line />
    <ul>
      <li>Still open!</li>
      <li>165 acres</li>
      <li>
        Current: 18-hole golf course, with 54 room hotel, clubhouse, event space
        and driving range
      </li>
    </ul>
  </>
);

const content16 = (
  <>
    <div className="courseBody-header">Carlton Oaks Country Club & Resort</div>
    <Line />
    <div className="body-lg blue-text">
      <p>
        We’re proud to propose a new, redesigned golf course for the public’s
        use!
      </p>
      <p>
        The vision for the reimagined Carlton Oaks Country Club and Resort is to
        create an integrated and vibrant community hub with updated amenities,
        membership benefits and programming, and homes to preserve this vital
        recreational facility for the benefit of Santee residents and
        businesses.
      </p>
    </div>
  </>
);

const content17 = (
  <>
    <div className="courseBody-header">Carlton Oaks Country Club & Resort</div>
    <Line />
    <div className="body-lg blue-text">
      <p>
        The partnership with Lennar will allow reinvestment into the property
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
const steps = [9, 11, 20, 23, 33, 35, 42.4, 44, 55, 62, 65, 73, 75, 84, 94];
const skipOverlay = [1, 3, 5, 7, 10, 12];
class GolfVideo extends Component {
  constructor(props) {
    super(props);
    this.course1 = React.createRef();
    this.courseVideo = React.createRef();
    this.overlay = React.createRef();
    this.overlayContent = React.createRef();
    this.nextButton = React.createRef();
  }
  state = {
    step: 0,
  };

  stepUp = () => {
    this.setState({ step: this.state.step + 1 });
  };
  fadeInOut = (obj) => {
    gsap.to(obj, {
      opacity: 0,
      ease: "circ.inOut",
      duration: 0.3,
      onComplete: this.fadeOut,
      onCompleteParams: [obj],
    });
  };
  fadeOut = (obj) => {
    this.setState({ step: this.state.step + 1 }, () => {
      gsap.to(obj, {
        opacity: 1,
        ease: "circ.inOut",
        duration: 0.3,
      });
    });
  };

  vidPlay = () => {
    console.log("step = " + this.state.step);
    if (this.state.step < 15) {
      this.course1.current.addEventListener("timeupdate", this.handleEvent);
      this.course1.current.addEventListener("timeupdate", this.buttonTrigger);
      this.course1.current.play();
      if (buttonStep > 0) {
        this.buttonFade(1);
      }

      if (this.state.step > 0 && open) {
        gsap.fromTo(
          this.overlay.current,
          { scale: 1 },
          {
            scale: 0,
            ease: "circ.inOut",
            duration: 1,
            onComplete: this.setOverlayState,
          }
        );
      }
    } else if (this.state.step === 15) {
      gsap.fromTo(
        this.overlay.current,
        { scale: 1 },
        {
          scale: 0,
          ease: "circ.inOut",
          duration: 1,
          onComplete: this.fadeInOut,
          onCompleteParams: this.overlayContent.current,
        }
      );
      gsap.fromTo(
        this.overlay.current,
        { scale: 0 },
        {
          scale: 1,
          ease: "circ.inOut",
          duration: 1,
          delay: 1,
          /*    */
        }
      );
    } else if (this.state.step === 16) {
      this.fadeInOut(this.overlayContent.current);
    } else if (this.state.step === 17) {
      console.log("------ " + this.state.step);
      gsap.fromTo(
        this.overlay.current,
        { scale: 1 },
        {
          scale: 0,
          ease: "circ.inOut",
          duration: 1,
          onComplete: this.props.exhibit2,
        }
      );
    }
  };
  launchVideo = () => {
    this.setState({ videoOn: true }, () => {
      gsap.fromTo(
        this.courseVideo.current,
        { scale: 0, visibility: "hidden" },
        { scale: 1, visibility: "visible", ease: "circ.inOut", duration: 0.5 }
      );

      this.vidPlay();
    });
  };

  clearScene = () => {
    // this.setState({ step: -1 });
    this.props.clearScene();
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
          onComplete: this.clearScene,
        }
      );
    }
  }

  setOverlayState = () => {
    open = !open;
  };

  buttonFade = (val) => {
    gsap.fromTo(
      this.nextButton.current,
      { scale: val, opacity: val },
      {
        delay: val === 0 ? 3 : 0, //  BUTTON DELAY
        scale: val === 0 ? 1 : 0,
        opacity: val === 0 ? 1 : 0,
        ease: val === 0 ? "elastic.out(1, 0.3)" : "circ.out",
        duration: val === 0 ? 1 : 0.3,
      }
    );
  };
  buttonTrigger = (e) => {
    console.log(this.course1.current.currentTime);
    if (this.course1.current.currentTime >= steps[buttonStep]) {
      this.buttonFade(0);
      this.course1.current.removeEventListener(
        "timeupdate",
        this.buttonTrigger
      );
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

  handleEvent = (e) => {
    if (this.course1.current.currentTime >= steps[this.state.step]) {
      this.course1.current.pause();
      this.course1.current.removeEventListener("timeupdate", this.handleEvent);

      /*  console.log(!_.includes(skipOverlay, step)); */
      if (!_.includes(skipOverlay, this.state.step) && !open) {
        gsap.fromTo(
          this.overlay.current,
          { scale: 0, visibility: "hidden" },
          {
            scale: 1,
            visibility: "visible",
            ease: "circ.inOut",
            duration: 0.5,
            onComplete: this.setOverlayState,
          }
        );
      }
      this.setState({ step: this.state.step + 1 });
    }
  };

  render() {
    return (
      <div>
        <div className="overlay-container zindex2 modal">
          <div className="overlay-content">
            <h1 style={{ marginBottom: 30 }}>
              Across the county, golf courses are being redeveloped.
            </h1>
            <div className="body-lg">
              From Escondido Country Club and Riverwalk to Cottonwood Golf
              Course and Carmel Mountain Ranch, new developments are planned
              where lush fairways once were.
            </div>
            <div>
              <div className="button transition" onClick={this.launchVideo}>
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
        {this.state.videoOn ? (
          <div className="video-container zindex3" ref={this.courseVideo}>
            <div
              style={{ opacity: 0 }}
              className="button next"
              ref={this.nextButton}
              onClick={this.vidPlay}
            >
              Next
            </div>
            <div
              className="overlay-content-courses"
              ref={this.overlay}
              style={{ visibility: "hidden" }}
            >
              <div className="courseBody" ref={this.overlayContent}>
                {eval(`content${this.state.step}`)}
              </div>
            </div>

            <video playsInline preload="true" ref={this.course1}>
              <source
                type="video/mp4"
                src="/images/video/CarltonOaksFull.mp4"
              />
            </video>
          </div>
        ) : null}
      </div>
    );
  }
}
export default GolfVideo;
