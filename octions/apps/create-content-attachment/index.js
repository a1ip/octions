const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const content_reference_id = default_parse("content_reference_id");
const title = default_parse("title");
const body = default_parse("body");


const previews = [
  "corsair",
]

const inputs = {
  token,
  content_reference_id,
  title,
  body,
}


request(token, 
  "post", 
  "/content_references/{content_reference_id}/attachments", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });