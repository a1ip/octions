const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const title = default_parse("title");
const body = default_parse("body");
const private = parse_boolean("private");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  team_id,
  title,
  body,
  private,
}


request(token, 
  "post", 
  "/teams/{team_id}/discussions", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });