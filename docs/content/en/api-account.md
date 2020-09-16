---
title: Account
description: "A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 6
category: API
---

## Account

Allows a user to get account details

#### Path

`GET /account`

#### Headers

| Field        | Type   | Description                       |
| :----------- | :----- | :-------------------------------- |
| Content-Type | string | application/x-www-form-urlencoded |

#### Body

| Field         | Type   | Description       |
| :------------ | :----- | :---------------- |
| Authorization | string | JWT access token. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request GET 'http://localhost:8080/account' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "user": {
    "emailVerified": false,
    "isBanned": false,
    "streamerMode": false,
    "role": "user",
    "_id": "5f566fdd853a10598b553a24",
    "username": "MrDemonWolf",
    "email": "mrdemonwolf@example.com",
    "createdAt": "2020-09-07T17:37:33.526Z",
    "updatedAt": "2020-09-07T17:37:33.526Z",
    "slug": "mrdemonwolf"
  }
}
```

  </code-block>
</code-group>
