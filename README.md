# express_crash

<!-- What is Express -->
Express is a "server-side" or "back-end" framework. It is not comparable to client-side frameworks like React, Angular, or Vue.
It can be used in combination with those frameworks to build full stack applications.

<!-- Why Use Express -->
1) Makes building web applications with Node.js MUCH easier.
2) Used for both server rendered apps as well as API/Microservices.
3) Extremley light, fast and free.
4) Full control of request and response.
5) By far the most popular Node framework.
6) Great to use with client side frameworks as it's all JavaScript.

<!-- Basic Server Syntax -->

const express = require('express');

const app = express;

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(5000);

<!-- Basic Route Handling -->
1) Handling requests/routes is simple
2) app.get();, app.post();, app.put();, app.delete();
3)Access to params, query strings, url parts, etc.
4) Express has a router so we can store routes in separate files and export.
5) We can parse incoming data with the Body Parser

app.get('/', function(req, res) {
    <!-- fetch from database -->
    <!-- load pages -->
    <!-- return JSON -->
    <!-- Full access to request & responses -->
});

<!-- Express Middleware -->
Middleware functions are functions that have access to the request and response object. Express has built in middleware
but middleware also comes from 3rd party packages as well as custom middleware

1) Execute any code
2) Make changes to the request/response objects
3) End response cycle
4) Call next middleware in the stack.