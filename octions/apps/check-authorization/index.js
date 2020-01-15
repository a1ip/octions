const core = require("@actions/core");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')
const request = require('../../../src/utils/request')

const token = default_parse("token");
const client_id = default_parse("client_id");
const access_token = default_parse("access_token");


const previews = [
]

const inputs = {
  token,
  client_id,
  access_token,
}


request(token, 
  "get", 
  "/applications/{client_id}/tokens/{access_token}", 
  previews,
  inputs,
).then(result => {
    console.log("result", result);
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });