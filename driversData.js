import driversModel from './api/drivers/driverModel';


 const drivers = [
         {id: 1,
            dname: 'Joey Logano',
            team: 'Chevrolet',
            aka: 'Sliced Bread',
            nascarPoints: 0,
            carNumber: 32,
	    race:[],
          },
         {
            id: 2,
            dname: 'Ryan Blaney',
            team: 'Ford',
            aka: 'junior',
            nascarPoints: 0,
            carNumber: 12,
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
