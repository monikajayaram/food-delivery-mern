const express = require("express");
const path = require("path");
const routes = require("./routes/users");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use('/user', routes);

app.listen(PORT, function () {
    console.log("Food delivery app is listening on port %d ", PORT);
});