const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const sort = default_parse("sort");
const direction = default_parse("direction");
const since = default_parse("since");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  owner,
  repo,
  sort,
  direction,
  since,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/issues/comments", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });