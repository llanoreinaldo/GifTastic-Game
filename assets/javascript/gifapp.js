
//Create key global variables needed to perform tasks

//sets API Key as given by the provider
var apiKey = "DA5Yp0Ah8i732V4OOBtiVOGYwjDGmHuT"; 

//Sets search terms to be initially loaded the page. 
var topics = ["batman", "wonder woman", "superman", "spiderman", "iron man", "thor", "hulk", "black widow", "captain america", "black panther"]; 

//sets url to query as part of GET.
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics[0] + "&api_key=" + apiKey + "&limit=10"; 


//Standard AJAX code used to GET response from API.
$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Console Logs the queryURL
      console.log(queryURL);

      // Console Logs the resulting object
      console.log(response);
    })


//Draws button in the DOM for initial page load



//Adds button in the DOM for new user search




/*

2. Your app should take the topics in this array and create buttons in your HTML.
   * Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

1. Ensure your app is fully mobile responsive.

2. Allow users to request additional gif's to be added to the page.
   * Each request should ADD 10 gif's to the page, NOT overwrite the existing gifs.

3. List additional metadata (title, tags, etc) for each gif in a clean and readable format.

4. Include a 1-click download button for each gif, this should work across device types.

5. Integrate this search with additional api's such as OMDB, or Bands in Town. Be creative and build something you are proud to showcae in your portfolio

6. Allow users to add their favorite gif's to a `favorites` section.
   * This should persist even when they select or add a new topic.
   * If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies). 

*/