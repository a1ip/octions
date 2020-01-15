const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const org = default_parse("org");
const name = default_parse("name");
const body = default_parse("body");


const previews = [
  "inertia",
]

const inputs = {
  token,
  org,
  name,
  body,
}


request(token, 
  "post", 
  "/orgs/{org}/projects", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });