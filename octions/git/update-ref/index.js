const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const ref = default_parse("ref");
const sha = default_parse("sha");
const force = parse_boolean("force");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  ref,
  sha,
  force,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/git/refs/{ref}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });