# weather-dashboard
Coursework Assignment No. 5 for Coding Bootcamp

## Getting information from weather API
After setting up an API key I defined a variable, queryURL, as the URL for the API. I used another variable in the URL that contained the user input of city name. I then used an ajax function to get the information from this url and created an additional function that logs the information in the console as an object. I repeated this process for the second API used for the 5 day forecast with the minor change of using a for loop to display all 5. I included all of these functions within a single onclick function associated with the search button.

## Bootstrap
I implemented bootstrap into my document and firstly formatted the search bar and search button into a navbar. Next I created two cards one for each of the API's. I wrote javascript code such that the desired information from the objects from the APIs would display as desired in these cards once the search button had been pressed.

## Moment.js
I implemented moment.js into my document and retrieved the current date before adding this to the text content of one of the cards created.