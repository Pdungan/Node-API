import express from 'express';
import Drivers from './driverModel';
import _ from 'lodash';
//import j2xml from 'json2xml';

const router = express.Router();// eslint-disable-line

router.get( (req, res) => {
  Drivers.find((err, drivers) => {
    if (err) return handleError(res, err);
    return res.json(200,drivers);
  });
});



// Add a Driver
router.post('/', (req, res) => {
     const newDriver = req.body;
    if (newDriver) {
           Drivers.create(newDriver, (err, driver) => {
              if (err) return handleError(res, err);
                  return res.status(201).json(driver);
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
        res.format({
            'application/xml': function(){
              var driverSimple = driver.toObject();
              return res.status(201).send(j2x({driver: driverSimple}));}
            ,'default': function(){return res.status(201).json(driver);}

          });
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
    return res.status(201).json(race);
        });
  });
});




// update a Driver

router.put('/:id',(req, res) =>{
  if (req.body._id) delete req.body._id;
  Drivers.findById(req.params.id, (err, driver) =>{
    if (err) return handleError(res, err);
    if(!driver) return res.send(404);
    const updated = _.merge(driver, req.body);
    updated.save((err) => {
     if (err) return handleError(res, err);
     return res.json(201, driver);

      });
  });
});

// Delete a Driver
router.delete('/:id', (req, res) => {
  Drivers.findById(req.params.id, (err, driver) => {
    if (err) return handleError(res, err);
    if (!driver) return res.send(404);
    driver.remove(function(err) {
      if (err) return handleError(res, err);
      return res.status(204).json(driver);
    });
  });
});


function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;
