import React, { Component } from "react";
import Particles from "react-particles-js";
import { ReactComponent as YourSvg } from "../assets/image.svg";
import parking from "../assets/smart-park.svg";
import chatbot from "../assets/chatbots.svg";
import greenhouse from "../assets/greenhouse.svg";
import mobile_app from "../assets/mobile_app.svg";
import github from "../assets/icons8-github.svg";
import linkedin from "../assets/linkedin-icon.svg";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <div class="patterns">
            <h2 adjustsFontSizeToFit className="welcome-msg">
              Hey, What's up? <span className="wave">👋🏻</span>
            </h2>
            <svg width="70%" style={{ height: 200 }}>
              <defs>
                <style>
                  @import url("https://fonts.googleapis.com/css?
                  family=Lora:400,400i,700,700i");
                </style>
              </defs>

              <text className="iam" text-anchor="start" x="5%" y="25%">
                I'm&nbsp;
              </text>
              <text className="myName" x="33.5%" y="25%" text-anchor="middle">
                Balaganesh
              </text>
              <text className="point1" x="8%" y="50%" text-anchor="start">
                ◦ '15 : Completed my Schooling with 98%
              </text>
              <text className="point2" x="8%" y="68%" text-anchor="start">
                ◦ '19 : Completed my Diploma from PSC PTC with 98.9%
              </text>
              <text className="point3" x="8%" y="86%" text-anchor="start">
                ◦ '21 : Doing my Bachelors in E&C Engineering at PSG CT
              </text>
            </svg>
            <YourSvg height="20vw" width="25vw" />
          </div>
          <svg width="70%" style={{ height: 180 }} className="Project-svg">
            <text className="myName" x="23%" y="52%" text-anchor="middle">
              Experience
            </text>
            <text className="point3" x="8%" y="76%" text-anchor="start">
              ◦ Summer Intern at Standard Chartered GBS (May'21)
            </text>
            <text className="point3" x="8%" y="93%" text-anchor="start">
              ◦ Summer Intern at Naren Electronics (May'17)
            </text>
          </svg>
          <svg width="70%" style={{ height: 180 }} className="Project-svg">
            <text className="myName" x="20%" y="80%" text-anchor="middle">
              Projects
            </text>
          </svg>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={mobile_app}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      ANGST – AN APP TO HELP PEOPLE WITH ANXIETY
                    </h5>
                    <p class="card-text">
                      Angst is a simple to use app which has a set of exercises,
                      readings, podcasts to help people calm down during their
                      anxiety attack. This app was developed using Dart and
                      Flutter. The IDE used was Android Studio. It helps people
                      with anxiety to have a better understanding of their
                      condition and to combat with it.
                    </p>
                  </div>

                  <div class="card-body">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.trouvaille.angst"
                      class="card-link"
                    >
                      <button
                        className="See-project-buttons"
                        type="button"
                        class="btn btn-secondary btn-lg btn-block"
                      >
                        See Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <parking svg height="20vw" width="25vw" />
                  <img
                    class="card-img-top"
                    src={parking}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">SMART PARKING MANAGEMENT SYSTEM</h5>
                    <p class="card-text">
                      Parking and space management are some of the major issues
                      faced by all the developing countries across the globe.
                      Catering this problem our “Smart Parking Management
                      System” will help the busy commuters to block a parking
                      spot or drive-in directly with minimal interaction and
                      waiting time.An android app was developed for assisting.
                    </p>
                  </div>

                  <div class="card-body">
                    <a
                      href="https://github.com/BalaganeshSomu/Smart-Parking-Management-System"
                      class="card-link"
                    >
                      <button
                        className="See-project-buttons"
                        type="button"
                        class="btn btn-secondary btn-lg btn-block"
                      >
                        See Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={chatbot}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">CHATBOT WITH PYTHON</h5>
                    <p class="card-text">
                      Both tfidf-vectorizer and cosine similarity were not
                      imported from sklearn.(Instead written from scratch) A
                      Chatbot or bot – is a computer program that simulates a
                      natural human conversation. TfidfVectorizer - Transforms
                      text to feature vectors that can be used as input to
                      estimator. Cosine similarity is a measure of similarity
                      between two non-zero vectors of an inner product space
                    </p>
                  </div>

                  <div class="card-body">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.trouvaille.angst"
                      class="card-link"
                    >
                      <button
                        className="See-project-buttons"
                        type="button"
                        class="btn btn-secondary btn-lg btn-block"
                      >
                        See Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={greenhouse}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      HYDROPONICS - GREENHOUSE AUTOMATION
                    </h5>
                    <p class="card-text">
                      Greenhouse Environment Control System forms an important
                      part of the agriculture and horticulture sectors in our
                      country as they can be used to grow plants under
                      controlled climatic conditions for optimum produce.
                      Appropriate environmental conditions are necessary for
                      optimum plant growth, improved crop yields, and efficient
                      use of water and other resources.
                    </p>
                  </div>

                  <div class="card-body">
                    <a
                      href="https://github.com/BalaganeshSomu/Greenhouse-Environmental-Control-System"
                      class="card-link"
                    >
                      <button
                        className="See-project-buttons"
                        type="button"
                        class="btn btn-secondary btn-lg btn-block"
                      >
                        See Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg width="70%" style={{ height: 180 }} className="Project-svg">
            <text className="myName" x="8%" y="90%" text-anchor="start">
              Some thing that I live by
            </text>
          </svg>
          <h2 class="home-title">
            <span>Don't ever, for any reason, do anything </span>
            <span> to anyone for any reason ever, no matter</span>
            <span>
              what, no matter where, or who, or who you are with,or where you
            </span>
            <span>are going, or where you've been...</span>
            <span>ever, for any reason whatsoever...</span>
            <span>- Michael Scott</span>
          </h2>

          <svg width="70%" style={{ height: 180 }} className="Project-svg">
            <text className="myName" x="8%" y="80%" text-anchor="start">
              Connect with me!
            </text>
          </svg>

          <div class="container" className="container-cwm">
            <div class="row">
              <div class="col" className="column-cwm">
                <a href="https://www.linkedin.com/in/balaganesh-somu-763179197/">
                  <h3 className="text-cwm">LINKEDIN </h3>
                </a>
              </div>
              <div class="col">
                <a href="https://github.com/BalaganeshSomu">
                  <h3 className="text-cwm"> GITHUB</h3>
                </a>
              </div>
            </div>
          </div>

          <Particles
            className="particles"
            params={{
              particles: {
                color: {
                  opacity: 0.1,
                  value: "#A8A7A7",
                },
                line_linked: {
                  opacity: 0.3,
                  color: {
                    value: "#A8A7A7",
                  },
                },
                number: {
                  value: 50,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 0.8,
                  straight: false,
                },
                size: {
                  value: 10,
                },
              },

              background: {
                color: {
                  value: "#000000",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
