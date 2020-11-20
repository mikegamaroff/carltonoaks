import React, { Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Parallax from "parallax-js";
import gsap from "gsap";
import Modal from "../components/Modal";
import Exhibit2 from "../components/Exhibit2";
import Station3 from "../components/Station3";
import Station4 from "../components/Station4";
import Station5 from "../components/Station5";
import GolfVideo from "../components/GolfVideo";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    topslide: 0,
    bottomslide: 1,
    currentlyLoading: null,
    key: "(EN]KP}pzz]avzqE96XnW?AtuZju9",
    validated: false,
    exhibit: 0,
    station: 0,
    cleared: false,
  };
  exhibit0 = () => {
    this.setState({ exhibit: 0, station: 0 });
  };
  exhibit1 = () => {
    this.setState({ exhibit: 1 });
  };
  exhibit2 = () => {
    this.setState({ exhibit: 2 });
  };
  launchStation3 = () => {
    this.setState({ station: 3 });
  };
  launchStation4 = () => {
    this.setState({ station: 4 });
  };
  launchStation5 = () => {
    this.setState({ station: 5 });
  };
  fadeInOut = (obj) => {
    gsap.to(obj, {
      opacity: 0,
      ease: "circ.inOut",
      duration: 0.3,
      onComplete: this.fadeOut,
      onCompleteParams: [obj],
    });
  };
  fadeOut = (obj) => {
    gsap.to(obj, {
      opacity: 1,
      ease: "circ.inOut",
      duration: 0.3,
    });
  };

  componentDidMount() {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    });
    gsap.from(".pulse", {
      duration: 1,
      scale: 0.7,
      css: {
        boxShadow: `0 0px 15px 5px #DB007C, inset 0 0px 15px 5px #DB007C`,
      },
      repeat: -1,
      yoyo: true,
      ease: "circ.inOut",
    });
  }

  onProgress(e) {
    //  console.log(e.timeStamp);
  }

  reset = () => {
    this.setState({ cleared: false }, () => {
      var scene = document.getElementById("scene");
      var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
      });
      gsap.from(".pulse", {
        duration: 1,
        scale: 0.7,
        css: {
          boxShadow: `0 0px 15px 5px #DB007C, inset 0 0px 15px 5px #DB007C`,
        },
        repeat: -1,
        yoyo: true,
        ease: "circ.inOut",
      });
    });
  };

  clearScene = () => {
    this.setState({ cleared: !this.state.cleared });
  };

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Carlton Oaks</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {/*     <div className="overlay-container">
            <GolfVideo />
          </div>*/}
          {this.state.exhibit === 1 ? (
            <GolfVideo
              clearScene={this.clearScene}
              reset={this.reset}
              fadeIntro={this.fadeIntro}
              exhibit0={this.exhibit0}
              exhibit2={this.exhibit2}
              fadeInOut={this.fadeInOut}
              fadeOut={this.fadeOut}
            />
          ) : null}
          {this.state.exhibit === 2 ? (
            <Exhibit2
              clearScene={this.clearScene}
              reset={this.reset}
              exhibit0={this.exhibit0}
              fadeInOut={this.fadeInOut}
              fadeOut={this.fadeOut}
            />
          ) : null}
          {this.state.station === 3 ? (
            <Station3
              clearScene={this.clearScene}
              reset={this.reset}
              exhibit0={this.exhibit0}
              fadeInOut={this.fadeInOut}
              fadeOut={this.fadeOut}
            />
          ) : null}
          {this.state.station === 4 ? (
            <>
              <Station4
                clearScene={this.clearScene}
                reset={this.reset}
                exhibit0={this.exhibit0}
                fadeInOut={this.fadeInOut}
                fadeOut={this.fadeOut}
              />
            </>
          ) : null}
          {this.state.station === 5 ? (
            <>
              <Station5
                clearScene={this.clearScene}
                reset={this.reset}
                exhibit0={this.exhibit0}
                fadeInOut={this.fadeInOut}
                fadeOut={this.fadeOut}
              />
            </>
          ) : null}
          {!this.state.cleared ? (
            <div className="roomContainer">
              <div className="sceneContainer">
                <div>
                  <div
                    data-pointer-events="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      margin: "auto",
                    }}
                    id="scene"
                    data-limit-x="false"
                    /*    data-limit-y="0" */
                    data-scalar-x="20"
                    data-scalar-y="5"
                    data-friction-x=".1"
                    data-origin-x=".5"
                  >
                    {/*     <div style={{ marginTop: "0px" }} data-depth="0">
                <img
                  src="images/background.jpg"
                  style={{
                    width: "100%",
                  }}
                />
              </div> */}

                    <div data-depth="0.5" style={{}}>
                      <img
                        className="disabled"
                        src="/images/empty.png"
                        style={{
                          width: "100%",
                          transform: "translateY(676%)",
                        }}
                      />
                    </div>
                    <div
                      /* data-pointer-events="all" */ data-depth="0.4"
                      style={{}}
                    >
                      <img
                        className="disabled"
                        /*  onClick={() => console.log("fuck")} */
                        src="/images/floor_01.jpg"
                        style={{
                          width: "calc(100% + 20px)",
                          transform: "translate(-20px,664%)",
                        }}
                      />
                    </div>

                    <div data-depth="0.5" style={{}}>
                      <img
                        className="disabled"
                        src="/images/floor_01b.jpg"
                        style={{
                          width: "calc(100% + 20px)",
                          transform: "translate(-20px,384%)",
                        }}
                      />
                    </div>

                    <div style={{ marginTop: "0px" }} data-depth="0.1">
                      <img
                        className="disabled"
                        src="/images/golfClub.jpg"
                        style={{
                          width: "50%",

                          transform: "translate(75%, 25%)",
                        }}
                      />
                    </div>
                    <div style={{ marginTop: "0px" }} data-depth="0.4">
                      <img
                        className="disabled"
                        src="/images/floor_02.jpg"
                        style={{
                          width: "100%",
                          transform: "translateY(718%)",
                        }}
                      />
                    </div>
                    <div style={{ marginTop: "0px" }} data-depth="0.1">
                      <img
                        className="disabled"
                        src="/images/ceiling.jpg"
                        style={{
                          width: "100%",

                          transform: "translateY(0%)",
                        }}
                      />
                    </div>
                    <div style={{ marginTop: "0px" }} data-depth="0.3">
                      <img
                        className="disabled"
                        src="/images/floor_03.jpg"
                        style={{
                          width: "100%",
                          transform: "translateY(1248%)",
                        }}
                      />
                    </div>

                    <div style={{ marginTop: "0px" }} data-depth="0.2">
                      <img
                        className="disabled"
                        src="/images/backWall.png"
                        style={{
                          width: "100%",
                          transform: "translateY(75%)",
                        }}
                      />
                    </div>
                    <div style={{ marginTop: "0px" }} data-depth="0.3">
                      <img
                        className="disabled"
                        src="/images/middle.png"
                        style={{
                          width: "100%",
                          transform: "translateY(50%)",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        marginTop: "0px",
                        position: "absolute",
                      }}
                      data-depth="0.4"
                    >
                      <img
                        className="disabled"
                        src="/images/front.png"
                        style={{
                          width: "100%",
                          transform: "translateY(40%)",
                        }}
                      />

                      {/*            <div
                        className="imacButton"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "94%",
                          left: "52.3%",
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={() => console.log("fuck")}
                      >
                        <div className="pulse" />
                      </div> */}

                      <div
                        className="imacButton"
                        style={{
                          id: "golf",
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "92%",
                          left: "26.3%",
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={this.exhibit1}
                      >
                        <div className="pulse" />
                      </div>
                      <div
                        className="imacButton"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "80%",
                          left: "40%",
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={this.exhibit2}
                      >
                        <div className="pulse" />
                      </div>

                      <div
                        className="imacButton"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "92%",
                          left: "53%",
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={this.launchStation3}
                      >
                        <div className="pulse" />
                      </div>
                      <div
                        className="imacButton"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "90%",
                          left: "63%",
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={this.launchStation4}
                      >
                        <div className="pulse" />
                      </div>
                      <div
                        className="imacButton"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "90%",
                          left: "80%",
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={this.launchStation5}
                      >
                        <div className="pulse" />
                      </div>
                    </div>
                    {/*           <div
                      style={{
                        marginTop: "0px",
                        position: "absolute",
                      }}
                      data-depth="0.3"
                    >
                      <div
                        className="imacButton"
                        style={{
                          transform: "translateY(50%)",
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "127%",
                          left: "40%",
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={this.exhibit2}
                      >
                        <div className="pulse" />
                      </div>
                    </div>
 */}
                    <div
                      className="disabled"
                      style={{ marginTop: "0px" }}
                      data-depth="0.7"
                    >
                      <img
                        src="images/lamp.png"
                        style={{
                          width: "120%",
                          transform: "translateY(30%)",
                        }}
                      />
                    </div>

                    <div className="disabled" data-depth="0.5" style={{}}>
                      <img
                        src="images/empty.png"
                        style={{
                          width: "100%",
                          transform: "translateY(676%)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </main>
      </div>
    );
  }
}
export default Home;
