const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const sort = default_parse("sort");
const direction = default_parse("direction");
const per_page = default_parse("per_page");
const page = default_parse("page");


const previews = [
]

const inputs = {
  token,
  sort,
  direction,
  per_page,
  page,
}


request(token, 
  "get", 
  "/user/starred", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });