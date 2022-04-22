# PINFLAG NODE JS CHALLENGE
**Install dependencies**
---
`npm i`

**Migrate Table**
---
`npx sequelize-cli db:migrate`

**Run the app**
---
`node src/server.js`

**Swagger**
---
`http://127.0.0.1:5000/api-docs`

**`.env` file needed**
---
This file should have:
- *DATABASE_USERNAME*
- *DATABASE_PASSWORD*
- *DATABASE_NAME*
- *DATABASE_HOST*
- *DATABASE_PORT*
- *DATABASE_URI*

# REST API
---
An API that can search, create and storage characters from Rick and Morty API.

### Get list of characters
---
#### Request
`GET /index/num`
Replace the num parameter with a number between 1 and 826.
- *As an user you supposed to know that the Rick and morty API has 826 characters.*

### Create a character
---
#### Request
`POST /create`
This endpoint creates a character in the database by giving the data in the body.

### Find a character
---
#### Request
`GET /show`
Finds a character in the database, if it doesn't found one, will search in the Rick and Morty API and will return the data.
- *This endpoint receives the `name` parameter data by query params*
- *The parameter should be exact as it shows on the Rick and Morty API (e.g. "Rick Sanchez"), this also can be in lower case (e.g."rick sanchez").*
