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

## Get Weekly Goal

Allows a logged in user to get a single weekly goal

#### Path

`GET /goals/weekly/:goal_id`

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
curl --location --request GET 'https://www.example.com/api/goals/weekly/606b33282b8ffa0d512a7993' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "isCompleted": false,
  "_id": "5f5000b9bfe567344069882f",
  "user": "5f4bff121037e424a17a3ebc",
  "title": "Get a dub.",
  "createdAt": "2020-09-02T20:29:45.225Z",
  "updatedAt": "2020-09-02T20:29:45.225Z",
  "__v": 0
}
```

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

Allows a logged in user to mark a weekly goal as complete

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
curl --location --request PUT 'https://www.example.com/api/goals/weekly/5f527f5bf9c58a11103b39c9/complete' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": "COMPLETED",
  "isCompleted": true
}
```

  </code-block>
</code-group>

## Not Complete Weekly Goal

Allows a logged in user to mark a weekly goal as not complete

#### Path

`PUT /goals/weekly/:goal_id/not-complete`

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
curl --location --request PUT 'https://www.example.com/api/goals/weekly/5f527f5bf9c58a11103b39c9/not-complete' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": "NOT_COMPLETED",
  "isCompleted": false
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

## Get Yearly Goals

Allows a logged in user to get yearly goals

#### Path

`GET /goals/yearly`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request GET 'https://www.example.com/api/goals/yearly' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "goals": [
    {
      "isCompleted": false,
      "weekly": [],
      "_id": "606b327ba29add0ce3f7e96e",
      "user": "5f4bff121037e424a17a3ebc",
      "title": "Get a dub in Fortnite",
      "completeBy": "2021-12-30T06:00:00.000Z",
      "createdAt": "2021-04-05T15:53:31.964Z",
      "updatedAt": "2021-04-05T15:53:31.964Z",
      "__v": 0
    },
    {
      "isCompleted": false,
      "weekly": [],
      "_id": "606b3288a29add0ce3f7e96f",
      "user": "5f4bff121037e424a17a3ebc",
      "title": "Get a dub in Fortnite",
      "completeBy": "2022-12-30T06:00:00.000Z",
      "createdAt": "2021-04-05T15:53:44.226Z",
      "updatedAt": "2021-04-05T15:53:44.226Z",
      "__v": 0
    },
    {
      "isCompleted": false,
      "weekly": [],
      "_id": "606b33282b8ffa0d512a7993",
      "user": "5f4bff121037e424a17a3ebc",
      "title": "Get a dub in Fortnite",
      "completeBy": "2022-12-30T06:00:00.000Z",
      "createdAt": "2021-04-05T15:56:24.973Z",
      "updatedAt": "2021-04-05T15:56:24.973Z",
      "__v": 0
    }
  ],
  "total": 3
}
```

  </code-block>
</code-group>

## Get Yearly Goal

Allows a logged in user to get a single yearly goal

#### Path

`GET /goals/yearly/:goal_id`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Params

| Field        | Type   | Description       |
| :----------- | :----- | :---------------- |
| yearlyGoalId | string | id of yearly goal |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request GET 'https://www.example.com/api/goals/yearly/606b33282b8ffa0d512a7993' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "isCompleted": false,
  "weekly": [],
  "_id": "606b33282b8ffa0d512a7993",
  "user": "5f4bff121037e424a17a3ebc",
  "title": "Get a dub in Fortnite",
  "completeBy": "2022-12-30T06:00:00.000Z",
  "createdAt": "2021-04-05T15:56:24.973Z",
  "updatedAt": "2021-04-05T15:56:24.973Z",
  "__v": 0
}
```

  </code-block>
</code-group>

## Create Yearly Goal

Allows a logged in user create a new yearly goal.

#### Path

`POST /goals/yearly`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Body

| Field      | Type   | Description                 |
| :--------- | :----- | :-------------------------- |
| title      | string | Title of the new goal       |
| completeBy | string | completeBy date of new goal |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/goals/yearly' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'title=Win at life'
--data-urlencode 'completeBy=12/30/2025'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "goal": {
    "isCompleted": false,
    "weekly": [],
    "_id": "606b33282b8ffa0d512a7993",
    "user": "5f4bff121037e424a17a3ebc",
    "title": "Get a dub.",
    "completeBy": "2022-12-30T06:00:00.000Z",
    "createdAt": "2021-04-05T15:56:24.973Z",
    "updatedAt": "2021-04-05T15:56:24.973Z",
    "__v": 0
  },
  "message": "Added yearly goal."
}
```

  </code-block>
</code-group>

## Delete Yearly Goal

Allows a logged in user to delete a yearly goal

#### Path

`DELETE /goals/yearly`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Params

| Field        | Type   | Description       |
| :----------- | :----- | :---------------- |
| yearlyGoalId | string | id of yearly goal |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request DELETE 'https://www.example.com/api/goals/yearly/606b33282b8ffa0d512a7993' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": "REMOVED",
  "message": "Goal has been removed."
}
```

  </code-block>
</code-group>
