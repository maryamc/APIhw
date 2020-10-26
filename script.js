// http://api.openweathermap.org/data/2.5/weather?q=boston&appid=82cd4c13edf633371f0dc74a457a8087
//document.ready is telling the server to load html first then css then js
$(document).ready(function () {
    // This is our API key. Add your own API key between the ""
    // var APIKey = "82cd4c13edf633371f0dc74a457a8087";



    // adding click event for the search button giving us the current weather
    $("#searchBtn").on("click", function (event) {

        // event.preventDefault(); prevents the page from  refreashing when the search button is clicked and it instead actually submits the data from the search button to run through the weather server
        event.preventDefault();
        var city = $("#city-input").val();
        console.log(city);

        // adding local apikey and queryURL variables to be used in ajax call
        var APIKey = "82cd4c13edf633371f0dc74a457a8087";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

        // creating the ajax call that will run the function and console logging the responses
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
            console.log(response.main.temp);
          // this code will transfer the contents to the HTML itself
            $(".temp").text(response.main.temp);
            $(".city").text(response.name);
            // console logging the change in temperature displayed on the html from kelvin to farenheit using conversion expression
            console.log((response.main.temp - 273.15) * 1.80 + 32);

            // code to dump the content into the HTML
            $(".temp").text((response.main.temp - 273.15) * 1.80 + 32);
            $(".humidity").text(response.main.humidity);
            $(".wind").text(response.wind.speed);

        });

        
    });

    // function for getting current weather
    function currentWeather () {
        var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;

        // ajax call for current weather
        $.ajax({
            url: forecastQueryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        })
    }





});


