import React, { Component } from "react";
import gsap from "gsap";
const subcontentText0 = <></>;
const subcontentText1 =
  "Minimum wage has increased roughly $1 per year over the last 5 years. We value our employees and understand the need for change. Yet, increasing costs are a challenge.";
const subcontentText2 =
  "Audobon International estimates that the average American golf course uses 312,000 gallons of water per day.";
const subcontentText3 =
  "The redesigned course would reduce water usage to approximately 205,000 gallons per day, saving 97 million gallons of water per year.";
const subcontentText4 =
  "Carlton Oaks currently utilizes a 30-year old block irrigation system.";

let stage = 0;
const modalContent1 = {
  content: (
    <>
      <h1 style={{ marginBottom: 30 }}>
        Carlton Oaks isn't immune to market constraints.
      </h1>
      <div className="body-lg">
        Escalating operation, labor and maintenance costs have made it
        increasingly difficult to maintain the course at the level that was once
        possible and at the level players expect.
      </div>
    </>
  ),
  buttonText: "LEARN MORE",
};
const modalContent2 = {
  content: (
    <>
      <div className="body-lg">
        <p>
          The redesign of the course and improvements to the irrigation system
          will result in reduced operations costs.
        </p>
        <p>
          Further, the new homeowners will provide economic vitality by
          activation the facilities year-round, further assuring the long-term
          preservation of the golf course.
        </p>
      </div>
    </>
  ),
  buttonText: "BACK TO LOBBY",
};

class Exhibit2 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    step: 0,
    modalContent: modalContent1,
  };

  clearScene = () => {
    stage = 1;
    this.setState({ step: this.state.step + 1 });
    this.props.clearScene();
  };
  componentDidMount() {
    if (this.state.step === 0) {
      gsap.fromTo(
        ".exhibit2",
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
    gsap.to(".content", {
      opacity: 0,
      display: "none",
      ease: "circ.inOut",
      duration: 1,
      onComplete: this.seq2,
    });
    gsap.to(".whitePanel", {
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
  };
  seq2 = () => {
    gsap.to(".subcontent", {
      opacity: 1,
      display: "block",
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
      onComplete: this.seq6,
    });
  };
  seq6 = () => {
    this.setState({ modalContent: modalContent2 });

    gsap.to(".content", {
      opacity: 1,
      display: "block",
      ease: "circ.inOut",
      duration: 1,
    });
  };
  render() {
    return (
      <div>
        <div className="overlay-container zindex2 exhibit2" id="modal">
          <div className="infoGraphic-grid" style={{ width: "90%" }}>
            <div className="infoBlock infoBlockAnim1">
              <div className="infoText">Labor makes up</div>
              <div className="infoPerc">40%</div>
              <div className="infoText">of Carlton Oaks' operating budget</div>
            </div>
            <div className="infoBlock infoBlockAnim2">
              <div className="infoText">Carlton Oaks uses approximately</div>
              <div className="infoPerc">470k</div>
              <div className="infoText">gallons of water each day.</div>
            </div>
            <div className="infoBlock infoBlockAnim3">
              <div className="infoText">The current course has</div>
              <div className="infoPerc">132</div>
              <div className="infoText">acres of turn irrigation</div>
            </div>
          </div>
          <div className="overlay-content whitePanel">
            <div className="subcontent">
              {eval(`subcontentText${this.state.step}`)}
            </div>
            <div className="center-content content">
              {this.state.modalContent.content}
              <div className="center-content">
                <div className="button transition" onClick={this.seq1}>
                  {this.state.modalContent.buttonText}
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
  }
}
export default Exhibit2;
