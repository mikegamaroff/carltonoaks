import React, { Component } from "react";
import gsap from "gsap";
import YouTube from "react-youtube";
const popupText = [
  "85 homes are proposed for Residential West (Planning Area 1). Homes are detached and consistent with surrounding neighborhood.",
  <YouTube
    videoId="vDFX-3BXALw"
    opts={{
      height: "300px",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }}
    /*  onReady={this._onReady} */
  />,
  "The new homes in Residential West (PA 1) will be at a lower grade than the existing homes to preserve privacy and long views of the mountains to the south.",
  "The new homes are divided into two gated neighborhoods on the western and northern portions of the property. The neighborhoods are designed to be an accessory to the golf course and will be linked to the Country Club and Resort through connective cart paths, providing seamless access between homes and recreation.",
  "158 multi-family detached homes, designed to be compatible with the adjacent residential uses.",
  "The redesigned golf course utilizes native vegetation to reduce the amount of grass in need of irrigation from 132 acres to 66 acres while still maintaining a championship golf course.",
  "Sweeping views of the course will be enjoyed from the new Club & Resort courtyard.",
  "The Carlton Oaks Country Club and Resort provides public access to the new San Diego River trail through a new .04-acre public trailhead which will connect to the existing trails through Mast Park. SANDAG is proposing to construct a Class 1 bikeway along this alignment for the exclusive use of pedestrians and cyclists.",
  "The revitalized Carlton Oaks Country Club & Resort will serve as a modern welcoming place for longtime locals and visitors. The resort facilities include a 52-room boutique hotel with swimming pool, event lawns, wellness center, and dining. The new facilities are anticipated to attract more users than the existing banquet room and hotel, bolstering the local economy through event revenue, tourism, and property taxes.",
  "Existing ponds will be redesigned, and reshaped, and existing maintenance facilities will be moved out of the floodway where they currently sit.",
  "The redesigned golf course will be updated to improve the flow of drainage, which would reduce the amount of ponding that occurs on the site during rain events.",
  "The housing and resort architecture embody the elements of Santee’s history through a mixture of modern cottage, modern prairie, and contemporary Spanish styles.",
  "15 acres of existing natural areas will be retained on site. Remaining out of play areas will be landscaped with native plants which require little to no maintenance.",
  "New community features will define the “sense of place” with amenities and activities for the entire family, including a new swimming pool, event lawns, wellness center, and a redesigned eighteen-hole golf course. Country Club Memberships will be available to the community which are envisioned to provide exclusive access to social programming.",
  "Carlton Oaks will develop a dedicated driving range with covered hitting areas. Updated practice facilities for chipping and putting are also included.",
];

const popupImage = [
  null,
  "video",
  null,
  null,
  null,
  null,
  null,
  null,
  "COURTyard.jpg",
  null,
  null,
  "Architecture.jpg",
  null,
  "Pool.jpg",
  "DrivingRange.jpg",
];
let stage = 0;

const modalContent0 = (step, poptextfunc, poptext, popimage, func) => {
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
    if (popimage === "video") {
      poptextfunc();
    }
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
      <div
        className={`text-popup ${
          popimage ? "text-popup-image" : "text-popup-noimage"
        }`}
      >
        {/*   <div
              className="closebtn"
              onClick={popdown}
              style={{ cursor: "pointer" }}
            >
              <img src="/images/close.png" />
            </div> */}
        <div>{poptext}</div>
        {popimage && popimage !== "video" ? (
          <>
            <div style={{ marginTop: 15 }}>
              <img src={`/images/station5/${popimage}`} />
            </div>
          </>
        ) : null}
      </div>
      <div className="fullscreen-slide" style={{ cursor: "auto" }}>
        <div className="overlay-button-container">
          <div
            className="overlay-button"
            // onClick={() => console.log(func)}
            onClick={func}
            style={{
              bottom: 0,
              right: 0,
            }}
          />
        </div>

        <div className="sitePlan-container">
          <div className="sitePlan">
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "10%" }}
              onMouseEnter={(e) =>
                popup(
                  0,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  100,
                  70
                )
              }
              onMouseLeave={popdown}
            />

            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "77%" }}
              onMouseEnter={(e) =>
                popup(
                  1,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  100,
                  280
                )
              }
              onMouseLeave={popdown}
            />

            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "34%", left: "18%" }}
              onMouseEnter={(e) =>
                popup(
                  2,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  100,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "34%", left: "35%" }}
              onMouseEnter={(e) =>
                popup(
                  3,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  100,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "6%", left: "53%" }}
              onMouseEnter={(e) =>
                popup(
                  4,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -320,
                  0
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "-2%", left: "70%" }}
              onMouseEnter={(e) =>
                popup(
                  5,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -320,
                  0
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "-2%", left: "85%" }}
              onMouseEnter={(e) =>
                popup(
                  6,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -320,
                  0
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "82%", left: "58%" }}
              onMouseEnter={(e) =>
                popup(
                  7,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  100,
                  100
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "pointer", top: "60%", left: "88%" }}
              onMouseEnter={(e) =>
                popup(
                  8,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -460,
                  250
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall pulseHollow"
              style={{ cursor: "pointer", top: "54%", left: "72%" }}
              onMouseEnter={(e) =>
                popup(
                  9,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  70,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall pulseHollow"
              style={{ cursor: "pointer", top: "73%", left: "41%" }}
              onMouseEnter={(e) =>
                popup(
                  10,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  70,
                  70
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall pulseHollow"
              style={{ cursor: "pointer", top: "58%", left: "12%" }}
              onMouseEnter={(e) =>
                popup(
                  11,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  70,
                  70
                )
              }
              onMouseLeave={popdown}
            />

            <div
              className="siteplanBlockSmall pulseHollow"
              style={{ cursor: "pointer", top: "25%", left: "85%" }}
              onMouseEnter={(e) =>
                popup(
                  12,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -330,
                  100
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall pulseHollow"
              style={{ cursor: "pointer", top: "43%", left: "88%" }}
              onMouseEnter={(e) =>
                popup(
                  13,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -460,
                  100
                )
              }
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall pulseHollow"
              style={{ cursor: "pointer", top: "43%", left: "96%" }}
              onMouseEnter={(e) =>
                popup(
                  14,
                  e.target.getBoundingClientRect().left,
                  e.target.getBoundingClientRect().top,
                  -460,
                  100
                )
              }
              onMouseLeave={popdown}
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
const modalContent1 = (step, poptextfunc, poptext, popimage, func) => {
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
    if (popimage === "video") {
      poptextfunc();
    }
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
            bottom: "5vw",
            right: "5vw",
          }}
        />
      </div>

      <img
        style={{ height: "100%", cursor: "auto" }}
        src={`/images/station5/Station-5-1.jpg`}
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
      gsap.from(".pulseHollow", {
        duration: 1,
        scale: 0.7,
        css: {
          boxShadow: `0 0px 15px 5px #DB007C, inset 0 0px 15px 5px #DB007C`,
        },
        repeat: -1,
        yoyo: true,
        ease: "circ.inOut",
      });
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
    this.setState({ poptext: popupText[val], popimage: popupImage[val] });
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
    this.setState({ step: stage, modalContent: modalContent1 }, () => {
      console.log(this.state);
      gsap.to(obj, {
        opacity: 1,
        ease: "circ.inOut",
        duration: 0.3,
      });
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
              {this.state.modalContent(
                this.state.step,
                this.poptextfunc,
                this.state.poptext,
                this.state.popimage,
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
