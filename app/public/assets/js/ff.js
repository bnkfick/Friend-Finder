$(document).ready(function () {


    // Capture the form inputs
    $("#submit-btn").on("click", function (event) {
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

            // AJAX post the data to the friends API.
            $.post("/api/friends", userData, function (data) {
               
                // Get the modal
                var modal = document.getElementById('matchModal');
                $("#match-name").text(data.closestMatch.name);
                $("#match-image").attr("src", data.closestMatch.photo);
                
                modal.style.display = "block";

            });
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });
    // When the user clicks anywhere outside of the modal, close it
   
    $(".close").on("click", function () {
        document.getElementById('matchModal').style.display = "none";
        resetInput();
      });
      $(".closeBtn").on("click", function () {
        document.getElementById('matchModal').style.display = "none";
        resetInput();
      });
      function resetInput() {
        $("#name").val('');
        $("#photo").val('');
        $('#q1').get(0).selectedIndex = 0;
        $("#q1").get(0).selectedIndex = 0;
        $("#q2").get(0).selectedIndex = 0;
        $("#q3").get(0).selectedIndex = 0;
        $("#q4").get(0).selectedIndex = 0;
        $("#q5").get(0).selectedIndex = 0;
        $("#q6").get(0).selectedIndex = 0;
        $("#q7").get(0).selectedIndex = 0;
        $("#q8").get(0).selectedIndex = 0;
        $("#q9").get(0).selectedIndex = 0;
        $("#q10").get(0).selectedIndex = 0;
      }
});