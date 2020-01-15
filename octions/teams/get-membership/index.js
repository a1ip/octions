const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const _ = require('lodash')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const username = default_parse("username");
const file_output = default_parse("file_output");


const previews = [
]

const inputs = {
  token,
  team_id,
  username,
  file_output,
}


request(token, 
  "get", 
  "/teams/{team_id}/memberships/{username}", 
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