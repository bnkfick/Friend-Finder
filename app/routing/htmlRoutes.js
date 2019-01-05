
var path = require("path");

module.exports = function (app) {

    // A GET Route to /survey which should display the survey page.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // A GET Route to /friends page which displays all the friends in an html view
    app.get("/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/friends.html"));
    });

    // A default, catch-all route that leads to home.html which displays the home page.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


}
