# Add user as a collaborator

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/projects/collaborators/#add-user-as-a-collaborator

Adds a collaborator to a an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/projects/add-collaborator@master
  id: my_step_id
  with:
    token: <token value>
    project_id: <project_id value>
    username: <username value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
    echo ${{ steps.my_step_id.outputs.status }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|project_id|true|project_id parameter
|username|true|username parameter
|permission|false|The permission to grant the collaborator. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)." Can be one of:   \* `read` - can read, but not write to or administer this project.   \* `write` - can read and write, but not administer this project.   \* `admin` - can read, write and administer this project.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

