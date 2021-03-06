const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const project_id = default_parse("project_id");
const name = default_parse("name");
const body = default_parse("body");
const state = default_parse("state");
const organization_permission = default_parse("organization_permission");
const private = parse_boolean("private");
const file_output = default_parse("file_output");
const custom_outputs = default_parse("custom_outputs");


const previews = [
  "inertia",
]

const inputs = {
  token,
  project_id,
  name,
  body,
  state,
  organization_permission,
  private,
  file_output,
  custom_outputs,
}


request(token, 
  "patch", 
  "/projects/{project_id}", 
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