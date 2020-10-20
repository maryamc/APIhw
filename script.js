// http://api.openweathermap.org/data/2.5/weather?q=boston&appid=82cd4c13edf633371f0dc74a457a8087



$(document).ready(function () {
    // This is our API key. Add your own API key between the ""
    // var APIKey = "82cd4c13edf633371f0dc74a457a8087";

    // Here we are building the URL we need to query the database
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // var queryURL ="https://api.openweathermap.org/?t=" + city + "&apikey=trilogy";
    // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


    // adding click event
    $("#searchBtn").on("click", function (event) {
        // this function prevents page from being refreshed on click, allowing data to be shown
        event.preventDefault();
        var city = $("#city-input").val();
        console.log(city);
        var APIKey = "82cd4c13edf633371f0dc74a457a8087";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

        // We then created an AJAX call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // Create CODE HERE to Log the queryURL
            console.log(queryURL);
            // Create CODE HERE to log the resulting object
            console.log(response);
            // Create CODE HERE to calculate the temperature (converted from Kelvin)
            console.log(response.main.temp);

            // Create CODE HERE to transfer content to HTML
            $(".temp").text(response.main.temp);
            $(".city").text(response.name);
            // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
            console.log((response.main.temp - 273.15) * 1.80 + 32);

            // Create CODE HERE to dump the temperature content into HTML
            $(".temp").text((response.main.temp - 273.15) * 1.80 + 32);
            $(".humidity").text(response.main.humidity);

        });
    });
});


