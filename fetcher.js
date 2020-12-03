const fetcher = process.argv.slice(2);
console.log('fetcher: ', fetcher);
const fs = require('fs');

const request = require('request');
request(fetcher[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  if (response.statusCode !== 200) {
    response.readableEnded('something went wrong...')
  } else {
  //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(fetcher[1], body, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('Downloaded and saved 1235 bytes to ./index.html')
  });
  }


});


