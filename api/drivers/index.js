import express from 'express';
import Drivers from './driverModel';

const router = express.Router();// eslint-disable-line

router.get('/', (req, res) => {
  Drivers.find((err, drivers) => {
    if (err) return handleError(res, err);
    return res.send(drivers);
  });
});

// Add a Driver
router.post('/', (req, res) => {
     const newDriver = req.body;
    if (newDriver) {
           Driver.create(newDriver, (err, driver) => {
              if (err) return handleError(res, err);
                 return res.status(201).send({driver});
          });
      } else {
         return handleError(res, err);
      }
});


// get Driver
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Drivers.findById(id, (err, driver) => {
        if (err) return handleError(res, err);
        return res.status(201).json(driver);
  } );
});

// add Race
router.post('/:id/race', (req, res) => {
   const id = req.params.id;
   const race = req.body;
   Drivers.findById(id, (err, driver)=>{
     if (err) return handleError(res, err);
        driver.race.push(race);
        driver.save((err) => {
          if (err) return handleError(res, err);
    return res.status(201).send({race});
        });
  });
});


function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;
