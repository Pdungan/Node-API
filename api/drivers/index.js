import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router();

// get all driver
router.get('/', (req, res) => {
  const drivers = stubAPI.getAll();
  res.send({drivers: drivers});
});


// Add a driver
router.post('/', (req, res) => {
    const newDriver = req.body;

    if (newDriver && stubAPI.add(newDriver.dname, newDriver.team, newDriver.aka, newDriver.carNumber)) {
         return res.status(201).send({message: 'Driver Created'});
    }
    return res.status(400).send({message: 'Unable to find Driver in request.'});
});

// get a Driver
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const driver = stubAPI.getDriver(id);

       if (driver) {
               return res.status(200).send(driver);
              }
              return res.status(404).send({message: `Unable to find Driver ${id}`});
});


//add race
router.post('/:id/race', (req, res) => {
     const id = req.params.id;
     const newRace = req.body;
     

    if (newRace && stubAPI.addRace(id, newRace.race)) {

                 return res.status(200).send({message: `Race have been added for driver ${id} `});
            }
            return res.status(404).send({message: `Unable to find Driver ${id}`});
});


export default router;
