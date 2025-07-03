const fs = require('fs');
const fetchCached = require( "@11ty/eleventy-fetch" );

module.exports = async function() {
  const api = "https://piccalil.li/api/emails-archive?stream=javascript-for-everyone&quickcachebreak";

  /* This returns a promise */
  const response = await fetchCached( api, {
    duration: "72h",
    type: "json"
  });

  return response;
};