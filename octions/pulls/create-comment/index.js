const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const pull_number = default_parse("pull_number");
const body = default_parse("body");
const commit_id = default_parse("commit_id");
const path = default_parse("path");
const position = default_parse("position");
const side = default_parse("side");
const line = default_parse("line");
const start_line = default_parse("start_line");
const start_side = default_parse("start_side");
const file_output = default_parse("file_output");


const previews = [
  "comfort-fade",
]

const inputs = {
  token,
  owner,
  repo,
  pull_number,
  body,
  commit_id,
  path,
  position,
  side,
  line,
  start_line,
  start_side,
  file_output,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments", 
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