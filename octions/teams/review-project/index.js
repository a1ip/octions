const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const project_id = default_parse("project_id");


const previews = [
  "inertia",
]

const inputs = {
  token,
  team_id,
  project_id,
}


request(token, 
  "get", 
  "/teams/{team_id}/projects/{project_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });