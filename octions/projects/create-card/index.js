const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const column_id = default_parse("column_id");
const note = default_parse("note");
const content_id = default_parse("content_id");
const content_type = default_parse("content_type");


const previews = [
  "inertia",
]

const inputs = {
  token,
  column_id,
  note,
  content_id,
  content_type,
}


request(token, 
  "post", 
  "/projects/columns/{column_id}/cards", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });