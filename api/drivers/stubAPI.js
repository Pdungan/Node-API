import _ from 'lodash';

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
          },];

     const stubAPI = {
         getAll: () => {
            return drivers;
          },
         add: (d,t,a,c) => {
              if (!(d && t && a && c)) return false;
              let id = 1;
              const last = _.last(drivers);
              if (last) {
                 id = last.id + 1;
              }
              let len = drivers.length;
              let newLen = drivers.push({
                  'id': id,
                 'dname': d, 'team': t, 'aka':a , 'nascarPoints': [], 'carNumber': c});
               return newLen > len?id:-1;
              },
         carNumber: (id) => {
             const index = _.findIndex(drivers,
                   (post) => {
                    return drivers.id == id;
                  } );
              return false;
           },


         getDriver: (id) => {
            let result = null;
            const index = _.findIndex(drivers,
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                result = drivers[index];
                    }
            return result;
            },



  addRace: (driverId, c) => {
            let result = false;
            const driver = stubAPI.getDriver(driverId);
            let id = 1;
            if (driver) {
            const last = _.last(driver.race);
            if (last) {
               id = last.id + 1;
            }
            driver.race.push({'id': id,
                     'race': c} );
            result = true;
            }
          return result;
            },
 };

    export default stubAPI;
