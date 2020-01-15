const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const files = default_parse("files");
const description = default_parse("description");
const public = parse_boolean("public");


const previews = [
]

const inputs = {
  token,
  files,
  description,
  public,
}


request(token, 
  "post", 
  "/gists", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });