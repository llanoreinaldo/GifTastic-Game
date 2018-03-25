//Establishes initial array of topics displayed
var topicsArray = ["batman", "wonder woman", "superman", "spiderman", "iron man", "thor", "hulk", "black widow", "captain america", "black panther"];

//adds buttons to DOM using JQuery
$('#add').on("click", function (event) {
    event.preventDefault();
    let queryText = $('#query');
    let userInput = queryText.val().trim();
    userInput = userKey.toLowerCase();
    if (userInput !== "" && topicsArray.indexOf(userInput) == -1) {
        topicsArray.push(queryText.val());
        drawButtons();
    }

    //clears the text field
    $('#query').val("");
});

//draws buttons
function drawButtons() {
    $('#btns').empty();
    for (let i = 0; i < topicsArray.length; i++) {
       const element = topicsArray[i];
        $('<button>').val(element).html(element.toUpperCase()).on("click", function () {
            let search = buildQuery(this.value, "search");
            newGifs(search);

        });
        $('<button>').appendTo('#btns');

    }
}
//deletes the last button
$('#delete').on("click", function (event) {
    event.preventDefault();
    topicsArray.pop();
    drawButtons();
});

//sets query URL for API search
function buildQuery(searchTerm, type) {
    var apiKey = "&api_key=DA5Yp0Ah8i732V4OOBtiVOGYwjDGmHuT",
        limit = '&limit=20',
        rating = '&rating=PG',
        offset = '&offset=' + Math.floor(Math.random() * 100);
    //in case I want to change my query to a random instead of search later
    if (type === "search") {
        return 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + apiKey + limit + offset + rating;
    }
}

//function for ajax call
function newGifs(queryURL) {

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        //build imgs, use src as still image, add attr for data-still, data-animate, data-state (still or animated)
        //add function with click that swaps states between still and animated
        if (response.data.length > 0) {

            for (i = 0; i < response.data.length; i++) {

                $('<img>').attr("src", response.data[i].images.fixed_height_still.url)
                $('<img>').attr("data-still", response.data[i].images.fixed_height_still.url)
                $('<img>').attr("data-animate", response.data[i].images.fixed_height.url)
                $('<img>').attr("data-state", "still");
                $('<img>').on("click", function () {
                    dataState = $(this).attr("data-state");
                    if (dataState === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
                $('<div>').css("width", response.data[i].images.fixed_height.width);
                $('<div>').addClass("imgBox");
                $('<div>').html("<p>Rating: " + response.data[i].rating + "</p>").append(img);
                $('<div>').prependTo('#gif-results');
                console.log(response)
            }
        }
    }); 
}

//adds initial buttons
drawButtons();