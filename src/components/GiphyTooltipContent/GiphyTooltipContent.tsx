
import React, { useState, useEffect, useRef } from "react";
import { GiphyTooltip } from "../GiphyTooltip/GiphyTooltip";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

type GiphyTooltipContentProps = {
  text: string
  weirdnessValue: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: '75%',
      fontSize: '24px',
      justifyContent: 'center',
      marginTop: '50px',
      '& #tooltip-content': {
        padding: '20px',
      }
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
    }
  })
);


export const GiphyTooltipContent = (props: GiphyTooltipContentProps) => {
  const [selectedText, setSelectedText] = useState('')
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const divRef = useRef<HTMLHeadingElement>(null);

  const classes = useStyles();

  const closeTooltip = () => {
      setSelectedText("");
      setIsTooltipOpen(false);
    };

    
    useEffect(() => {
      const handleOutsideClick = (e: any) => {
        // if clicking outside the content div, the tooltip should disappear
        const currentRef = divRef.current;
        if (!(currentRef || document.body).contains(e.target)) {
          closeTooltip();
        }
      };
      document.addEventListener("mousedown", handleOutsideClick);
      return () =>
        document.removeEventListener("mousedown", handleOutsideClick);
    }, []);


  const getSelectedText = (e: any) => {
    let selection = window.getSelection();
    if (selection) {
      if (selection.isCollapsed) {
        closeTooltip()
      }
      let highlightedWord = selection.toString().trim()
      if (highlightedWord !== selectedText) {
        if (selection.rangeCount) {
          // coordinates of selected text
          const selectionCoordinates = selection
            .getRangeAt(0)
            .getBoundingClientRect();
          // the middle will be left plus half the the width of the selected text
          setLeft(selectionCoordinates.left + selectionCoordinates.width / 2);
          setTop(selectionCoordinates.top);
          setSelectedText(selection.toString().trim());
          setIsTooltipOpen(true);
        }
      }
      // It is not possible to reslected selected text
      // So if the text is the same, the user has clicked on 
      // The selected text. Therefore, the tooltip should close
      if (highlightedWord === selectedText) {
        closeTooltip()
      }
    } else {
      closeTooltip()
    }
  }


  return (
    <Paper elevation={3} className={classes.root}>
      <div
        id="tooltip-content"
        onMouseUp={getSelectedText}
        ref={divRef}
      >
        {isTooltipOpen ? (
          <GiphyTooltip
            left={left}
            top={top}
            weirdnessValue={props.weirdnessValue}
            selectedText={selectedText}
          />
        ) : null}
        {props.text}
      </div>
    </Paper>
  );
}
