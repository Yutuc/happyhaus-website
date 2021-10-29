import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";
import emailjs from 'emailjs-com'
import Result from "./Components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      fromEmail: "",
      phoneNumber: "",
      startDate: "",
      position: "Cleaner",
      availability: "Day",
      jobApplicationSubmited: false,
      data: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);

    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
    this.onChangeStartDate = this.onChangeStartDate.bind(this)
    this.onChangePosition = this.onChangePosition.bind(this)
    this.onChangeAvailability = this.onChangeAvailability.bind(this)
    this.mainState = this.mainState.bind(this)
    this.renderJobApplication = this.renderJobApplication.bind(this)
    this.submitJobApplication = this.submitJobApplication.bind(this)
  }

  getData() {
    $.ajax({
      url: "./data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getData();
  }

  submitJobApplication() {
    emailjs.send("service_sq65l8d", "template_0g4xhcm", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fromEmail: this.state.fromEmail,
      phoneNumber: this.state.phoneNumber,
      startDate: this.state.startDate,
      position: this.state.position,
      availability: this.state.availability
    }
    , "user_EVG4whE5zfJ3KxDiS87DL");
    
    this.setState({
      jobApplicationSubmited: true,
    })
  }

  mainState() {
    return this.state;
  }

  onChangeFirstName(firstName) {
    this.setState({
      firstName: firstName
    });
  }

  onChangeLastName(lastName) {
    this.setState({
      lastName: lastName
    });
  }

  onChangeEmail(fromEmail) {
    this.setState({
      fromEmail: fromEmail
    });
  }

  onChangePhoneNumber(phoneNumber) {
    this.setState({
      phoneNumber: phoneNumber
    });
  }

  onChangeStartDate(startDate) {
    this.setState({
      startDate: startDate
    });
  }

  onChangePosition(position) {
    this.setState({
      position: position.target.value
    });
  }

  onChangeAvailability(availability) {
    this.setState({
      availability: availability.target.value
    });
  }

  renderJobApplication() {
    if(!this.state.jobApplicationSubmited) {
      return (
        <Careers 
          data={this.state.data.main} 
          submitJobApplication={this.submitJobApplication}
          onChangeFirstName={this.onChangeFirstName}
          onChangeLastName={this.onChangeLastName}
          onChangeEmail={this.onChangeEmail}
          onChangePhoneNumber={this.onChangePhoneNumber}
          onChangeStartDate={this.onChangeStartDate}
          onChangePosition={this.onChangePosition}
          onChangeAvailability={this.onChangeAvailability}
          mainState={this.mainState}
        />
      )
    } else {
        return (
          <Result data={this.state.data.main} />
        )
    }
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <Services data={this.state.data.main} />
        <About data={this.state.data.main} />
        {this.renderJobApplication()}
        <Contact data={this.state.data.main} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
