import React, { Component } from "react";
import Fade from "react-reveal";

class Result extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data) return null;
    
    const profilepic = "images/" + this.props.data.resultImage;

    return (
      <section id="careers">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Result"
              />
            </div>
            <div className="nine columns main-col">
              <h2></h2>
              <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Thank you for applying to Hapi Haus Cleaning Services. Your information have been sent to our email and we will be getting in touch with you as soon as we can.</h2>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Result;
