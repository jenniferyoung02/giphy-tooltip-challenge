import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Slider, Tooltip } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";

type WeirdnessSliderProps = {
  setValue: Function,
  value: number
};

const useStyles = makeStyles({
  root: {
    width: 200
  },
  sliderTitle: {
    display: 'flex',
    justifyContent: 'space-around',
  }
});

const WeirdnessSlider = (props: WeirdnessSliderProps) => {

  const classes = useStyles();

  const handleChange = (event: any, newValue: number | number[]) => {
    // if you select a text, and then slide the weirdness 
    // the selection needs to be de-selected
    let selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
    props.setValue(newValue as number);
  };

  return (
    <div className={classes.root}>
      <div className={classes.sliderTitle}>
        <Typography id="continuous-slider" gutterBottom>
          Turn up the weirdness!{" "}
        </Typography>
        <Tooltip
          title="Choose how weird you would like the GIPHY's to be"
          placement="top"
          arrow={true}
        >
          <HelpIcon viewBox={"-3 -3 34 34"} />
        </Tooltip>
      </div>
      <Slider
        value={props.value}
        onChange={handleChange}
        min={0}
        // according to the GIPHY API docs, 10 is the heighest weirdness
        max={10}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}

export default WeirdnessSlider