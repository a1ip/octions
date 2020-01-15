const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const team_id = default_parse("team_id");
const discussion_number = default_parse("discussion_number");
const content = default_parse("content");


const previews = [
  "squirrel-girl",
]

const inputs = {
  token,
  team_id,
  discussion_number,
  content,
}


request(token, 
  "post", 
  "/teams/{team_id}/discussions/{discussion_number}/reactions", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });