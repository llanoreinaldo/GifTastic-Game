
var apiKey = "DA5Yp0Ah8i732V4OOBtiVOGYwjDGmHuT";
var searchTerm = ["puppies", "kittens"]
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm[0] + "&api_key=" + apiKey + "&limit=5";


$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);
    })

