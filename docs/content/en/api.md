---
title: Introduction
description: "A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 4
category: API
---

We have language bindings in Shell! You can view code examples in the the bottom of each request page.

## JSON Web Tokens

Share uses JSON web token to allow access to the API. You can retrieve a JWT by logging a user in against our login endpoint.

Share expects for the JSON web token to be included in all API requests - except for the Auth ones - to the server in a header that looks like the following:

Authorization: Bearer jsonwebtoken

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here" \
  -H "Authorization: Bearer jsonwebtoken"
```

_Make sure to replace `Bearer jsonwebtoken` with your API key. And api_endpoint_here with the endpoint your trying to request._

<alert type="info">

You must replace `Bearer jsonwebtoken` with your personal API key. If the route is `/client/` then you will have to use a token generated from your accounts token page.
</alert>
