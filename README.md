# Microservice A: Random Songs Generator


Clear instructions for how to programmatically REQUEST data from the microservice you implemented. Include an example call. Do not advise your teammate to use your test program or require them to, your teammate must write all of their own code.
Clear instructions for how to programmatically RECEIVE data from the microservice you implemented. Include an example call.
UML sequence diagram showing how requesting and receiving data works. Make it detailed enough that your teammate (and your grader) will understand.

## Setup
1. Clone this repository.
2. Ensure PostgreSQL is installed locally on your computer.
3. Create a database called `songsdb`.
4. Update the `knexfile.js` file's `user` and `password` with your PostgreSQL credentials.
5. Run `npm i` to install necessary dependencies.
6. Run `npx knex migrate:latest` and then `npx knex seed:run` to create and seed the `songs` table.
7. Run `npm run start` to start the microservice.

## Requesting and Receiving Data
| Route | Description | Example Call | Example Return Response |
| ----- | ----------- | ------------ | ----------------------- |
| GET `/song` | Return a song | GET `/song` | `{"id": 1, "title": "Viva La Vida", "artist": "Coldplay"}` |
| GET `/songs` | Return an array of songs | GET `/songs` | `[{"id": 1, "title": "Viva La Vida", "artist": "Coldplay"}, ...]` |
| POST `/songs` | Add a new song and return it as an object  | POST `/songs` with body `{"title": "Guess We're Good", "artist": "CIRCO"}` | `{"id": 16, "title": "Guess We're Good", "artist": "CIRCO"}` |
| DELETE `/songs` | Delete a song | DELETE `/songs` with body `{"id": "1"}` | `{"message": "Song with id 1 deleted successfully."}` |

## Requesting and Receiving Data
When requesting data from this microservice, an example using the Python `requests` library for the GET route would be `response = requests.get('http://localhost:3000/songs')`, then `response.json()` to get the array of songs in JSON format (e.g. `[
	{
		"id": 3,
		"title": "Demons",
		"artist": "Imagine Dragons"
	},
	{
		"id": 4,
		"title": "Boulevard of Broken Dreams",
		"artist": "Green Day"
	},
	{
		"id": 6,
		"title": "Stay",
		"artist": "Blackpink"
	}]`).
The same format can be applied to get one random song: `response = requests.get('http://localhost:3000/song')`, then `response.json()` to receive a JSON object:
`{
    "id": 3,
    "title": "Demons",
    "artist": "Imagine Dragons"
}`.

For the POST and DELETE routes, you will need to send the body with the required fields as JSON data.

POST Example:

Example song data object with required `title` and `artist` fields: `song_data = {
                "title": "Hello",
                "artist": "Adele"
            }`.
This data can then be passed as JSON data using the Python `requests` library: `response = requests.post('http://localhost:3000/songs', json=song_data)`, then `response.json()` to receive a response from the POST call. Example Response:
`{
	"id": 20,
	"title": "Hello",
	"artist": "Adele"
}`.

DELETE Example:

Example song data object with required `id` field: `song_data = {
    "id": "10"
}`.
This data can then be passed as JSON data using the Python `requests` library: `response = requests.delete('http://localhost:3000/songs', json=song_data)`, then `response.json()` to receive a response from the DELETE call. Example Response: 
`{
	"message": "Song with id 10 deleted successfully."
}`.

## UML Diagram

