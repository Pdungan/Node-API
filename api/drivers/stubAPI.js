import _ from 'lodash';

  const drivers = [
         {id: 1,
            dname: 'Joey Logano',
            team: 'Chevrolet',
            aka: 'Sliced Bread',
            nascarPoints: [],
            carNumber: 32,
          },
         {
            id: 2,
            dname: 'Ryan Blaney',
            team: 'Ford',
            aka: 'junior',
            nascarPoints: [],
            carNumber: 12,
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
                    return post.id == id;
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



         addPoints: (driverId, c, n) => {
            let result = false;
            const post = stubAPI.getPost(driverId);
            let id = 1;
            if (post) {
            const last = _.last(post.nascarPoints);
            if (last) {
               id = last.id + 1;
            }
            post.nascarPoints.push({'id': id,
                     'nascarPoints': c,} );
            result = true;
            }
          return result;
            },
 };

    export default stubAPI;
