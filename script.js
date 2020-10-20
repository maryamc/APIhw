// http://api.openweathermap.org/data/2.5/weather?q=boston&appid=82cd4c13edf633371f0dc74a457a8087

//document.ready is telling the server to load html first then css then js
$(document).ready(function () {
    // This is our API key. Add your own API key between the ""
    // var APIKey = "82cd4c13edf633371f0dc74a457a8087";

    // Here we are building the URL we need to query the database
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // var queryURL ="https://api.openweathermap.org/?t=" + city + "&apikey=trilogy";
    // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


    // adding click event for the search button
    $("#searchBtn").on("click", function (event) {

        // event.preventDefault(); prevents the page from  refreashing when the search button is clicked and it instead actually submits the data from the search button to run through the weather server
        event.preventDefault();
        var city = $("#city-input").val();
        console.log(city);

        // adding local apikey and queryURL variables to be used in ajax call
        var APIKey = "82cd4c13edf633371f0dc74a457a8087";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

        // creating the ajax call that will run the function
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console logging the code to log the queryURL
            console.log(queryURL);
            // console logging code to log the response function
            console.log(response);
            // console logging code to show temperature 
            console.log(response.main.temp);

            // this code will transfer the contents to the HTML itself
            $(".temp").text(response.main.temp);
            $(".city").text(response.name);
            
            // console logging the change in temperature displayed on the html from kelvin to farenheit using conversion expression
            console.log((response.main.temp - 273.15) * 1.80 + 32);

            // code to dump the content into the HTML
            $(".temp").text((response.main.temp - 273.15) * 1.80 + 32);
            $(".humidity").text(response.main.humidity);

        });
    });
});


