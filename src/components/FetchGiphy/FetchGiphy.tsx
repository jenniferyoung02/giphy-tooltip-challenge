import { useState, useEffect } from "react";
import { exportDefaultSpecifier } from "@babel/types";
const axios = require("axios");

// Woulld have liked to stor this as a secret keys
const API_KEY = "4Z15yuylYr1bEQkpJiBb3dd4ffvUfs5v";
// To prevent Mixed Content issue, I removed the htto
const API_URL = "//api.giphy.com/v1/gifs/translate?s=";

export const FetchGiphy = (selectedText: string, weirdnessValue: number) => {
  const [data, setData] = useState({ url: "", height: 0, width: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  
  useEffect(() => {
    // Using search API endpoint to translate string into GIPHY
    const url = `${API_URL}${selectedText}&api_key=${API_KEY}&weirdness=${weirdnessValue}`;
    
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        // I choose axios because it's one less step to parse to JSON
        // and it felt more simple. For rapid development, simplicity is key.
        const result = await axios(url);
        setData(result.data.data.images.fixed_height);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  // we only want to kick off the fetch data if selectedText has changed or weirdnessValue has changed 
  }, [selectedText, weirdnessValue]);

  return { data, isLoading, isError };
};
