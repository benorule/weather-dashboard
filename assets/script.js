console.log(moment().format("dddd, MMMM Do YYYY"));

function displayFunction() {
    var T = document.getElementById("displayDiv");
    T.style.display = "block";  // <-- Set it to block
}

$("#searchButton").on("click", function () {
    // Get city name from user input
    var cityName = (document.getElementById("searchBar").value); // Getting value from input tag
    console.log(cityName);

        // Run function to display elements on page
        displayFunction();

        // Unique API key for weather API
        var apiKey = "2e8723bbb74f1b8049626523777f911b";

        // Insert API key and name of city into custom URL for current weather
        var queryURL = ("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey);
        console.log(queryURL);

        // Get data from API using URL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (result) {
            console.log(result);
            // city name, the date, an icon representation of weather conditions, 
            // the temperature, the humidity, the wind speed, and the UV index

            console.log(result.name);
            console.log("temperature: " + result.main.temp);
            $("#date").text(moment().format("dddd, MMMM Do YYYY"));
            $("#cityName").text(result.name);
            $("#weather").text("temperature: " + result.main.temp + "\nhumidity: " + result.main.humidity + "\nwind speed: " + result.wind.speed);

        });

        forecast();

        function forecast() {
            // Insert API key and name of the city into custom URL for forecast
            var queryURL = ("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey);

            // Get data from API using URL
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (result) {
                console.log(result);
                // 5-day forecast that displays the date, 
                // an icon representation of weather conditions, the temperature, and the humidity

                // For loop for each 5 days
                for (i = 1; i < 6; i++) {
                    console.log("temperature: " + result.list[i].main.temp);
                    $("#forecast" + i).text("temperature: " + result.list[i].main.temp + "\nhumidity: " + result.list[i].main.humidity);
                }

            });
        }

    });




