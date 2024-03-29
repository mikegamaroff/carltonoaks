import React, { Component } from "react";
import gsap from "gsap";
import GolfVideo from "./GolfVideo";
import Exhibit2 from "./Exhibit2";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    step: 1,
  };

  fadeIntro = () => {
    gsap.to(".modal", {
      opacity: 0,
      ease: "none",
      duration: 1,
      onComplete: this.resetIntro,
    });
  };

  resetIntro = () => {
    gsap.to(".modal", {
      display: "none",
      ease: "none",
      duration: 0,
    });
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    return (
      <div>
        {this.state.step === 1 ? (
          <GolfVideo
            launch2={this.launch2}
            clearScene={this.props.clearScene}
            reset={this.props.reset}
            resetIntro={this.resetIntro}
            exhibit0={this.props.exhibit0}
            fadeInOut={this.props.fadeInOut}
            fadeOut={this.props.fadeOut}
          />
        ) : null}
        {this.state.step === 2 ? (
          <div>
            {console.log(this.fadeIntro)}
            <Exhibit2
              clearScene={this.props.clearScene}
              reset={this.props.reset}
              fadeIntro={this.fadeIntro}
              exhibit0={this.props.exhibit0}
              fadeInOut={this.props.fadeInOut}
              fadeOut={this.props.fadeOut}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Modal;
