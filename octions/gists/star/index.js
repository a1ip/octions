const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const gist_id = default_parse("gist_id");


const previews = [
]

const inputs = {
  token,
  gist_id,
}


request(token, 
  "put", 
  "/gists/{gist_id}/star", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });