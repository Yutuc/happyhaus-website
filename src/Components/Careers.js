import React, { Component } from "react";
import Fade from "react-reveal";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, RadioGroup } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import AvailabilityRadioButtons from "./AvailabilityRadioButtons";
import PositionRadioButtons from "./PositionRadioButtons";

class About extends Component {
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

    const styles = {
        size: {
          width: 40,
          height: 40,
        },
      };

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
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                                <TextField onChange={(event) => {
                                // props.onChangeName(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">First name</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">Last name</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">Email</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">Phone number</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left', backgroundColor: "white"}} label={<Typography id="typography">When can you start? (MM/DD/YY)</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <h2 class="form-headers">Position</h2>
                <PositionRadioButtons />
                <h2 class="form-headers">Availability</h2>
                <AvailabilityRadioButtons />
                <Button style={{textTransform: 'none', float: 'right'}} onClick={() => {
                        // if(nameTextFieldValue !== "" && phoneTextFieldValue !== "" && emailTextFieldValue !== "") {
                        //     props.onAnswerSelected(props.question, 
                        //     {
                        //     name: nameTextFieldValue,
                        //     phone: phoneTextFieldValue,
                        //     email: emailTextFieldValue
                        //     }, props.answerOptions[0].type);
                        //     nameTextFieldValue = "";
                        //     phoneTextFieldValue = "";
                        //     emailTextFieldValue = "";
                        // }
                        }}>
                        <Paper className={useStyles.finish} style={{fontSize: 28, color: 'white', backgroundColor: "#25274D", padding: .75, borderRadius: "7%", fontWeight: "700"}}>&#160;&#160;&#160;Apply&#160;&#160;&#160;</Paper>
                </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
