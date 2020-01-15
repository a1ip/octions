const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const name = default_parse("name");
const body = default_parse("body");
const file_output = default_parse("file_output");


const previews = [
  "inertia",
]

const inputs = {
  token,
  name,
  body,
  file_output,
}


request(token, 
  "post", 
  "/user/projects", 
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