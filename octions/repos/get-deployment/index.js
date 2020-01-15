const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const deployment_id = default_parse("deployment_id");


const previews = [
  "machine-man",
  "ant-man",
]

const inputs = {
  token,
  owner,
  repo,
  deployment_id,
}


request(token, 
  "get", 
  "/repos/{owner}/{repo}/deployments/{deployment_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });