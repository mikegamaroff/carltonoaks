import React, { Component } from "react";
import gsap from "gsap";
const subcontentText0 = <></>;
const subcontentText1 =
  "Minimum wage has increased $1 per hour each year over the last 5 years. It will reach $15 per hour in 2021. We value our employees and understand the need for change. Yet, increasing costs are a challenge.";
/* const subcontentText2 =
  "Audobon International estimates that the average American golf course uses 312,000 gallons of water per day.";
 */ const subcontentText2 = (
  <div className="center-vertical">
    <div className="subcontent-image">
      <img src="/images/water.png" />
    </div>
    <div>
      The redesigned Carlton Oaks Golf Course would reduce water usage by
      approximately 56%, saving 97 million gallons of water per year.
    </div>
  </div>
);
const subcontentText3 =
  "Carlton Oaks currently utilizes an outdated, inefficient block irrigation system.";
const subcontentText4 = (
  <div className="center-vertical">
    <div className="subcontent-image">
      <img src="/images/faucet.png" />
    </div>
    <div>
      The redesigned course reduces turf irrigation to 66 acres, and will
      install a modern irrigation system to maximize efficiency.
    </div>
  </div>
);
let stage = 0;
const modalContent1 = {
  content: (
    <div>
      {/*   <h1 style={{ marginBottom: 30 }}>
        Carlton Oaks isn't immune to market constraints.
      </h1> */}
      <div className="body-lg">
        <p>
          Escalating operational, labor and maintenance costs have made it
          increasingly difficult to maintain the course at the level that was
          once possible and at the level players expect.
        </p>
        <p>
          These factors have led us to explore ways to keep the course viable.
        </p>
      </div>
    </div>
  ),
  buttonText: "LEARN MORE",
};
const modalContent2 = {
  content: (
    <div>
      <div className="body-lg">
        <p>
          The redesign of the course and improvements to the irrigation system
          will result in reduced operations costs.
        </p>
        <p>
          The new homeowners will activate the facilities year-round, further
          assuring the long-term preservation of the golf course.
        </p>
      </div>
    </div>
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
        ".whitePanel",
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
    this.fadeInOut(".subcontent", 4);

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
        delay: 4,
        ease: "circ.inOut",
        duration: 1,
        onComplete: this.seq4,
      }
    );

    gsap.to(
      ".asterisk",

      {
        display: "block",
        opacity: 1,
        y: 0,
        delay: 4,
        ease: "circ.inOut",
        duration: 1,
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
    this.fadeInOut(".subcontent", 4);
    gsap.to(
      ".asterisk",

      {
        display: "none",
        opacity: 0,
        y: 0,
        delay: 4,
        ease: "circ.inOut",
        duration: 1,
      }
    );
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
        delay: 4,
        ease: "circ.inOut",
        duration: 1,
        onComplete: this.seq5,
      }
    );
  };
  seq5 = () => {
    this.fadeInOut(".subcontent", 4);
    gsap.to(".infoBlockAnim3", {
      opacity: 1,
      delay: 4,
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
      delay: 4,
    });
    gsap.to(".grid-top", {
      opacity: 0,
      display: "none",
      ease: "circ.inOut",
      duration: 1,
      delay: 3.5,
    });
    gsap.to(".whitePanel", {
      css: {
        maxWidth: "1100px",
        width: "75%",
        height: "60%",
        top: "50%",
      },
      delay: 4,
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
    this.setState({ step: 0 }, () => {
      gsap.to(
        ".exhibit2",

        {
          scale: 0,
          display: "none",
          ease: "circ.inOut",
          duration: 1,
          onComplete: this.props.exhibit0,
        }
      );
    });
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
        <div className="overlay-container zindex2 exhibit2" id="modal">
          <div>
            <div className="infoGraphic-grid" style={{ width: "90%" }}>
              <div className="grid-top">Did you know?</div>
              <div className="infoBlock infoBlockAnim1 ">
                <div className="infoText">
                  Labor makes
                  <br />
                  up roughly
                </div>
                <div className="infoPerc">40%</div>
                <div className="infoText">
                  of Carlton Oaks'
                  <br />
                  operating budget
                </div>
              </div>
              <div className="infoBlock infoBlockAnim2">
                <div className="infoText">
                  The average American
                  <br />
                  golf course uses
                </div>
                <div className="infoPerc">312k</div>
                <div className="infoText">gallons of water each day*</div>
              </div>
              <div className="infoBlock infoBlockAnim3">
                <div className="infoText">
                  Carlton Oaks
                  <br />
                  currently has
                </div>
                <div className="infoPerc">132</div>
                <div className="infoText">acres of turf irrigation</div>
              </div>
            </div>
          </div>
          <div className="overlay-content whitePanel">
            <div className="asterisk">
              * Statistic courtesy of Audubon International.
            </div>
            <div className="subcontent">
              {eval(`subcontentText${this.state.step}`)}
            </div>
            <div className="center-content content">
              {this.state.modalContent.content}
              <div>
                <div
                  className="button transition"
                  onClick={this.state.step > 1 ? this.fadeIntro : this.seq1}
                >
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
