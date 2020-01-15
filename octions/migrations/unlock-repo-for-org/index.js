const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const migration_id = default_parse("migration_id");
const repo_name = default_parse("repo_name");


const previews = [
  "wyandotte",
]

const inputs = {
  token,
  org,
  migration_id,
  repo_name,
}


request(token, 
  "delete", 
  "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });