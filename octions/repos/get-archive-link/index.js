const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const archive_format = default_parse("archive_format");
const ref = default_parse("ref");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  archive_format,
  ref,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/{archive_format}/{ref}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });