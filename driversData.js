import driversModel from './api/drivers/driverModel';


 const drivers = [
         {
            dname: 'Joey Logano',
            team: 'Chevrolet',
            aka: 'Sliced Bread',
            carNumber: 32,
	    race:[],
          },
         {
            dname: 'Ryan Blaney',
            team: 'Ford',
            aka: 'junior',
            carNumber: 12,
	    race:[],
          },

 {
            dname: 'William Clyde',
            team: 'Chevrolet',
            aka: 'Chase',
            carNumber: 9,
	    race:[],
          },
 {
            dname: 'Michael McDowell',
            team: 'Ford',
            aka: 'M Mc',
            carNumber: 34,
	    race:[],
          },
 {
            dname: 'David Ragan',
            team: 'Ford',
            aka: 'Rookie',
            carNumber: 38,
	    race:[],
          },
 {
            dname: 'Martin Truex Jr',
            team: 'Toyota',
            aka: 'junior',
            carNumber: 18,
	    race:[],
          },
];

export const loadDrivers = () => {
driversModel.find({}).remove(function() {
    driversModel.collection.insert(drivers, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Driver Data`);
    } else {
      console.info(`Data on ${drivers.length} drivers were successfully stored.`);
     }
  });
});
};
