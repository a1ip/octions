const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const name = default_parse("name");
const description = default_parse("description");
const maintainers = parse_array("maintainers");
const repo_names = parse_array("repo_names");
const privacy = default_parse("privacy");
const permission = default_parse("permission");
const parent_team_id = default_parse("parent_team_id");


const previews = [
]

const inputs = {
  token,
  org,
  name,
  description,
  maintainers,
  repo_names,
  privacy,
  permission,
  parent_team_id,
}


request(token, 
  "post", 
  "/orgs/{org}/teams", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });