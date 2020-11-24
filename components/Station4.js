import React, { Component } from "react";
import gsap from "gsap";
const popupText = [
  "0 We kicked off public outreach in January 2020 with the launch of our informational website and FAQs page, door to door outreach to adjacent neighbors, one-on-one and small group meetings with interested community members, and meetings with local community groups.",
  "1 The second application submittal included changes to the plan based on city comments and community feedback. The application is currently under review by city staff.",
  "2 A letter was mailed to 950 homeowners who live in the neighborhoods closest to the course. It can be downloaded by visiting www.carltonoaksinfo.com/outreach",
  "3 Thanks for coming!",
  "4 We will refine plans to incorporate comments we receive on our second submittal as well as feedback submitted during the open house",
  "5 This is an iterative process. We will continue to refine and resubmit until the cities deem our application complete.",
  "6 Public education and education are a very important part of the process. Our team is available for one-on-one and small group meetings. We will also hold more public workshops. We hope you’ll stay involved!",
  "7 We’ll keep you up to date on project milestones through our website and other outreach mediums.",
  "8 The Scoping Meeting is your opportunity to provide input on specific issues you’d like to see analyzed in the Environmental Impact Report (EIR).",
  "9 The EIR evaluates many different categories, including aesthetics, air quality, biological resources, cultural resources, geology and soils, greenhouse gases, hydrology and water quality, noise, traffic and more.",
  "10 The Draft EIR will be circulated for public review. The public may submit comments or questions on the document.",
  "11 Once the comment period closes, responses will be prepared. The responses to all comments will be included in the final EIR.",
  "12 what is the approval process in SD? hearing manager? PC?",
  "13 A public hearing will be hosted with the Santee City Council.",
];
let stage = 0;
const modalContent0 = () => {
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

const modalContent1 = (step, func, poptextfunc, poptext) => {
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
const modalContent2 = (step, func) => {
  console.log(step);
  return (
    <div>
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
        className="fullscreen-slide"
        src={`/images/station4/Station-4-${step}.jpg`}
      />
    </div>
  );
};
const modalContent9 = () => {
  return (
    <div>
      <div className="body-sm">
        <h1 style={{ marginBottom: 30 }}>Community Responsive Planning</h1>
        <p>
          We value your feedback and have already made adjustments to the plans
          for the new Country Club and Resort. Here are some of the changes
          we've made since our first application submittal (Aug. 2019):
        </p>
        <p>
          No General Plan Amendment! We heard you loud and clear so we've
          reworked the residential portion in order to avoid a GPA. All
          residential development will occur in the Planned Development Zone.
        </p>
        <p>
          The size of the hotel has been reduced from 126 rooms to 54 rooms.
          (There are currently 52 rooms in the existing hotel)
        </p>
        <p>
          The Resport will be two stories, instead of five as originally
          proposed.
        </p>
        <p>
          We've added cottages to the hotel site as suggested by one of our
          neighbors on Inverness.
        </p>
        <p>
          We heard from our neighbors that there is an interest in increased
          membership opportunities and programming. We're working on developing
          a membership program that includes entertainment, fitness and
          recreation opportunities for non-golfers, families and the community
          at-large.
        </p>
        <p>
          We've simplified the scale of the project by eliminating the senior
          residential component and the condos.
        </p>
      </div>
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
        <div className="overlay-container4 zindex2 modal">
          <div
            className={
              this.state.step === 0
                ? "overlay-content whitePanel"
                : "overlay-full black whitePanel"
            }
          >
            <div className="center-content content" ref="modalcontent">
              {eval(`modalContent${this.state.step}`)(
                this.state.step,
                this.state.step < 2 ? this.seq1 : this.fadeIntro,
                this.poptextfunc,
                this.state.poptext
              )}
              <div>
                <div
                  className="button transition"
                  onClick={this.state.step < 2 ? this.seq1 : this.fadeIntro}
                >
                  NEXT
                </div>
              </div>
            </div>
          </div>
          {this.state.step > 0 && this.state.step < 3 ? null : (
            <div className="overlay-footer">
              <div className="overlay-logo">
                <img src="images/logo.png" />
              </div>
              <div className="station-title">
                Station 4 – Community Outreach
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Station4;
