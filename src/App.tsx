import React from "react";
import "./App.css";
import GiphyWrapper from "./components/GiphyWrapper";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px",
      backgroundColor: theme.palette.background.paper
    },
    header: {
      paddingBottom: "10px",
      fontWeight: 300
    },
    subHeader: {
      fontStyle: 'italic',
      fontWeight: 300,
      padding: '20px',
      marginBottom: '20px',
    },
    divider: {
      height: '2px',
      width: '176px',
      marginBottom: '10px',
      backgroundColor: '#3f51b5',
    }
  })
);

function App() {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <h2 className={classes.header}>GIPHY Tooltip Fun!</h2>
      <Divider className={classes.divider} />
      <h4 className={classes.subHeader}>
        Highlight over some text to get a GIPHY tooltip!
      </h4>
      <GiphyWrapper/>
    </div>
  );
}

export default App;
