//Establishes initial array of topics displayed
var topicsArray = ["the flash", "batman", "superman", "aquaman", "cyborg", "wonder woman"],
    queryDOM = $('#query'), // a shorthand way to assign the query ID in the DOM to a variable 
    newDiv = $("<div>");


//sets query URL for API search
function queryAPI(searchTerm, type) {
    var apiKey = "&api_key=DA5Yp0Ah8i732V4OOBtiVOGYwjDGmHuT", //key provided by giphy api
        limit = '&limit=10', //limit set by hwk instructions
        rating = '&rating=G', //sets rating to G for gif search
        offset = '&offset=' + Math.floor(Math.random() * 1000); //randomizes order of gifs pulled from the first 1000 available
    if (type === "search") {
        return 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + apiKey + limit + offset + rating;
    }
}

//Function for AJAX call
function newGifs(queryURL) {
    //standard AJAX call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);


        if (response.data.length > 0) {

            for (i = 0; i < response.data.length; i++) {

                //build imgs, use src as still image, add attr for data-still, data-animate, data-state (still or animated)
                var img = $('<img>');
                img.attr("src", response.data[i].images.fixed_height_still.url);
                img.attr("data-still", response.data[i].images.fixed_height_still.url);
                img.attr("data-animate", response.data[i].images.fixed_height.url);
                img.attr("data-state", "still");

                //add function with click that swaps states between still and animated
                img.on("click", function () {
                    var thisImg = $(this);
                    var dataState = thisImg.attr("data-state");
                    if (dataState === "still") {
                        thisImg.attr("src", thisImg.attr("data-animate"));
                        thisImg.attr("data-state", "animate");
                    } else {
                        thisImg.attr("src", thisImg.attr("data-still"));
                        thisImg.attr("data-state", "still");
                    }
                });

                //creates new divs for each image that comes through the response
                newDiv = $("<div>");
                newDiv.css("width", response.data[i].images.fixed_height.width); //Adds CSS to format image width
                newDiv.addClass("giphyBox"); //Adds "giphyBox" class to new image

                //if response has no title this is how to handle
                var title = response.data[i].title;
                if (title === "") {
                    title = "<span style='color:red'>No Title Available</span>";
                }
                //if response has no rating this is how to handle
                var rating = response.data[i].rating.toUpperCase()
                if (rating === "") {
                    rating = "<span style='color:red'>Unrated</span>";
                }

                newDiv.html("<p>Title: " + title + "</p><p>Rating: " + rating + "</p>").append(img); //Adds Ratings information to DOM along with image
                newDiv.prependTo('#gif-results'); //inserts 

            }
        }
    });
}

//Eventlistener that adds buttons to DOM using JQuery
$('#add').on("click", function (event) {
    //Standard code needed for dealing with APIs
    event.preventDefault(); 

    var inputValue = queryDOM.val().trim(); //captures the value of the input entered by the user and converts it to a searchable term to send to the API
    newSearch = inputValue.toLowerCase(); // Assigns the inputValue in lowercase format to newSearch variable 

    //checks to see if new search is already in the array. If it does not exist, then it will create a new button.
    if (newSearch !== "" && topicsArray.indexOf(newSearch) == -1) {
        topicsArray.push(queryDOM.val());
        drawButtons();
    }

    //clears the text field
    queryDOM.val("");
});

//Function to draw draws buttons
function drawButtons() {
    buttonsID = $('#btns'), //sets value that hooks into btns ID in the DOM to buttonsID
        buttonsID.empty();//Empty's the #btns in the DOM

    for (let index = 0; index < topicsArray.length; index++) {
        var element = topicsArray[index];
        newButtons = $('<button>'),
            newButtons.val(element).html(element.toUpperCase()).on("click", function () {
                var search = queryAPI(this.value, "search");
                newGifs(search);
            });
        newButtons.appendTo('#btns');

    }
}


//adds the initial buttons on launch of site
drawButtons();