import axios from 'axios';

// const axios = require("axios");
const cheerio = require("cheerio");
const linkUrl = "https://www.cbc.ca/news/canada/new-brunswick/garbage-collection-project-saint-john-1.6576693";

const get = () => {
  const extractMetadata = async (url) => {
    // try {
      const response = await axios.get(url);
      const html = response.data;
      console.log(response);

      const $ = cheerio.load(html);
      const title = $("head title").text();
      const image = $('head meta[property="og:image"]').attr("content");

      return { title, image };
    // } catch (error) {
    //   console.error("Error extracting metadata:", error);
    // }
  };

  // Usage example
  
  extractMetadata(linkUrl)
    .then((metadata) => {
        console.log(metadata);
    //   console.log(metadata.title); // Extracted title
    //   console.log(metadata.image); // Extracted image URL
    })
    .catch((error) => {
      console.error("Error:", error);
    });


};

export default get;