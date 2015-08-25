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