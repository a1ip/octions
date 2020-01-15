const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const name = default_parse("name");
const config = default_parse("config");
const events = parse_array("events");
const active = parse_boolean("active");


const previews = [
]

const inputs = {
  token,
  owner,
  repo,
  name,
  config,
  events,
  active,
}


request(token, 
  "post", 
  "/repos/{owner}/{repo}/hooks", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });