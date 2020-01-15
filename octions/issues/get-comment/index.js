const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const comment_id = default_parse("comment_id");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "machine-man",
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  comment_id,
  per_page,
  page,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/issues/comments/{comment_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });