import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.aboutImage;
    const aboutText = this.props.data.aboutText;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="About"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>
              <p>{aboutText}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
