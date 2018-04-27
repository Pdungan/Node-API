import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; // eslint-disable-line






describe('Drivers API unit test', function() {
this.timeout(120000);
it('should return collection of JSON documents', function(done) {
  supertest(app)
  .get('/api/drivers')
<<<<<<< HEAD
    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.c2hhbmU.frZpcXx9xrTuE01f8NfZ57-GV6vnbTlP8QnSA_HTQBQ')
=======
>>>>>>> 80214396e992c5c2ced11f41b3da59a807c4d9df
  .expect('Content-type', /json/)
  .expect(200)
  .end(function(err, res) {

      res.status.should.equal(200);
      done();
  });
});
});



 // add a Driver
  it('should add a driver', function(done) {
    // post to /api/drivers
    supertest(app)
    .post('/api/drivers')
<<<<<<< HEAD
    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.c2hhbmU.frZpcXx9xrTuE01f8NfZ57-GV6vnbTlP8QnSA_HTQBQ')
=======
>>>>>>> 80214396e992c5c2ced11f41b3da59a807c4d9df
    .send({ dname: 'Tyler Dillon', team: 'Chevrolet',aka: 'Ty', carNumber: 13,})
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      res.status.should.equal(201);
      res.body.should.have.property('_id');
      res.body.dname.should.equal('Tyler Dillon');
      done();
    });
  });


<<<<<<< HEAD

// update a driver
=======
>>>>>>> 80214396e992c5c2ced11f41b3da59a807c4d9df
it('should update a driver', function(done) {
    const superserver = supertest(app);
    superserver
    .get('/api/drivers')
<<<<<<< HEAD
    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.c2hhbmU.frZpcXx9xrTuE01f8NfZ57-GV6vnbTlP8QnSA_HTQBQ')
    .expect('Content-type', /json/)
    .expect(200) 
=======
    .expect('Content-type', /json/)
    .expect(200) // This is HTTP response
>>>>>>> 80214396e992c5c2ced11f41b3da59a807c4d9df
    .end(function(err, res) {
        const id = res.body[0]._id;
        superserver
	.put('/api/drivers/'+id)
	.send({carNumber: 22})
	.expect('Content-type', /json/)
    	.expect(201)
    	.end(function(err, res) {
    	 res.status.should.equal(201);
     	 res.body.carNumber.should.equal(22);
     	 done();
     });
            }
          );
     });




  // delete a contact
  it('should delete a driver', function(done) {
    const superserver = supertest(app);
    superserver
    .get('/api/drivers')
<<<<<<< HEAD
    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.c2hhbmU.frZpcXx9xrTuE01f8NfZ57-GV6vnbTlP8QnSA_HTQBQ')
    .expect('Content-type', /json/)
    .expect(200) 
=======
    .expect('Content-type', /json/)
    .expect(200) // This is HTTP response
>>>>>>> 80214396e992c5c2ced11f41b3da59a807c4d9df
    .end(function(err, res) {
        const id = res.body[0]._id;
        superserver
            .delete('/api/drivers/'+id)
            .expect('Content-type', /json/)
<<<<<<< HEAD
            .expect(200) 
=======
            .expect(200) // This is HTTP response
>>>>>>> 80214396e992c5c2ced11f41b3da59a807c4d9df
            .end(function(err, res) {
              res.status.should.equal(204);
              done();
            });
<<<<<<< HEAD

=======
>>>>>>> 80214396e992c5c2ced11f41b3da59a807c4d9df
            }
          );
     });
