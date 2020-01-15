const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const repositories = parse_array("repositories");
const lock_repositories = parse_boolean("lock_repositories");
const exclude_attachments = parse_boolean("exclude_attachments");


const previews = [
]

const inputs = {
  token,
  repositories,
  lock_repositories,
  exclude_attachments,
}


request(token, 
  "post", 
  "/user/migrations", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });