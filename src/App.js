import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Careers from "./Components/Careers";
import Quote from "./Components/Quote";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import { makeStyles } from '@material-ui/core/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      startDate: "",
      position: "",
      availability: "",
      jobApplication: {},
      data: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
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

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <Services data={this.state.data.main} />
        <About data={this.state.data.main} />
        <Careers data={this.state.data.main} />
        <Contact data={this.state.data.main} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
