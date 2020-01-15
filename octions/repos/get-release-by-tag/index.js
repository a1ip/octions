const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const tag = default_parse("tag");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  tag,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/releases/tags/{tag}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });