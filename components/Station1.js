import React, { Component } from "react";
import gsap from "gsap";
import YouTube from "react-youtube";
let stage = 0;
class Station1 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    step: 0,
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
          <div className="center-content content">
            <YouTube
              videoId="P1m__bakTJ0"
              opts={{
                height: "400px",
                width: "800px",
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
              }}
              /*  onReady={this._onReady} */
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
export default Station1;
