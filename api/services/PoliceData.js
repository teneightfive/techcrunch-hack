// PoliceData.js

module.exports = {
  getCrimes: function (lat, lng, date) {
    var http = require('http');
    var Q = require('q');
    var deferred = Q.defer();
    var options = {
      hostname: 'data.police.uk',
      port: '80',
      path: '/api/crimes-at-location?lat=' + lat + '&lng=' + lng + '&date=' + date,
      method: 'GET',
      headers: {}
    };
    var data = {};

    http.request(options, function (res) {
      res.on('data', function(chunk){
        data = JSON.parse(chunk.toString());
      });

      res.on('end', function(){
        deferred.resolve(data);
      });
    }).end();

    return deferred.promise;
  }
};
