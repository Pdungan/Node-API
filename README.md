# Node-API
API For Web Services

the following API stores information on NASCAR drivers

the app stores a drivers name, the team that they deliver for, the nickname that they are also known as, the race number that is displayed on their car. This data is stored in the following format witch is governed by a schema that is detailed in the driversModel.js file(WebServicesProject/API/Drivers). 
  {
            dname: 'Joey Logano',
            team: 'Chevrolet',
            aka: 'Sliced Bread',
            carNumber: 32,
    race[],
       },
data is stored on each race a driver participates in and what position the finish in that race. This data is nested within the driver details as follows.
  {
        race: [ {
                race: ‘Datona 500’,
                finish: 1}]
        dname : ‘Joey Logano’,
        team: ‘Chevrolet’,
        aka: ‘Sliced Bread’,
        carNumber: 32,  },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
the user will be able to retreave all drivers that are currently storied with in the API by using a GET with the following URI http://localhost:8080/api/drivers.

If the information of an individual driver car is retrieved by using a GET along with there individual ID such as the following
http://localhost:8080/api/drivers/5aabd7b09b9ebd179e43b5ab.

A drivers details can also be updated using PUT the user enters the desired data they wished to update into the body of PUT along with their individual ID of the driver in the URI such as the following  http://localhost:8080/api/drivers/5aabd7b09b9ebd179e43b5ab.

The user can also enter the race a driver entered along with the position that the driver finished in that race using a POST the name of the race and the passion that the driver finished is entered into the body of the POST and the individual ID of the driver is used in the URI followed by /race such as follows http://localhost:8080/api/drivers/5aabd7b09b9ebd179e43b5ab/race.

To remove a driver the user can use the DELETE along with the driver's individual ID such as follows http://localhost:8080/api/drivers/5aabd7b09b9ebd179e43b5ab.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

the following are the validations used within the API 

because there can only be 43 cars in any one race a finish must be between 1 and 43.
finish:{type: Number,min: 1, max: 43,required: true},

cars can only have numbers between 1 and 100 on their cars.
carNumber:  {type: Number,  min: 1,max: 100,required: true},


there are only 3 teams that drivers can drive for and if one of these teams are entered an error given

DriverSchema.path('team').validate(function (team) {
    if(team === "Ford"||team === "Toyota" ||team === "Chevrolet"){
        return true;
    }
    return false;

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


This API is connected to cloud-based servers MLab using MongoDB. The npm module mongoose is used as middleware to alow the API communicate with MongoDB and save/store data in a MongoDB format

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

This API uses the npm module json2xml to allow the GET A Driver function to return to JSON or XML if depending on which format is requested by the browser. 

this module can be found at the following URL https://www.npmjs.com/package/json2xml









