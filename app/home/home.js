var app = angular.module('git');
app.controller('home', function ($scope, $location, $http, $rootScope, $timeout) {
    console.time('t');

    if ($rootScope.headerhide) {
      
    } else {
        $location.path("/");
    }

    /* $scope.detail = function (id) {
         $rootScope.$broadcast('eventName', {
             id: id
         });
         $location.path("/detail");
     }*/

    $http.get("http://localhost:3000/home")
        .then(function (response) {
            $scope.obj = response.data;
        console.log($scope.obj);
        
        });
    $scope.detail = function (obj) {
        console.log(obj);

        $timeout(function () {
            $rootScope.$broadcast('eventName', {
                obj: obj
            });
        }, 100);
        $location.path("/detail");
    };

    /* $scope.$on('starter1',function(event,data){
         alert(2);
            $rootScope.$broadcast('starter2',null,alert(3));
       }) */

});