'use strict';

angular.module('authApp')
  .controller('LoginCtrl',
    function($scope, alert, auth, $auth) {
      $scope.submit = function() {

        $auth.login({
          email: $scope.email,
          password: $scope.password
        })
          .then(function(res) {
            alert('success', 'Login successful!', 'Welcome, ' + res.data.user.email);
          })
          .catch(handleError);
      };

      $scope.authenticate = function(provider) {
        $auth.authenticate(provider).then(function(res) {
          alert('success', 'Login successful!', 'Welcome, ' + res.data.user.displayName);
        }, handleError);
      }

      function handleError(err) {
        alert('warning', 'Something went wrong ', err.message);
      }
});