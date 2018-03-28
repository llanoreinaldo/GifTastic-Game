# GifTastic-Game
https://llanoreinaldo.github.io/GifTastic-Game/

# About the Project

This project uses the GIPHY API to make a dynamic web page that populates with gifs of your choice. It calls the GIPHY API and use JavaScript and jQuery to change the HTML of the site.  The site is a superhero themed site.

Your app should take the topics in this array and create buttons in your HTML.
   * Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

 Each request should ADD 10 gif's to the page, NOT overwrite the existing gifs