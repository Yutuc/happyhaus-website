import React, { Component } from "react";
import Fade from "react-reveal";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AvailabilityRadioButtons from "./AvailabilityRadioButtons";
import PositionRadioButtons from "./PositionRadioButtons";

class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      applyButtonPressed: false
    }
}

  missingInputWarning = () => {
    if(this.state.applyButtonPressed && (this.props.mainState().firstName === "" || this.props.mainState().lastName === "" ||  this.props.mainState().fromEmail === "" || this.props.mainState().phoneNumber === "" || this.props.mainState().startDate === "")) {
      return (
        <div style={{marginTop: "1rem", marginBottom: "1rem", fontSize: 18, textAlign: 'left', color: "black"}}>
          Failed to submit job application. Please fill in every field then try again.
        </div>
      )
    }
  }

  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.careerImage;

    const useStyles = makeStyles((theme) => ({
        finish: {
          padding: theme.spacing(.75),
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          backgroundColor: "#07080fdc",
          borderRadius: "10%",
          fontWeight: "700",
        },
        largeRadioButton: {
            "& svg": {
                width: "1em",
                height: "1em"
            }
        }
    }));

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
      <section id="careers">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Career"
              />
            </div>
            <div className="nine columns main-col">
              <h2 class="form-headers">Complete the form below to apply for a position with us</h2>
              <Grid container direction="row" justifyContent="center">
                    <Grid item xs={12}>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                            <form id="input-box" noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <TextField onChange={(event) => {
                                this.props.onChangeFirstName(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">First name</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField onChange={(event) => {
                                this.props.onChangeLastName(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">Last name</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField onChange={(event) => {
                                this.props.onChangeEmail(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">Email</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField onChange={(event) => {
                                this.props.onChangePhoneNumber(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">Phone number</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField onChange={(event) => {
                                this.props.onChangeStartDate(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">When can you start? (MM/DD/YYYY)</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <h2 class="form-headers">Position</h2>
                <PositionRadioButtons onChangePosition={this.props.onChangePosition}/>
                <h2 class="form-headers">Availability</h2>
                <AvailabilityRadioButtons onChangeAvailability={this.props.onChangeAvailability}/>
                {this.missingInputWarning()}
                <Button style={{textTransform: 'none', float: 'right'}} onClick={() => {
                        this.setState({
                          applyButtonPressed: true
                        });
                        if(this.props.mainState().firstName !== "" && this.props.mainState().lastName !== "" && this.props.mainState().fromEmail !== "" && this.props.mainState().phoneNumber !== "" && this.props.mainState().startDate !== "") {
                            this.props.submitJobApplication();
                        }}}>
                        <Paper style={{fontSize: 25, color: 'white', backgroundColor: "#25274D", padding: .75, borderRadius: "7%", fontWeight: "700"}}>&#160;&#160;&#160;Apply&#160;&#160;&#160;</Paper>
                </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
