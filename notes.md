# Backend with JS and Mongo

1. Programming language (JavaScript)
2. Database

## Javascript based backend data handling

1. data
2. file
3. third party api

## File Structure

- package.json
- .env (for production)
- Src
  - index (entry point of application)
  - app (for configuration or storing cookies)
  - constant (for storing constants eg. DB name etx.)
  - DB (database connection codes)
  - Models (schema of database)
  - Controllers (functionality of backend)
  - Routes (routes definition)
  - Middlewares
  - Utils (reusable codes)
  - anything else depending on project

## Server Creation using express

1. import express into the app
2. use express as function to use its features
3. create a port where application will be served
4. create route(s)
5. listen to the port created constantly

```javascript
import express from "express";

const app = express();
const port = 1234;

// routes
app.get("/", (req, res) => {
  res.send("home route");
});

app.listen(port, () => {
  console.log("app is running");
});
```

## Models creation

1. import mongoose
2. create a schema using mongoose.Schema
3. export the model for user using mongoose.model

```javascript
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  // fields of schema
});

export const Model = mongoose.model("Model", schema);
```
