(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-profile-update', ['megazord'])
    .controller('sgb-screen-profile-update-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams',
                function ($scope, _router, _screen, _screenParams, $stateParams) {

        _screen.initialize($scope, _screenParams);
        $scope.data = $stateParams.data; 
        $scope.user = {
            username: '',
            password: '',
            email: ''
        }; 

        $scope.checkField = function (field,regexp) {
            if (field===undefined || !regexp) return true; 
            var exp = new RegExp(regexp);
            return (exp.test(field));
        }

        $scope.checkPassword = function(field, regexp) {
            if (!$scope._screenParams.onScreenValidation) return; 
            $scope.passwordIcon=$scope.checkField(field,regexp);
            $scope.passwordIcon=$scope.user.password.length==0?undefined:$scope.passwordIcon; 
        }

        $scope.checkUsername = function(field,regexp) {
            if (!$scope._screenParams.onScreenValidation) return; 
            $scope.userIcon = $scope.checkField(field,regexp);
            $scope.userIcon=$scope.user.username.length==0?undefined:$scope.userIcon;        
        }

        $scope.checkEmail = function(field, regexp) {
            if (!$scope._screenParams.onScreenValidation) return; 
            $scope.emailIcon = $scope.checkField(field,regexp);
            $scope.emailIcon=$scope.user.email.length ==0?undefined: $scope.emailIcon;            
        }


        $scope.formValidated = function () {
            return $scope.checkField($scope.user.username, $scope._screenParams.usernameValidation) && 
                   $scope.checkField($scope.user.password, $scope._screenParams.passwordValidation) && 
                   $scope.checkField($scope.user.email, $scope._screenParams.emailValidation) && 
                   $scope.user.accept==true;
        }
    
        $scope.goTo = function () {
            if ($scope.formValidated()) {
                _router.fireEvent(
                    {
                     name: 'goTo', 
                     params: {}
                    }
                );
            }
        }

        $scope.goToTerms = function() {
            _router.fireEvent(
                    {
                     name: 'goToTerms', 
                     params: {}
                    }
            );
        }

    }]);

},{}]},{},[1]);
