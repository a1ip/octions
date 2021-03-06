const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const check_run_id = default_parse("check_run_id");
const name = default_parse("name");
const details_url = default_parse("details_url");
const external_id = default_parse("external_id");
const started_at = default_parse("started_at");
const status = default_parse("status");
const conclusion = default_parse("conclusion");
const completed_at = default_parse("completed_at");
const output = default_parse("output");
const actions = parse_array("actions");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "antiope",
]

const inputs = {
  token,
  owner,
  repo,
  check_run_id,
  name,
  details_url,
  external_id,
  started_at,
  status,
  conclusion,
  completed_at,
  output,
  actions,
  file_output,
  custom_outputs,
}


request(token, 
  "patch", 
  "/repos/{owner}/{repo}/check-runs/{check_run_id}", 
  previews,
  _.omit(inputs, ["token", "file_output", "custom_outputs"]),
  file_output,
  custom_outputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });