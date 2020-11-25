---
title: Account
description: "A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 7
category: API
---

## Account

Allows a logged in user to get their account details.

#### Path

`GET /account`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request GET 'https://www.example.com/api/account' \
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

## Initialize Two Factor

Allows a logged in user to initiative the enable of two factor on their account.

#### Path

`POST /account/two-factor`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/account/two-factor' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjdiMmMwYjMwNmI2NTE4MGQyYjAyZGYiLCJpYXQiOjE2MDE5MDg4NjAsImV4cCI6MTYwMTkwOTE2MH0.5fhqZJH_29mpFneOySnAmOQsZj0nI7Su9-zJ1fNQZuM'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "qrcode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADUCAYAAADk3g0YAAAAAklEQVR4AewaftIAAAppSURBVO3BQY4YybLgQDJR978yR0tfBZDIKKn/GzezP1hrXfGw1rrmYa11zcNa65qHtdY1D2utax7WWtc8rLWueVhrXfOw1rrmYa11zcNa65qHtdY1D2utax7WWtc8rLWu+eEjlb+p4kTlpGJSmSreUJkqvlCZKr5QeaNiUpkqTlSmihOVqWJS+ZsqvnhYa13zsNa65mGtdc0Pl1XcpHKTyonKVDGpfKEyVUwVk8oXFScqJxU3qUwVb1TcpHLTw1rrmoe11jUPa61rfvhlKm9UvKEyVUwqJxWTyqQyVUwqk8obKlPFVHGiMlVMKm+ovFHxL6m8UfGbHtZa1zysta55WGtd88P/GJWTiknlpGJSmSreUHlD5aaKN1SmiknlC5Wp4v+yh7XWNQ9rrWse1lrX/PA/rmJSOamYVKaKSeUmlb9J5YuKE5X/nzysta55WGtd87DWuuaHX1bxf1nFpDJVnKhMFZPKVPGGyqTyRcVNFb+p4r/kYa11zcNa65qHtdY1P1ym8i9VTCpTxaRyojJVTCpTxU0qU8VJxaTyhcpUMalMFZPKVDGpTBUnKv9lD2utax7WWtc8rLWu+eGjiv8Sld+kMlX8poovKk4q3lD5QuWNiv9LHtZa1zysta55WGtdY3/wgcpUMancVHGiMlX8JpWp4kTlN1X8l6hMFW+o3FTxmx7WWtc8rLWueVhrXfPDRxVfVLyhMlVMFTepTBUnKlPFGxUnKlPFpDJVTConFV+oTBWTylQxqUwVb6icqJxUfPGw1rrmYa11zcNa6xr7gw9UTiq+UJkqJpWTikllqphUpoo3VG6q+EJlqjhRmSpOVN6oOFE5qfhCZaq46WGtdc3DWuuah7XWNT98VHGiclIxqUwVb1RMKlPFGyonFScVb6hMKicVk8obKlPFFxWTyonKScWJylQxqZyoTBVfPKy1rnlYa13zsNa65oePVKaKk4qTiknlpGJSmSomlTcqJpU3VKaKk4pJZap4o2JSeUPlpGJSeaPiDZU3KiaV3/Sw1rrmYa11zcNa6xr7gw9UvqiYVKaKSeWkYlKZKiaVk4pJZar4QmWqOFGZKv4llaniROWNihOVmyq+eFhrXfOw1rrmYa11jf3BByonFZPKFxWTyhcVk8oXFZPKGxWTylQxqfxLFScqJxUnKlPFGypTxW96WGtd87DWuuZhrXWN/cFfpHJScaJyUjGp3FQxqUwVk8pUcaJyUvGGylRxojJVTConFScqU8UbKicVJyonFV88rLWueVhrXfOw1rrmh3+s4kRlqphU/qWKk4oTlaliUjlROamYVKaKLyomlZOKN1TeUJkqporf9LDWuuZhrXXNw1rrmh8+UpkqJpU3VKaKSeVE5Y2KE5UTlaliUpkq3qg4qThROVE5UZkqTiomlROVqeKLikllqphUpoovHtZa1zysta55WGtd88NHFW9UTConKicVJypTxYnKicpUMalMFZPKFypvVEwqU8WkcqIyVZxUnFRMKicVk8p/ycNa65qHtdY1D2uta374SOWmihOVE5U3VKaKE5WTipOK31TxhsobFZPKVPFFxaQyqbxRMan8poe11jUPa61rHtZa1/zwUcWJyhsqb6jcpHJScZPKb1KZKk5U3qiYVP4llanib3pYa13zsNa65mGtdc0Pl6l8UfGGylQxqUwqJxUnKl9UnFS8ofKFyn9JxRsqJypTxaRy08Na65qHtdY1D2uta374SOWkYlJ5Q2Wq+KJiUvmiYlI5UXlDZao4UTlRmSomlaliUpkqpoo3VE5UpoqTikllUpkqbnpYa13zsNa65mGtdc0Pf1nFpHJS8UXFpDJVnKicqEwVb6icVLxRcaIyqUwVb6hMFZPKVPFGxRsqJxW/6WGtdc3DWuuah7XWNfYHv0jlb6qYVN6oeENlqphUpopJ5TdVvKFyUvGGylQxqfymiknlpOKLh7XWNQ9rrWse1lrX2B9cpHJSMalMFScqJxVfqEwVX6j8SxWTylRxovJGxYnKGxVvqJxUTCpTxRcPa61rHtZa1zysta754S9TmSomlTcqTlSmikllqjhROamYKk5UTiq+UJkqJpWTii9U3qg4UZkq3lCZKm56WGtd87DWuuZhrXXND5dVnKi8UTGpnKhMFZPKicobFW+ovKHyN1VMKlPFpDJVTBVvqHxRMamcqEwVXzysta55WGtd87DWuuaHX6byhcpvqjhRmSomlanijYqbVE5UTlSmikllqjhRmSreqDhROak4UbnpYa11zcNa65qHtdY19gcfqJxUTCpvVJyo/EsVb6hMFZPKScWJylTxhcpU8YXKScVNKicVNz2sta55WGtd87DWusb+4CKVk4oTlZOKSWWq+EJlqphU3qg4UTmpeEPlpopJ5W+q+EJlqvhND2utax7WWtc8rLWu+eEvUzmp+C9ROak4UTmpOFGZKk4qJpWpYlI5UfmiYlKZKk5UTiomlaliUjmp+OJhrXXNw1rrmoe11jX2Bx+onFScqLxR8YXKVDGpnFRMKlPFGypvVHyh8kbFpDJVTConFScqU8WJyknFicpU8cXDWuuah7XWNQ9rrWvsD36RylQxqZxUTCpTxYnKGxW/SWWqOFE5qfhC5TdVvKEyVUwqX1RMKlPFFw9rrWse1lrXPKy1rvnhl1W8UTGpfFExqUwVX6hMFTdVTConKlPFScUbKicVJypTxRsVk8pU8UbFTQ9rrWse1lrXPKy1rvnhMpWbKiaVE5WTii9U3lCZKiaVNyomlaliUrmpYlI5UTlRmSomlZOKE5U3Kr54WGtd87DWuuZhrXWN/cEHKlPFicpJxaQyVXyhMlVMKicVJypTxYnKb6r4TSpvVEwqv6nib3pYa13zsNa65mGtdc0PH1W8UfFGxYnKVHFSMalMFZPKFypvVLyhMlWcqJxUTConFZPKFxVvqEwVk8pUMalMFV88rLWueVhrXfOw1rrmh49U/qaKqWJSeaNiUpkqTlR+k8pUcaIyVUwVk8pJxYnKb1KZKr5QmSpuelhrXfOw1rrmYa11zQ+XVdykcqLyRsWk8obKGxWTyhsVX6i8ofJGxW+qeEPlDZWp4ouHtdY1D2utax7WWtf88MtU3qj4omJSmVTeUJkqvqiYVCaVLypuUpkqJpWTiknlROWLihOV3/Sw1rrmYa11zcNa65of/seovFExqfwmlaliUpkqJpWp4guVqWKqOKn4omJSmSomlaliUvmXHtZa1zysta55WGtd88P/uIoTlaliUnlD5YuKSWWqmFTeqDhRmSpOVN6oOKmYVKaKk4pJZar4TQ9rrWse1lrXPKy1rvnhl1X8popJ5QuVqWJSmSpOKk5Upoo3Kn6TylRxUjGpnKhMFScqJxX/0sNa65qHtdY1D2uta+wPPlD5myomlaliUpkqTlSmijdU3qh4Q+U3VUwqJxUnKm9UnKi8UTGpTBU3Pay1rnlYa13zsNa6xv5grXXFw1rrmoe11jUPa61rHtZa1zysta55WGtd87DWuuZhrXXNw1rrmoe11jUPa61rHtZa1zysta55WGtd87DWuub/AQqoeAR0iYemAAAAAElFTkSuQmCC",
  "twoFactorSecret": "I5TCO6QBCFIRSVRR",
  "code": 200
}
```

  </code-block>
</code-group>

## Enable Two Factor

Allows a logged in user to initialize the enable of two factor on their account.
#### Path

`PUT /account/two-factor`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Body

| Field | Type   | Description                     |
| :---- | :----- | :------------------------------ |
| code  | string | Two Factor code from users app. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request PUT 'https://www.example.com/api/account/two-factor' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjdiMmMwYjMwNmI2NTE4MGQyYjAyZGYiLCJpYXQiOjE2MDE5MDg4NjAsImV4cCI6MTYwMTkwOTE2MH0.5fhqZJH_29mpFneOySnAmOQsZj0nI7Su9-zJ1fNQZuM' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=123456'

```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Two factor has been enabled.",
  "twoFactor": true
}
```

  </code-block>
</code-group>

## Email Change

Allows a logged in user to change their email

#### Path

`POST /account/change-email`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Body

| Field | Type   | Description        |
| :---- | :----- | :----------------- |
| email | string | New account email. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/account/change-email' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjdiMmMwYjMwNmI2NTE4MGQyYjAyZGYiLCJpYXQiOjE2MDE5MDg4NjAsImV4cCI6MTYwMTkwOTE2MH0.5fhqZJH_29mpFneOySnAmOQsZj0nI7Su9-zJ1fNQZuM' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=nathan@example.com'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Please check your new email address to complate the email change."
}
```

  </code-block>
</code-group>

## Email Change resend

Allows a logged in user to resend email change confirmation.

#### Path

`POST /account/change-email/resend`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request POST 'https://www.example.com/api/account/change-email/resend' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjdiMmMwYjMwNmI2NTE4MGQyYjAyZGYiLCJpYXQiOjE2MDE5MDg4NjAsImV4cCI6MTYwMTkwOTE2MH0.5fhqZJH_29mpFneOySnAmOQsZj0nI7Su9-zJ1fNQZuM' \
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Please check your new email address to complate the email change."
}
```

  </code-block>
</code-group>

## Email Change with Token

Allow a logged in user to change their email with email verify token.

#### Path

`PUT /account/change-email/:email_token`

#### Headers

| Field        | Type   | Description                       |
| :----------- | :----- | :-------------------------------- |
| Content-Type | string | application/x-www-form-urlencoded |

#### Params

| Field       | Type   | Description         |
| :---------- | :----- | :------------------ |
| email_token | string | Email change token. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request PUT 'https://www.example.com/api/account/change-email/:email_token' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjdiMmMwYjMwNmI2NTE4MGQyYjAyZGYiLCJpYXQiOjE2MDE5MDg4NjAsImV4cCI6MTYwMTkwOTE2MH0.5fhqZJH_29mpFneOySnAmOQsZj0nI7Su9-zJ1fNQZuM'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Please check your new email address to complate the email change."
}
```

  </code-block>
</code-group>

## Password Change

Allows a logged in user to change their password.

#### Path

`PUT /account/change-password`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Body

| Field       | Type   | Description               |
| :---------- | :----- | :------------------------ |
| oldPassword | string | Old Password for account  |
| newPassword | string | New password for account. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request PUT 'https://www.example.com/api/account/change-password' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjdiMmMwYjMwNmI2NTE4MGQyYjAyZGYiLCJpYXQiOjE2MDE5MDg4NjAsImV4cCI6MTYwMTkwOTE2MH0.5fhqZJH_29mpFneOySnAmOQsZj0nI7Su9-zJ1fNQZuM' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'oldPassword=password' \
--data-urlencode 'newPassword=password123'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Your password has been changed."
}
```

  </code-block>
</code-group>

## Username Change

Allows a logged in user to change their username.

#### Path

`PUT /account/change-username`

#### Headers

| Field         | Type   | Description                       |
| :------------ | :----- | :-------------------------------- |
| Content-Type  | string | application/x-www-form-urlencoded |
| Authorization | string | JWT access token.                 |

#### Body

| Field    | Type   | Description               |
| :------- | :----- | :------------------------ |
| username | string | New username for account. |

#### Example

<code-group>
  <code-block label="Request" active>

```sh
curl --location --request PUT 'https://www.example.com/api/account/change-username' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjdiMmMwYjMwNmI2NTE4MGQyYjAyZGYiLCJpYXQiOjE2MDE5MDg4NjAsImV4cCI6MTYwMTkwOTE2MH0.5fhqZJH_29mpFneOySnAmOQsZj0nI7Su9-zJ1fNQZuM' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=Example123'
```

  </code-block>
  <code-block label="Response
">

```json
{
  "code": 200,
  "message": "Your username has been changed to Example123"
}
```

  </code-block>
</code-group>
