---
title: Goals
description: "A wlf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 9
category: API
---

## Get Weekly Goals

Allows a logged in user to get weekly goals

#### Path

`GET /goals/weekly`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request GET 'https://www.example.com/api/goals/weekly' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "goals": [
    {
      "isCompleted": false,
      "_id": "5f5000b9bfe567344069882f",
      "user": "5f4bff121037e424a17a3ebc",
      "title": "Get a dub.",
      "createdAt": "2020-09-02T20:29:45.225Z",
      "updatedAt": "2020-09-02T20:29:45.225Z",
      "__v": 0
    }
  ]
}
```

  </code-block>
</code-group>

## Create Weekly Goal

Allows a logged in user create a new weekly goal.

#### Path

`POST /goals/weekly`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Body

| Field | Type   | Description           |
| :---- | :----- | :-------------------- |
| title | string | Title of the new goal |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/goals/weekly' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'title=Get a dub'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "goal": {
    "isCompleted": false,
    "_id": "5f527f5bf9c58a11103b39c9",
    "user": "5f4bff121037e424a17a3ebc",
    "title": "Get a dub.",
    "createdAt": "2020-09-04T17:54:35.461Z",
    "updatedAt": "2020-09-04T17:54:35.461Z",
    "__v": 0
  },
  "message": "Added weekly goal."
}
```

  </code-block>
</code-group>

## Complete Weekly Goal

Allows a logged in user to complete a weekly goal as complete

#### Path

`PUT /goals/weekly/:goal_id/complete`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Params

| Field        | Type   | Description       |
| :----------- | :----- | :---------------- |
| weeklyGoalId | string | id of weekly goal |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request DELETE 'https://www.example.com/api/goals/weekly/5f527f5bf9c58a11103b39c9/complete' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Goal has been removed."
}
```

  </code-block>
</code-group>

## Delete Weekly Goal

Allows a logged in user to delete a weekly goal

#### Path

`DELETE /goals/weekly`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Params

| Field        | Type   | Description       |
| :----------- | :----- | :---------------- |
| weeklyGoalId | string | id of weekly goal |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request DELETE 'https://www.example.com/api/goals/weekly/5f527f5bf9c58a11103b39c9' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Goal has been removed."
}
```

  </code-block>
</code-group>
