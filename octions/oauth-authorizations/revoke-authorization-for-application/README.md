# Revoke an authorization for an application

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) for this method, where the username is the OAuth application `client_id` and the password is its `client_secret`.


<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/oauth-authorizations/revoke-authorization-for-application@master
  id: my_step_id
  with:
    token: <token value>
    client_id: <client_id value>
    access_token: <access_token value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|client_id|true|client_id parameter
|access_token|true|access_token parameter

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|

