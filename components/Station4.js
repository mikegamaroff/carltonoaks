import React, { Component } from "react";
import gsap from "gsap";
import YouTube from "react-youtube";
const popupText = [
  "We kicked off public outreach in January 2020 with the launch of our informational website and FAQs page, door to door outreach to adjacent neighbors, one-on-one and small group meetings with interested community members, and meetings with local community groups.",
  "The second application submittal included changes to the plan based on city comments and community feedback. The application is currently under review by city staff.",
  "A letter was mailed to 950 homeowners who live in the neighborhoods closest to the course. It can be downloaded by visiting www.carltonoaksinfo.com/outreach",
  "Thanks for coming!",
  "We will refine plans to incorporate comments we receive on our second submittal as well as feedback submitted during the open house",
  "This is an iterative process. We will continue to refine and resubmit until the cities deem our application complete.",
  "Public education and education are a very important part of the process. Our team is available for one-on-one and small group meetings. We will also hold more public workshops. We hope you’ll stay involved!",
  "We’ll keep you up to date on project milestones through our website and other outreach mediums.",
  "The Scoping Meeting is your opportunity to provide input on specific issues you’d like to see analyzed in the Environmental Impact Report (EIR).",
  "The EIR evaluates many different categories, including aesthetics, air quality, biological resources, cultural resources, geology and soils, greenhouse gases, hydrology and water quality, noise, traffic and more.",
  "The Draft EIR will be circulated for public review. The public may submit comments or questions on the document.",
  "Once the comment period closes, responses will be prepared. The responses to all comments will be included in the final EIR.",
  "What is the approval process in SD? hearing manager? PC?",
  "A public hearing will be hosted with the San Diego Planning Commission.",
];
let stage = 0;
const modalContent0 = (a, b, c, d, endVid) => {
  return (
    <div style={{ paddingTop: 30 }}>
      <YouTube
        videoId="IxYuytPD6Ac"
        onEnd={endVid}
        opts={{
          height: "300px",
          width: "600px",

          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        }}
        /*  onReady={this._onReady} */
      />
    </div>
  );
};
const modalContent1 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ marginBottom: 30 }}>
          The land use planning process can be complicated.
        </h1>
        <p>
          By sharing the process and providing meaningful opportunities to share
          feedback, we’re optimistic that this can be a positive and productive
          experience for all of us.
        </p>
      </div>
    </div>
  );
};

const modalContent2 = (step, func, poptextfunc, poptext) => {
  let i = 0;
  const popup = (val, x, y, left, top) => {
    poptextfunc(val);
    document.querySelector(".text-popup").style.left = `${x + left}px`;
    document.querySelector(".text-popup").style.top = `${y - top}px`;
    gsap.fromTo(
      ".text-popup",
      { scale: 0, display: "none" /* , x: x, y: y */ },
      {
        scale: 1,
        display: "block",
        ease: "power.out",
        duration: 0.2,
        // onComplete: poptextfunc,
        // onCompleteParams: [val],
      }
    );
  };
  const popdown = () => {
    gsap.fromTo(
      ".text-popup",
      { scale: 1, display: "block" },
      {
        scale: 0,
        display: "none",
        ease: "power.out",
        duration: 0.2,
        //  onComplete: poptextfunc,
      }
    );
  };
  return (
    <div>
      <div className="text-popup text-popup-noimage">
        {/*       <div
              className="closebtn"
              onClick={popdown}
              style={{ cursor: "pointer" }}
            >
              <img src="/images/close.png" />
            </div> */}
        <div>{poptext}</div>
      </div>

      <div
        /*   onClick={func} */
        className="fullscreen-slide"
        style={{ cursor: "unset" }}
      >
        <div className="overlay-button-container">
          <div
            className="overlay-button"
            onClick={func}
            style={{
              top: 0,
              right: 0,
            }}
          />
        </div>
        <div className="landUsePlanning-container">
          <div className="landUseBlock" />
          <div className="landUsePlanning">
            <div className="landUseBlock" />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  0,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  1,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -260,
                  70
                )
              }
              onMouseLeave={popdown}
            />

            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  2,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  3,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  4,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  5,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  6,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -260,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  7,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  8,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  9,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  10,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -260,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  11,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  12,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  190,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) =>
                popup(
                  13,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -260,
                  70
                )
              }
              onMouseLeave={popdown}
            />
          </div>
        </div>
        <img
          style={{ height: "100%" }}
          src={`/images/station4/Station-4-${step}.jpg`}
        />
      </div>
    </div>
  );
};
const modalContent3 = (step, func) => {
  console.log(step);
  return (
    <div
      /*   onClick={func} */
      className="fullscreen-slide"
      style={{ cursor: "unset" }}
    >
      <div className="text-popup text-popup-noimage">
        {/*       <div
              className="closebtn"
              onClick={popdown}
              style={{ cursor: "pointer" }}
            >
              <img src="/images/close.png" />
            </div> */}
        <div style={{ display: "none" }}>{""}</div>
      </div>

      <div className="overlay-button-container">
        <div
          className="overlay-button"
          onClick={func}
          style={{
            top: 0,
            right: 0,
          }}
        />
      </div>
      <img
        style={{ height: "100%" }}
        src={`/images/station4/Station-4-${step}.jpg`}
      />
    </div>
  );
};

class Station4 extends Component {
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
  poptextfunc = (val) => {
    this.setState({ poptext: popupText[val] });
  };
  endVid = () => {
    gsap.fromTo(
      ".button-appear",
      { scale: 0, visibility: "hidden", pointerEvents: "none" },
      {
        scale: 1,
        visibility: "visible",
        pointerEvents: "all",
        ease: "circ.inOut",
        duration: 1,
        /* onComplete: this.clearScene, */
      }
    );
  };
  fadeInOut = (obj, delay) => {
    gsap.to(obj, {
      opacity: 0,
      ease: "circ.inOut",
      duration: 0.3,
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
      duration: 0.3,
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
        <div className="overlay-container4 zindex2 modal">
          <a href="/" className="backButton transition back">
            «
          </a>
          <div
            className={
              this.state.step === 0 || this.state.step === 1
                ? "overlay-content whitePanel"
                : "overlay-full black whitePanel"
            }
          >
            <div className="center-content content" ref="modalcontent">
              {eval(`modalContent${this.state.step}`)(
                this.state.step,
                this.state.step < 3 ? this.seq1 : this.fadeIntro,
                this.poptextfunc,
                this.state.poptext,
                this.endVid
              )}
              {this.state.step < 3 ? (
                <div className="button-appear">
                  <div
                    className="button transition"
                    onClick={this.state.step < 3 ? this.seq1 : this.fadeIntro}
                  >
                    NEXT
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          {this.state.step < 2 ? (
            <div className="overlay-footer">
              <div className="overlay-logo">
                <img src="images/logo.png" />
              </div>
              <div className="station-title">
                Station 4 – Community Outreach
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Station4;
