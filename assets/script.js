$("#searchButton").on("click", function () {
    // Get city name from user input
    var cityName = (document.getElementById("searchBar").value); // Getting value from input tag
    console.log(cityName);

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

        document.getElementById("weather").textContent = ("temperature: " + result.main.temp);

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

            document.getElementById("forecast").textContent = ("temperature: " + result.list[0].main.temp);

        });
    }

});




