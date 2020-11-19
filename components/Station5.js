import React, { Component } from "react";
import gsap from "gsap";
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
  "what is the approval process in SD? hearing manager? PC?",
  "A public hearing will be hosted with the Santee City Council.",
];
let stage = 0;
const modalContent0 = (step, poptextfunc, poptext) => {
  let i = 0;

  const popup = (val, x, y) => {
    poptextfunc(val);
    gsap.fromTo(
      ".text-popup",
      { scale: 0, display: "none", x: x, y: y },
      {
        scale: 1,
        display: "block",
        ease: "elastic.out",
        duration: 0.5,
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
        ease: "elastic.out",
        duration: 0.5,
      }
    );
  };
  return (
    <div>
      <div className="fullscreen-slide" style={{ cursor: "unset" }}>
        <div className="overlay-button-container">
          <div
            className="overlay-button"
            /*  onClick={func} */
            style={{
              top: 0,
              right: 0,
            }}
          />
        </div>
        <div className="landUsePlanning-container">
          <div className="text-popup">
            <div
              className="closebtn"
              onClick={popdown}
              style={{ cursor: "pointer" }}
            >
              <img src="/images/close.png" />
            </div>
            <div>{poptext}</div>
          </div>

          <div className="landUseBlock" />
          <div className="landUsePlanning">
            <div className="landUseBlock" />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(0, 330, -30)}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(1, 800, -30)}
            />

            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(2, 100, 140)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(3, 200, 140)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(4, 400, 140)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(5, 650, 140)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(6, 750, 140)}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(7, 200, 280)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(8, 400, 280)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(9, 650, 280)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(10, 750, 280)}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(11, 200, 420)}
            />
            <div className="landUseBlock" />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(12, 650, 420)}
            />
            <div
              className="landUseBlock"
              style={{ cursor: "pointer" }}
              onClick={() => popup(13, 750, 420)}
            />
          </div>
        </div>
        <img
          style={{ height: "100%" }}
          src={`/images/station5/Station-5-${step}.jpg`}
        />
      </div>
    </div>
  );
};
const modalContent1 = (step, func) => {
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
        src={`/images/station5/Station-5-${step}.jpg`}
      />
    </div>
  );
};
class Station5 extends Component {
  constructor(props) {
    super(props);
    this.modalcontent = React.createRef();
  }
  state = {
    step: 0,
    modalContent: modalContent0,
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
          <div className={"overlay-full whitePanel"}>
            <div className="center-content content" ref="modalcontent">
              {eval(`modalContent${this.state.step}`)(
                this.state.step,
                this.poptextfunc,
                this.state.poptext
              )}
            </div>
          </div>
          {this.state.step > 0 && this.state.step < 2 ? null : (
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
export default Station5;
