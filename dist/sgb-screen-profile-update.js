(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-profile-update', ['megazord'])
    .controller('sgb-screen-profile-update-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams','$timeout',
                function ($scope, _router, _screen, _screenParams, $stateParams, $timeout) {
        _screen.initialize($scope, _screenParams);
        $scope.data = $stateParams.data; 
        $scope.user = {}; 
    
        $scope.next = function () {
            _router.fireEvent(
                {
                 name: 'nextScreen', 
                 params: {}
                }
            );
        }

        $scope.checkField = function (field,regexp) {
            if(regexp) {
                var exp = new RegExp(regexp);
                return (exp.test(field));
            }
            return true; 
        }

        $scope.checkPassword = function(field, regexp) {
            
            //$timeout(function() {
                $scope.passwordIcon=$scope.checkField(field,regexp);
                $scope.passwordIcon=$scope.user.password.length==0?undefined:$scope.passwordIcon; 
            //}, 800 ); 
        }

        $scope.checkUsername = function(field,regexp) {
            
            //$timeout(function() {
                $scope.userIcon = $scope.checkField(field,regexp);
                $scope.userIcon=$scope.user.username.length==0?undefined:$scope.userIcon; 
            //}, 800 );        
        }

        $scope.checkEmail = function(field, regexp) {
            //$timeout(function() {
                $scope.emailIcon = $scope.checkField(field,regexp);
                $scope.emailIcon=$scope.user.email.length ==0?undefined: $scope.emailIcon;
            //}, 800 ); ;             
        }

    }]);

},{}]},{},[1]);
