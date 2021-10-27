import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.servicesImage;
    const servicesText = this.props.data.servicesText;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="services">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Services"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Our Services</h2>
              <p>{servicesText}</p>
              <ul>
                  <li>• Mopping</li>
                  <li>• Vaccuming</li>
                  <li>• Dusting</li>
                  <li>• Sanitization</li>
                  <li>• Restocking</li>
              </ul>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
