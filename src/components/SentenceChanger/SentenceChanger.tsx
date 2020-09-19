
import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type SentenceChangerProps = {
  setText: Function
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
      paddingTop: "65px"
    }
  })
);


const SentenceChanger = (props: SentenceChangerProps) => {
  const [inputValue, setInputValue] = useState("");
  
  const classes = useStyles();
  
  const updateText = (e: any) => {
    props.setText(inputValue);
    setInputValue("");
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Type a new sentence here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        onClick={updateText}
      >
        Submit
      </IconButton>
    </Paper>
  );
}

export default SentenceChanger