// API key appid=2e8723bbb74f1b8049626523777f911b

var queryURL = "api.openweathermap.org/data/2.5/weather?q=London&appid=appid=2e8723bbb74f1b8049626523777f911b";
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
});