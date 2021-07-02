---
title: Sessions
description: "A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 7
category: API
---

## Sessions

Allows a logged in user to get their current sessions.

#### Path

`GET /sessions`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request GET 'https://www.example.com/api/sessions' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "sessions": [
    {
      "device": {
        "browser": "Chrome",
        "version": "87.0.4280.88",
        "platform": "unknown",
        "os": "Linux",
        "isDev": false
      },
      "location": "unknown",
      "_id": "5fe00728d0adc5576af8684f",
      "expireAt": "2021-01-04T02:23:36.377Z",
      "createdAt": "2020-12-21T02:23:36.380Z"
    },
    {
      "device": {
        "browser": "PostmanRuntime",
        "version": "7.26.8",
        "platform": "unknown",
        "os": "unknown",
        "isDev": true
      },
      "location": "unknown",
      "_id": "5fe3ba46faeea10f7b9fabc9",
      "expireAt": "2021-01-06T21:44:38.337Z",
      "createdAt": "2020-12-23T21:44:38.380Z"
    }
  ]
}
```

  </code-block>
</code-group>

## Revoke Session

Allows a logged in user to revoke a session.

#### Path

`DELETE /sessions/:session_id`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request DELETE 'https://www.example.com/api/sessions/:session_id' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": "SESSION_REVOKED",
  "error": "Session has been revoked."
}
```

  </code-block>
</code-group>

## Revoke Sessions

Allows a logged in user to revoke all sessions

#### Path

`DELETE /sessions`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request DELETE 'https://www.example.com/api/sessions' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": "ALL_SESSIONS_REVOKE",
  "error": "All Sessions has been revoked."
}
```

  </code-block>
</code-group>
