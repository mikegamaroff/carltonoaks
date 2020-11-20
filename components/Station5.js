import React, { Component } from "react";
import gsap from "gsap";
const popupText = [
  "85 homes are proposed for Residential West (Planning Area 1). Homes are detached and  consistent with surrounding...",
  "",
  "",
  "The new homes are divided into two gated neighborhoods on the western and northern portions of the property. The neighborhoods are designed to be an accessory to the golf course and will be linked to the Country Club and Resort through connective cart paths, providing seamless access between homes and recreation.",
  "158 multi-family detached homes, designed to be compatible with the adjacent residential uses.",
  "The redesigned golf course utilizes native vegetation to reduce the amount of grass in need of irrigation from 132 acres to 66 acres while still maintaining a championship golf course.",
  "Sweeping views of the course will be enjoyed from the new Club & Resort courtyard.",
  "The Carlton Oaks Country Club and Resort provides public access to the new San Diego River trail through a new .04-acre public trailhead which will connect to the existing trails through Mast Park. SANDAG is proposing to construct a Class 1 bikeway along this alignment for the exclusive use of pedestrians and cyclists.",
  "The revitalized Carlton Oaks Country Club & Resort will serve as a modern welcoming place for longtime locals and visitors.  The resort facilities include a 52-room boutique hotel with swimming pool, event lawns, wellness center, and dining. The new facilities are anticipated to attract more users than the existing banquet room and hotel, bolstering the local economy through event revenue, tourism, and property taxes.",
];
let stage = 0;
const modalContent0 = (step, poptextfunc, poptext, func) => {
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
            onClick={func}
            style={{
              bottom: 0,
              right: 0,
            }}
          />
        </div>
        <div className="sitePlan-container">
          <div className="text-popup">
            <div
              className="closebtn"
              onClick={popdown}
              style={{ cursor: "pointer" }}
            >
              <img src="/images/close.png" />
            </div>
            <div>{poptext}</div>
            {/*   <div>{popimg}</div> */}
          </div>

          <div className="sitePlan">
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "10%" }}
              onClick={() => popup(0, 130, 30)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "77%" }}
              onClick={() => popup(1, 130, 450)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "34%", left: "18%" }}
              onClick={() => popup(2, 400, 300)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "34%", left: "35%" }}
              onClick={() => popup(3, 560, 270)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "6%", left: "53%" }}
              onClick={() => popup(4, 700, 200)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "82%", left: "58%" }}
              onClick={() => popup(5, 700, 400)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "-2%", left: "70%" }}
              onClick={() => popup(6, 550, 150)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "-2%", left: "85%" }}
              onClick={() => popup(7, 750, 150)}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "60%", left: "88%" }}
              onClick={() => popup(8, 750, 200)}
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
const modalContent1 = (step, poptextfunc, poptext, func) => {
  console.log(step);
  return (
    <div>
      <div className="overlay-button-container">
        <div
          className="overlay-button"
          onClick={func}
          style={{
            bottom: 100,
            right: 130,
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
          <div className={"overlay-full white whitePanel"}>
            <div className="center-content content" ref="modalcontent">
              {eval(`modalContent${this.state.step}`)(
                this.state.step,
                this.poptextfunc,
                this.state.poptext,
                this.state.step === 0 ? this.seq1 : this.fadeIntro
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Station5;
