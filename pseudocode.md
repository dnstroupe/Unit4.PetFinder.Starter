GET All Pets (/api/v1/pets)

Goal: Show a list of all pets.

Start the Server: Use Express.js to start our server.
Create a Route: Make a GET route at /api/v1/pets.
What This Route Does:
Look at our list of pets.
Send back this list to whoever asked (like a web page or Postman).
GET Pet By Name (/api/v1/pets/:name)

Goal: Find and show a pet when we know its name.

Start the Server: Make sure our server is running.
Set Up Route: Have a GET route at /api/v1/pets/:name.
Steps in This Route:
Get the pet's name from the URL.
Look through our pets to find this name.
If we find the pet:
Send back this pet's information.
If we can't find it:
Tell the user that we couldn't find the pet.
GET Pet By Owner's Name (/api/v1/pets/owner)

Goal: Find and show pets that belong to a specific owner.

Server Ready: Ensure our server is on and listening.
Create a Route: Set up a GET route at /api/v1/pets/owner.
Route Functionality:
Take the owner's name from the query (like ?owner=John).
Search for pets with this owner's name.
If pets are found:
Send back a list of these pets.
If no pets are found:
Give a message saying no pets were found for this owner.
Serve Client Homepage (/)

Goal: Display the main webpage.

Activate Server: Use Express.js to have our server running.
Handle Static Files: Tell the server where to find our web pages and scripts.
Home Route:
Set up a route for the home page (/).
When someone visits the home page, the server should show index.html.
Our index.html should have JavaScript to ask for and show our pets data.
