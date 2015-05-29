'use strict';

angular.module('authApp')
  .controller('LoginCtrl',
    function($scope, alert, auth) {
      $scope.submit = function() {

        auth.login($scope.email, $scope.password)
          .success(function(res) {
            alert('success', 'Login successful!', 'Welcome, ' + res.user.email);
          })
          .error(function(err) {
            alert('warning', 'Something went wrong ', err.message);
          });
      };
    });