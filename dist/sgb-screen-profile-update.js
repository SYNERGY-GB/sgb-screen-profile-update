(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-profile-update', ['megazord'])
    .controller('sgb-screen-profile-update-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams','$timeout',
                function ($scope, _router, _screen, _screenParams, $stateParams, $timeout) {
        _screen.initialize($scope, _screenParams);
        $scope.data = $stateParams.data; 
        $scope.user = {};
        //$scope.userIcon = false; 

        $scope.forgotPass = function () {
            _router.fireEvent(
                {
                 name: 'forgotPassword', 
                 params: {}
                }
            );
        }

        $scope.checkPassword = function() {
            //Dummy implementation
            $timeout(function() {
                $scope.passwordIcon=$scope.user.password.length>3;  
                $scope.passwordIcon=$scope.user.password.length==0?undefined:$scope.passwordIcon; 
            }, 800 ); 
        }

        $scope.checkUsername = function() {
            //Dummy implementation
            $timeout(function() {
                $scope.userIcon=$scope.user.username.length>3;  
                $scope.userIcon=$scope.user.username.length==0?undefined:$scope.userIcon; 
            }, 800 );        
        }

        $scope.checkEmail = function() {
            //Dummy implementation
            $timeout(function() {
                $scope.emailIcon=$scope.user.email.length>3;  
                $scope.emailIcon=$scope.user.email.length==0?undefined:$scope.emailIcon; 
            }, 800 ); ;             
        }

        //Add your controller logic here.
    }]);

},{}]},{},[1]);
