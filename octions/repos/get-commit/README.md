# Get a single commit

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/commits/#get-a-single-commit

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

You can pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/get-commit@master
  id: my_step_id
  with:
    token: <token value>
    ref: <ref value>
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
|owner|false|owner parameter
|repo|false|repo parameter
|ref|true|ref parameter
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

