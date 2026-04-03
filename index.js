const core = require("@actions/core");
//const { getOctokit, context } = require('@actions/github');
//const github = require("@actions/github");
const fs = require("fs");
const FormData = require("form-data");
const request = require("request")


async function run() {
  try {
    // `path-to-file` input defined in action metadata file
    const pathToFile = core.getInput("path-to-file");
    console.log(`Path: ${pathToFile}`);
    if (fs.existsSync(pathToFile)) {
      console.log(`File Exists`);
    } else {
      console.log(`File Does Not Exist`);
    }

    // `category` input defined in action metadata file
    const category = core.getInput("category");
    console.log(`category: ${category}`);

    // `apiKey` input defined in action metadata file
    const apiKey = core.getInput("apiKey");

    const formData = {
      "file": fs.createReadStream( pathToFile ),
      "category": category
    }
    const theHeaders = {
       'Authorization':"Bearer " + apiKey
    }

    request.post({url:'https://api.safeappportal.com.sg/v1/developer/android/upload-binary', headers: theHeaders, formData: formData}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        console.error('upload failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);
      const theGoods = JSON.parse(body);
      console.log("Safe App Portal Results URL: ", theGoods.resultsUrl);
    });
  
    
  } catch (err) {
      console.log("Error with upload:", err);
  }
}
run();
