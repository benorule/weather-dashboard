// API key appid=2e8723bbb74f1b8049626523777f911b

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2e8723bbb74f1b8049626523777f911b"
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (result) {

    console.log(result);
});