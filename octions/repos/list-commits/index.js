const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const sha = default_parse("sha");
const path = default_parse("path");
const author = default_parse("author");
const since = default_parse("since");
const until = default_parse("until");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  sha,
  path,
  author,
  since,
  until,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/commits", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });