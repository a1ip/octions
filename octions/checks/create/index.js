const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const name = default_parse("name");
const head_sha = default_parse("head_sha");
const details_url = default_parse("details_url");
const external_id = default_parse("external_id");
const status = default_parse("status");
const started_at = default_parse("started_at");
const conclusion = default_parse("conclusion");
const completed_at = default_parse("completed_at");
const output = default_parse("output");
const actions = parse_array("actions");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
  mediaType: {
    previews: [
      "antiope",
    ]
  } 
});

requestWithAuth("post /repos/{owner}/{repo}/check-runs", {
    token,
    owner,
    repo,
    name,
    head_sha,
    details_url,
    external_id,
    status,
    started_at,
    conclusion,
    completed_at,
    output,
    actions,
})
  .then(result => {
    console.log("result", result);
    if (result && result.data && result.data.id) {
      core.setOutput('id', result.data.id)
    }
    if (result && result.data && result.data.number) {
      core.setOutput('number', result.data.number)
    }
    if (result && result.data && result.data.status) {
      core.setOutput('status', result.data.status)
    }
    core.setOutput('status', result.status)
  })
  .catch(error => {
    console.log("error", error);
    core.setFailed(error.message);
  });