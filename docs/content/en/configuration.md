---
title: Configuration
description: "A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals."
position: 3
category: Getting started
---

All of WolfPal configuration is saved in the .env and the database as well.

View [.env.example](https://github.com/MrDemonWolf/wolfpal/blob/master/.env.example) file as an example.

## Server

### Sendgrid API Key

<alert type="danger">

This is required for this project to work. [Sendgrid Help](/sendgrid)

</alert>

```yaml
# Set the API key for sendgrid
# This is used for sending emails for account activation, password resets, and much more.
# This is required.
SENDGRID_API_KEY=sg......
```

### Sendgrid Domain

<alert type="danger">

This is required for this project to work. [Sendgrid Help](/sendgrid)

</alert>

```yaml
# Set the domain sendgrid will send emails from.
# This is the domain emails will be sent from (noreply@yourdomain.com)
EMAIL_DOMAIN=m.example.com
```

### Email From

<alert type="danger">

This is required for this project to work. [Sendgrid Help](/sendgrid)

</alert>

```yaml
# What domain should emails be sent from
EMAIL_FROM='WolfPal'
```

### JWT Secret

```yaml
# Set signing key for JWT (jsonwebtokens)
# Which is used for making sure the API tokens are created from this app it self and
# they can't be modifyed.
JWT_SECRET=example
```

### Database URIs

```yaml
# Set the database connection URI
# This is where all the user data will be stored. (Only MongoDB is supported)
DATABASE_URI=mongodb://localhost:27017/wolfpal
```

### Site Title

```yaml
# Set the site title
# This is used for title on pages and also for sending of emails
SITE_TITLE=WolfPal
```

### Website

```yaml
#This is whater the access to the front-end would be.  This is used on the back-end for sending the emails to users.
WEBSITE=http://localhost:3000
```

### NodeJS Env

```yaml
# Set nodejs env.  Make sure to set this to production if your hosing it.   If your helping development then change to development
NODE_ENV=production
```

### IP

```yaml
# Sets the IP that the site/app will run on.
IP=127.0.0.1
```

### Port

```yaml
# Sets the PORT that the site/app will run on.
PORT=8080
```

## Client

### Site Title

```yaml
# Set the site title
# This is used for title on pages and also for sending of emails
SITE_TITLE=WolfPal
```

### Site Description

```yaml
# Set the description of the site for SEO reasons
SITE_DESCRIPTION=A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals
```

### Copyright

```yaml
# Set the footer text
# This is the copuyright name of who is running the site.
COPYRIGHT=WolfPal
```

### Copyright Link

```yaml
# Set the footer text link
# This is the copuyright text URL which it should link to.
COPYRIGHT_LINK=http://localhost:3000
```

### NodeJS Env

```yaml
# Set nodejs env.  Make sure to set this to production if your hosing it.   If your helping development then change to development
NODE_ENV=production
```

### IP

```yaml
# Sets the IP that the site/app will run on.
IP=127.0.0.1
```

### Port

```yaml
# Sets the PORT that the site/app will run on.
PORT=3000
```
