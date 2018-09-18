var path = require("path");

module.exports = function (app) {

    $("btn").on("click", function () {
       
        app.get("/api/friends", function (request, response) {
            res.json(friends)
        });

        app.post("/api/friends", function (request, response) {
            var Match = {
                name: "",
                photo: "",
                Difference: [$("Question1").val(), $("Question2").val(), $("Question3").val(), $("Question4").val(), $("Question5").val(), $("Question6").val(), $("Question7").val(), $("Question8").val(), $("Question9").val(), $("Question10").val(),]
            };

            var userInfo = request.body;
            var userName = info.name;
            var userPhoto = info.photo;
            var userScore = info.score;
            var totalDifference = 0;

            for (var i = 0; i < [arrayofFriends].length; i++) {
                totalDifference = 0;
                // 10 because of 10 questions being asked
                for (var j = 0; j < 10; j++) {
                    //Find the absolute difference between the personal user and the friends array that I created
                    totalDifference += Math.abs(userScore[j] - arrayofFriends[i].Difference[j]);

                    if (totalDifference <= Match) {
                        Match.name = arrayofFriends[i].name;
                        Match.photo = arrayofFriends[i].photo;
                        Match.Difference = totalDifference
                    }



                }
            }
        }

        )





    })
}