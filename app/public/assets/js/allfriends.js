$(document).ready(function () {

    // AJAX post the data to the friends API.
    $.get("/api/friends", function (data) {
        console.log(data);

        if (data) {
            //for each person show the image with the name
            for (var i = 0; i < data.length; i++) {
                
                // Make a div with jQuery and store it in a variable named animalDiv.
                var friendDiv = $("<div>");
                friendDiv.addClass("friend");

                var p = $("<p>");
                p.text(data[i].name).addClass("friend-name");

                var friendImage = $("<img>");
                friendImage.attr("src", data[i].photo).addClass("friend-image");

                friendDiv.append(p, friendImage);
                $("#friends").append(friendDiv);
            }
        }
        else {
            $("#friends").text("There are no friends at this time.");
        }
    });
});