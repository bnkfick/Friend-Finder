

var friends = require("../data/friends");

module.exports = function (app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        console.log("app.get('/api/friends')");
        res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {

        var match = {
            closestMatch: {},
            compatibility: 0
        };
        var userData = req.body;
        console.log(userData);
        var userScores = userData.scores;
         // loop through all of the friends
        for (var x=0; x<friends.length; x++) {
            console.log(friends[x].name);
            var totalDifference = 0;
            //now calculate the compatability score or totalDifference between 
            //the friend scores and the users scores
            //The less difference, the more compatible
            for (var y=0; y<friends[x].scores.length; y++) {
                totalDifference += Math.abs(parseInt(userScores[y]) - parseInt(friends[x].scores[y]));
                console.log(totalDifference);
                if (totalDifference <= match.compatibility) {
                    match.closestMatch = friends[x];
                    match.compatibility = totalDifference;
                    console.log("The new best match is " + match.closestMatch.name + " with a friend score of: " + totalDifference + "\n");
                } else {
                    console.log(friends[x] + "is not the closestMatch match");
                }

            }
        }

        console.log(match.closestMatch);
        console.log(match.compatibility);
        console.log("-----------------------------------------------");
        friends.push(userData);
        res.json(match);
    });
};



