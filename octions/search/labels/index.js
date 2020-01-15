const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const repository_id = default_parse("repository_id");
const q = default_parse("q");
const sort = default_parse("sort");
const order = default_parse("order");


const previews = [
]

const inputs = {
  token,
  repository_id,
  q,
  sort,
  order,
}


request(token, 
  "get", 
  "/search/labels", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });