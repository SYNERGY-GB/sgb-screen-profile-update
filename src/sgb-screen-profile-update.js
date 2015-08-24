'use strict';

angular.module('sgb-screen-profile-update', ['megazord'])
    .controller('sgb-screen-profile-update-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams','$timeout',
                function ($scope, _router, _screen, _screenParams, $stateParams, $timeout) {
        _screen.initialize($scope, _screenParams);
        $scope.data = $stateParams.data; 
        $scope.user = {};

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

    }]);