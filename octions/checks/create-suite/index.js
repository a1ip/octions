const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const head_sha = default_parse("head_sha");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  head_sha,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/check-suites", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });