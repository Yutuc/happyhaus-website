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

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

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
                alt="Nordic Giant Profile Pic"
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
                                }} id="outlined-basic" style={{textAlign: 'left'}} label={<Typography id="typography">First name</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left'}} label={<Typography id="typography">Last name</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left'}} label={<Typography id="typography">Email</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left'}} label={<Typography id="typography">Phone number</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                            <form id="input-box" noValidate autoComplete="off" /*onSubmit={handleSubmit}*/>
                            <TextField onChange={(event) => {
                                // props.onChangePhone(event.target.value)
                                }} id="outlined-basic" style={{textAlign: 'left'}} label={<Typography id="typography">When can you start? (MM/DD/YY)</Typography>} variant="outlined" inputProps={{min: 0, style: { textAlign: 'left', paddingTop: 30, fontSize: 20}}} />
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <h2 class="form-headers">Position</h2>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={4} style={{paddingLeft:"30px"}}>
                        <FormControlLabel
                            control={ <Checkbox className={styles.size} /*onChange={props.handleCheckboxes} value={props.answerContent} name={props.answerContent}*//> }
                            label={<Typography style={{fontSize: 20, color: "black"}}>Cleaner</Typography>}
                        />
                    </Grid>
                    <Grid item xs={4} style={{paddingLeft:"30px"}}>
                        <FormControlLabel
                            control={ <Checkbox className={styles.size} /*onChange={props.handleCheckboxes} value={props.answerContent} name={props.answerContent}*//> }
                            label={<Typography style={{fontSize: 20, color: "black"}}>Site Supervisor</Typography>}
                        />
                    </Grid>
                    <Grid item xs={4} style={{paddingLeft:"30px"}}>
                    </Grid>
                </Grid>
                <h2 class="form-headers">Availability</h2>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={4} style={{paddingLeft:"30px"}}>
                        <FormControlLabel
                            control={ <Checkbox className={styles.size} /*onChange={props.handleCheckboxes} value={props.answerContent} name={props.answerContent}*//> }
                            label={<Typography style={{fontSize: 20, color: "black"}}>Days</Typography>}
                        />
                    </Grid>
                    <Grid item xs={4} style={{paddingLeft:"30px"}}>
                        <FormControlLabel
                            control={ <Checkbox className={styles.size} /*onChange={props.handleCheckboxes} value={props.answerContent} name={props.answerContent}*//> }
                            label={<Typography style={{fontSize: 20, color: "black"}}>Evenings</Typography>}
                        />
                    </Grid>
                    <Grid item xs={4} style={{paddingLeft:"30px"}}>
                        <FormControlLabel
                            control={ <Checkbox className={styles.size} /*onChange={props.handleCheckboxes} value={props.answerContent} name={props.answerContent}*//> }
                            label={<Typography style={{fontSize: 20, color: "black"}}>Nights</Typography>}
                        />
                    </Grid>
                </Grid>
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
                        <Paper className={useStyles.finish} style={{fontSize: 28, color: 'white', backgroundColor: "#07080fdc", padding: .75, borderRadius: "7%", fontWeight: "700"}}>&#160;&#160;&#160;Finish&#160;&#160;&#160;</Paper>
                </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
