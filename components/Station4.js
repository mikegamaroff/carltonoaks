import React, { Component } from "react";
import gsap from "gsap";

let stage = 0;
const modalContent0 = () => {
  return (
    <div>
      <div className="body-lg">
        <h1 style={{ marginBottom: 30 }}>
          The land use planning process can be complicated.
        </h1>
        <p>
          By sharing the process and prividing meaningful opportunities to
          provide feedback, we're optimistic this can be a positive and
          productive experience for all of us.
        </p>
      </div>
    </div>
  );
};

const modalContent1 = (step, func) => {
  console.log(step);
  return (
    <div onClick={func}>
      <img
        className="fullscreen-slide"
        src={`/images/station4/Station-4-${step}.jpg`}
      />
    </div>
  );
};

const modalContent2 = () => {
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
        <div className="overlay-container zindex2 modal">
          <div
            className={
              this.state.step === 1
                ? "overlay-full whitePanel"
                : "overlay-content whitePanel"
            }
          >
            <div className="center-content content" ref="modalcontent">
              {eval(`modalContent${this.state.step}`)(
                this.state.step,
                this.seq1
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
export default Station4;
