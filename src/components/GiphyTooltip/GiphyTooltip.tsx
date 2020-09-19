
import React from 'react';
import {FetchGiphy} from "../FetchGiphy/FetchGiphy";
import './GiphyTooltip.css'

type GiphyTooltipProps = {
  selectedText: string
  left: number
  top: number
  weirdnessValue: number
}

export const GiphyTooltip = (props: GiphyTooltipProps) => {
  const {selectedText, weirdnessValue, left, top} = props

  if (selectedText === '') {
    return null
  }
  if (selectedText) {
    const { data, isLoading, isError } = FetchGiphy(
      selectedText,
      weirdnessValue
    );
    if (isLoading) {
      // prevent flashing of a previous image
      return null
    }
    if (data && data.url) {
      const image = (
        <img
          src={data.url}
          alt={selectedText}
          width={data.width}
          height={data.height}
        />
      );
      return (
          <div className={'image-container'} style={{
            left: left - (data.width / 2),
            // top of the selection, accounting for height and a buffer of 50
            top: top - data.height - 30
          }}>
          {image}
          </div>
      );

    }
    if (isError) {
      console.log('Error fetching GIPHY')
      return null
    }
  }
  return null 
};

