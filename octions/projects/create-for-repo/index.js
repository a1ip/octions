const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const name = default_parse("name");
const body = default_parse("body");
const file_output = default_parse("file_output");


const previews = [
  "inertia",
]

const inputs = {
  token,
  owner,
  repo,
  name,
  body,
  file_output,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/projects", 
  previews,
  _.omit(inputs, ["token", "file_output"]),
  file_output,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });