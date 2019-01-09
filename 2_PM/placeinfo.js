/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const client  = require('./google_api')

// fetch('https://maps.googleapis.com/maps/api/place/details/json?&key=AIzaSyBXGSsSDuDecaYMwfAbE54T0VzM5Sm6cbo&placeid=ChIJ0T7l6EJ344kRmlihQjBlHvk')
//   .then(response => response.json())
//   .then(data => console.log(data))

client.findPlace({ input: process.argv[2] , inputtype: 'textquery' })
.asPromise()
then((response) => { 
    const placeid = respnse.json.candidates[0].place_id
})