const core = require("@actions/core");
const { request } = require("@octokit/request");
const { parse_array, parse_boolean, default_parse } = require('../../../src/utils/parse-input')

const token = default_parse("token");
const owner = default_parse("owner");
const repo = default_parse("repo");
const issue_number = default_parse("issue_number");
const title = default_parse("title");
const body = default_parse("body");
const assignee = default_parse("assignee");
const state = default_parse("state");
const milestone = default_parse("milestone");
const labels = parse_array("labels");
const assignees = parse_array("assignees");


const requestWithAuth = request.defaults({
  headers: {
    authorization: `Bearer ${token}`
  },
});

requestWithAuth("patch /repos/{owner}/{repo}/issues/{issue_number}", {
    token,
    owner,
    repo,
    issue_number,
    title,
    body,
    assignee,
    state,
    milestone,
    labels,
    assignees,
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