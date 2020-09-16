---
title: User
description: "A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 5
category: API
---

## Forgot Password

Allows a register user to request a password reset email.

#### Path

`POST /user/forgot-password`

#### Headers

| Field        | Type   | Description                       |
| :----------- | :----- | :-------------------------------- |
| Content-Type | string | application/x-www-form-urlencoded |

#### Body

| Field | Type   | Description               |
| :---- | :----- | :------------------------ |
| email | string | Email of current account. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/user/forgot-password' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=user@mrdemonwolf.github.io' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "An Email has been sent to user@mrdemonwolf.github with further instructions on how to reset your password. Please check your email account."
}
```

  </code-block>
</code-group>

## Reset Password

Allows a register user to request a password reset email.

#### Path

`POST /user/reset-password`

#### Headers

| Field        | Type   | Description                       |
| :----------- | :----- | :-------------------------------- |
| Content-Type | string | application/x-www-form-urlencoded |

#### Params

| Field       | Type   | Description              |
| :---------- | :----- | :----------------------- |
| reset_token | string | Token to reset password. |

#### Body

| Field           | Type   | Description                              |
| :-------------- | :----- | :--------------------------------------- |
| password        | string | New password of current account.         |
| comfirmPassword | string | Comfirm new password of current account. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/user/reset-password/:reset_token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'password=user@mrdemonwolf.github.io' \
--data-urlencode 'comfirmPassword=user@mrdemonwolf.github.io' \
```

  </code-block>
  <code-block label="Response
">

```json

```

  </code-block>
</code-group>

## Activate account

Allows a register user to activate their account with token.

#### Path

`POST /activate-account/:activate_token`

#### Headers

| Field        | Type   | Description                       |
| :----------- | :----- | :-------------------------------- |
| Content-Type | string | application/x-www-form-urlencoded |

#### Params

| Field          | Type   | Description                |
| :------------- | :----- | :------------------------- |
| activate_token | string | Token to activate account. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/user/reset-password/:reset_token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'password=user@mrdemonwolf.github.io' \
--data-urlencode 'comfirmPassword=user@mrdemonwolf.github.io' \
```

  </code-block>
  <code-block label="Response
">

```json

```

  </code-block>
</code-group>
