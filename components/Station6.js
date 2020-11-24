import React, { Component } from "react";
import gsap from "gsap";
import Iframe from "react-iframe";
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
let stage = 0;
class Station6 extends Component {
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
        <div className="overlay-container3 zindex2 modal">
          <div className="center-content content" ref="modalcontent">
            <Iframe
              url="https://www.surveymonkey.com/r/HVVGFPB"
              width="80%"
              height="80%"
              id="myId"
              className="white"
              display="initial"
              position="relative"
            />
            <div>
              <div className="button transition" onClick={this.fadeIntro}>
                BACK GO LOBBY
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Station6;
