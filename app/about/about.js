app.controller('about', function ($scope, $location, $rootScope) {
    if ($rootScope.headerhide == true) {
      

    } else {
        $location.path("/")
    }
});