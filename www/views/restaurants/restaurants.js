angular.module('App')
    .controller('RestaurantsController', function ($scope, $http) {
        $scope.page = 0;
        $scope.total = 1;
        $scope.restaurants = [];

        $scope.getRestaurants = function () {
            $scope.page++;
            $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?page=' + $scope.page)
                .then(function (res) {
                    angular.forEach(res.data.restaurants, function (restaurant) {
                        $scope.restaurants.push(restaurant);
                    });
                    $scope.total = res.totalPages;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                }, function (err) {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    console.log(err);
                });
        };

        $scope.getRestaurants();
        
    });