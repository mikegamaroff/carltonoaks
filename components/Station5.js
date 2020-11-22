import React, { Component } from "react";
import gsap from "gsap";
const popupText = [
  "0. 85 homes are proposed for Residential West (Planning Area 1). Homes are detached and consistent with surrounding neighborhood.",
  "1. Video",
  "2. The new homes in Residential West (PA 1) will be at a lower grade than the existing homes to preserve privacy and long views of the mountains to the south.",
  "3. The new homes are divided into two gated neighborhoods on the western and northern portions of the property. The neighborhoods are designed to be an accessory to the golf course and will be linked to the Country Club and Resort through connective cart paths, providing seamless access between homes and recreation.",
  "4. 158 multi-family detached homes, designed to be compatible with the adjacent residential uses.",
  "5. The redesigned golf course utilizes native vegetation to reduce the amount of grass in need of irrigation from 132 acres to 66 acres while still maintaining a championship golf course.",
  "6. Sweeping views of the course will be enjoyed from the new Club & Resort courtyard.",
  "7. The Carlton Oaks Country Club and Resort provides public access to the new San Diego River trail through a new .04-acre public trailhead which will connect to the existing trails through Mast Park. SANDAG is proposing to construct a Class 1 bikeway along this alignment for the exclusive use of pedestrians and cyclists.",
  "8. The revitalized Carlton Oaks Country Club & Resort will serve as a modern welcoming place for longtime locals and visitors. The resort facilities include a 52-room boutique hotel with swimming pool, event lawns, wellness center, and dining. The new facilities are anticipated to attract more users than the existing banquet room and hotel, bolstering the local economy through event revenue, tourism, and property taxes.",
  "9. Existing ponds will be redesigned, and reshaped, and existing maintenance facilities will be moved out of the floodway where they currently sit.",
  "10. The redesigned golf course will be updated to improve the flow of drainage, which would reduce the amount of ponding that occurs on the site during rain events.",
  "11. The housing and resort architecture embody the elements of Santee’s history through a mixture of modern cottage, modern prairie, and contemporary Spanish styles.",
  "12. 15 acres of existing natural areas will be retained on site. Remaining out of play areas will be landscaped with native plants which require little to no maintenance.",
  "13. New community features will define the “sense of place” with amenities and activities for the entire family, including a new swimming pool, event lawns, wellness center, and a redesigned eighteen-hole golf course. Country Club Memberships will be available to the community which are envisioned to provide exclusive access to social programming.",
  "14. Carlton Oaks would develop a dedicated driving range with covered hitting areas. Updated practice facilities for chipping and putting are also included.",
];

const popupImage = [
  null,
  null,
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
  let i = 0;

  const popup = (val, x, y) => {
    poptextfunc(val);
    gsap.fromTo(
      ".text-popup",
      { scale: 0, display: "none", x: x, y: y },
      {
        scale: 1,
        display: "block",
        ease: "power.out",
        duration: 0.2,
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
          <div
            className={`text-popup ${
              popimage ? "text-popup-image" : "text-popup-noimage"
            }`}
          >
            {/*   <div
              className="closebtn"
              onClick={popdown}
              style={{ cursor: "help" }}
            >
              <img src="/images/close.png" />
            </div> */}
            <div>{poptext}</div>
            {popimage ? (
              <>
                {" "}
                <div style={{ marginTop: 15 }}>
                  <img src={`/images/station5/${popimage}`} />
                </div>
              </>
            ) : null}
          </div>

          <div className="sitePlan">
            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "10%" }}
              onMouseEnter={() => popup(0, 130, 30)}
              onMouseLeave={popdown}
            />

            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "77%" }}
              onMouseEnter={() => popup(1, 130, 450)}
              onMouseLeave={popdown}
            />

            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "34%", left: "18%" }}
              onMouseEnter={() => popup(2, 370, 300)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "34%", left: "35%" }}
              onMouseEnter={() => popup(3, 560, 270)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "6%", left: "53%" }}
              onMouseEnter={() => popup(4, 300, 50)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "-2%", left: "70%" }}
              onMouseEnter={() => popup(5, 500, 50)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "-2%", left: "85%" }}
              onMouseEnter={() => popup(6, 680, 50)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "82%", left: "58%" }}
              onMouseEnter={() => popup(7, 850, 500)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlock"
              style={{ cursor: "help", top: "60%", left: "88%" }}
              onMouseEnter={() => popup(8, 570, 200)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall"
              style={{ cursor: "help", top: "51%", left: "70%" }}
              onMouseEnter={() => popup(9, 500, 320)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall"
              style={{ cursor: "help", top: "70%", left: "39%" }}
              onMouseEnter={() => popup(10, 530, 500)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall"
              style={{ cursor: "help", top: "55%", left: "10%" }}
              onMouseEnter={() => popup(11, 130, 450)}
              onMouseLeave={popdown}
            />

            <div
              className="siteplanBlockSmall"
              style={{ cursor: "help", top: "22%", left: "83%" }}
              onMouseEnter={() => popup(12, 650, 150)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall"
              style={{ cursor: "help", top: "40%", left: "86%" }}
              onMouseEnter={() => popup(13, 550, 150)}
              onMouseLeave={popdown}
            />
            <div
              className="siteplanBlockSmall"
              style={{ cursor: "help", top: "40%", left: "93%" }}
              onMouseEnter={() => popup(14, 650, 150)}
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
