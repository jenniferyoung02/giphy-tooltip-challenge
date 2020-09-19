
import React, {useState} from 'react';
import {GiphyTooltipContent} from "./GiphyTooltipContent/GiphyTooltipContent";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import WeirdnessSlider from "./WeirdnessSlider/WeirdnessSlider";
import SentenceChanger from './SentenceChanger/SentenceChanger'

type GiphyWrapper = {
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    },
    instructions: {
      paddingTop: '65px'
    }
  })
);

const GiphyWrapper = (props: GiphyWrapper) => {
  
  const [weirdnessValue, setWeirdnessValue] = useState(5);
  const [text, setText] = useState(
    "Grammarly is an amazing tool! Enginering @ Grammarly is awesome!"
    );
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <GiphyTooltipContent text={text} weirdnessValue={weirdnessValue} />
      <p className={classes.instructions}>
        Want to create your own sentence? Try it out!
      </p>
      <SentenceChanger setText={setText}/> 
      <br />
      <WeirdnessSlider value={weirdnessValue} setValue={setWeirdnessValue} />
    </React.Fragment>
  );

}

export default GiphyWrapper