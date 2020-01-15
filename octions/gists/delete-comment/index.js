const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const gist_id = default_parse("gist_id");
const comment_id = default_parse("comment_id");


const previews = [
]

const inputs = {
  token,
  gist_id,
  comment_id,
}


request(token, 
  "delete", 
  "/gists/{gist_id}/comments/{comment_id}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });