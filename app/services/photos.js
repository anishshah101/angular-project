app.factory('photos', ['$http', function($http) {
  return $http.get('https://api.myjson.com/bins/351nw')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
