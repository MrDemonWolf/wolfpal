---
title: Notifications
description: "A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 8
category: API
---

## Email

Allows logged in user to enable or disable emails.

#### Path

`PUT /notifications/email`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Body

| Field       | Type    | Description                            |
| :---------- | :------ | :------------------------------------- |
| weeklyGoals | boolean | Toggle notifications for weekly goals. |
| yearlyGoals | boolean | Toggle notifications for yearly goals. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request GET 'https://www.example.com/api/notifications/email' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjRiZmYxMjEwMzdlNDI0YTE3YTNlYmMiLCJpYXQiOjE1OTkyNDE1OTMsImV4cCI6MTU5OTI0MzM5M30.FuLUNEc_lE8jI2KEur0KsQzZFjIh5kymnLdR0Udycxk' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'weeklyGoals=true' \
--data-urlencode 'yearlyGoals=true'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": "EMAIL_NOTIFICATIONS_CHANGED",
  "message": "Your notifications preferences for email has been changed."
}
```

  </code-block>
</code-group>
