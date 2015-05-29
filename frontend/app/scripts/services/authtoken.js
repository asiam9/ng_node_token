'use strict';

angular.module('authApp')
  .factory('authToken', function($window) {
      var storage = $window.localStorage;
      var cachedToken;
      var userToken = 'userToken';
      var isAuthenticated = false;
      var authToken = {
        setToken: function(token) {
          cachedToken = token;
          storage.setItem(userToken, token);
          isAuthenticated = true;
        },

        getToken: function() {
          if(!cachedToken)
            cachedToken = storage.getItem(userToken);
          return cachedToken;
        },

        isAuthenticated: function() {   // returns true if we get something from token
          return !!authToken.getToken();        // !! = takes result casts to bool then inverses
        },

        removeToken: function() {
          cachedToken = null,
          storage.removeItem(userToken);
          isAuthenticated = false;
        }
      };
      return authToken;
});