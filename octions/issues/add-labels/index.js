const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const issue_number = default_parse("issue_number");
const labels = parse_array("labels");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  issue_number,
  labels,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/issues/{issue_number}/labels", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });