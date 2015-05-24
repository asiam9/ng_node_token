'use strict';

angular.module('authApp')
  .controller('RegisterCtrl',
    function ($scope, $http, $rootScope, alert) {
      $scope.submit = function() {
        var url = 'http://localhost:3000/register';
        var user = {
          email: $scope.email,
          password: $scope.password
        };
        $http.post(url, user)
          .success(function(res) {
            alert('success', 'Success', 'You are now registered');
          })
          .error(function(err) {
            alert('warning', 'Oops ', 'could not register');
          });
      }
});
