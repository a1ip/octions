const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const filter = default_parse("filter");
const state = default_parse("state");
const labels = default_parse("labels");
const sort = default_parse("sort");
const direction = default_parse("direction");
const since = default_parse("since");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
  "machine-man",
  "squirrel-girl",
]

const inputs = {
  token,
  filter,
  state,
  labels,
  sort,
  direction,
  since,
  per_page,
  page,
}


request(token, 
  "get", 
  "/user/issues", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });