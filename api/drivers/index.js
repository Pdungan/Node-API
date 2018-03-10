import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router();

// get all posts
router.get('/', (req, res) => {
  const drivers = stubAPI.getAll();
  res.send({drivers: drivers});
});


// Add a post
router.post('/', (req, res) => {
    const newDriver = req.body;

    if (newDriver && stubAPI.add(newDriver.dname, newDriver.team, newDriver.aka, newDriver.carNumber)) {
         return res.status(201).send({message: 'Driver Created'});
    }
    return res.status(400).send({message: 'Unable to find Driver in request.'});
});

// get a post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = stubAPI.getdriver(id);

       if (post) {
               return res.status(200).send(post);
              }
              return res.status(404).send({message: `Unable to find Driver ${id}`});
});


//add NASCAR Points
router.post('/:id/nascarPoints', (req, res) => {
     const id = req.params.id;
     const newnascarPoints = req.body;
     

    if (newnascarPoints && stubAPI.addnascarPoints(id, newnascarPoints.points)) {

                 return res.status(200).send({message: `Driver ${id} nascarPoints added`});
            }
            return res.status(404).send({message: `Unable to find Driver ${id}`});
});


export default router;
