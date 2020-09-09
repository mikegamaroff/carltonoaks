import React, { Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Parallax from "parallax-js";

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
  };

  componentDidMount() {
    var scene = document.getElementById("scene");

    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className="roomContainer">
            <div className="sceneContainer">
              <div>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                  }}
                  id="scene"
                  data-relative-input="true"
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
                      src="images/empty.png"
                      style={{
                        width: "100%",
                        transform: "translateY(676%)",
                      }}
                    />
                  </div>
                  <div data-depth="0.4" style={{}}>
                    <img
                      src="images/floor_01.jpg"
                      style={{
                        width: "calc(100% + 20px)",
                        transform: "translate(-20px,664%)",
                      }}
                    />
                  </div>
                  <div data-depth="0.5" style={{}}>
                    <img
                      src="images/floor_01b.jpg"
                      style={{
                        width: "calc(100% + 20px)",
                        transform: "translate(-20px,384%)",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "0px" }} data-depth="0.1">
                    <img
                      src="images/golfClub.jpg"
                      style={{
                        width: "40%",

                        transform: "translate(75%, 35%)",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }} data-depth="0.4">
                    <img
                      src="images/floor_02.jpg"
                      style={{
                        width: "100%",
                        transform: "translateY(718%)",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }} data-depth="0.1">
                    <img
                      src="images/ceiling.jpg"
                      style={{
                        width: "100%",

                        transform: "translateY(0%)",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }} data-depth="0.3">
                    <img
                      src="images/floor_03.jpg"
                      style={{
                        width: "100%",
                        transform: "translateY(1248%)",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "0px" }} data-depth="0.2">
                    <img
                      src="images/backWall.png"
                      style={{
                        width: "100%",
                        transform: "translateY(75%)",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }} data-depth="0.3">
                    <img
                      src="images/middle.png"
                      style={{
                        width: "100%",
                        transform: "translateY(50%)",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "0px" }} data-depth="0.4">
                    <img
                      src="images/front.png"
                      style={{
                        width: "100%",
                        transform: "translateY(40%)",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }} data-depth="0.7">
                    <img
                      src="images/lamp.png"
                      style={{
                        width: "100%",
                        transform: "translateY(40%);",
                      }}
                    />
                  </div>
                  <div data-depth="0.5" style={{}}>
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
        </main>
      </div>
    );
  }
}
export default Home;
