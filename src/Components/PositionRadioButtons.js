import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        width: "1.75em",
        height: "1.75em"
      }
    },
    root: {
        flexGrow: 1,
    },
    checkboxLabel: {
        color: "#25274D",
        fontSize: 20,
    },
  })
);

function PositionRadioButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <FormControl component="fieldset">
                    <RadioGroup
                        onChange={props.onChangePosition}
                        aria-label="position"
                        defaultValue="Cleaner"
                        name="radio-buttons-group"
                        row
                    >
                        <Grid item xs={6} style={{paddingLeft:"30px"}}>
                        <FormControlLabel classes={{label:classes.checkboxLabel}} className={classes.smallRadioButton} value="Cleaner" control={<Radio color="secondary"/>} label="Cleaner" />
                        </Grid>
                        <Grid item xs={6} style={{paddingLeft:"30px"}}>
                        <FormControlLabel classes={{label:classes.checkboxLabel}} className={classes.smallRadioButton} value="Site Supervisor" control={<Radio />} label="Supervisor" />
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </div>
    );
}

export default PositionRadioButtons;