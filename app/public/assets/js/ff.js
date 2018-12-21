$(document).ready(function () {

    console.log("successfully using ff.js");

    // Capture the form inputs
    $("#submit").on("click", function (event) {
        event.preventDefault();

        // Form validation
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        // If all required fields are filled
        if (validateForm()) {
            // Create an object for the user"s data
            var userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };
            console.log(userData);
            // AJAX post the data to the friends API.
            $.post("/api/friends", userData, function (data) {

                console.log("data", data);
                console.log(data.closestMatch.name);
                console.log(data.closestMatch.photo);
                console.log("data.compatability", data.compatibility);
               
                // Get the modal
                var modal = document.getElementById('myModal');
                $("#match-name").text(data.closestMatch.name);
                $("#match-image").attr("src", data.closestMatch.photo);
                
                modal.style.display = "block";

            });
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == document.getElementById('close')) {
            document.getElementById('myModal').style.display = "none";
        }
    }

});