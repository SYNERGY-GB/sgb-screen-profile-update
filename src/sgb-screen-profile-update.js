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
            return $scope.checkField($scope.user.username, $scope._screenParams.userRegexp) && 
                   $scope.checkField($scope.user.password, $scope._screenParams.passwordRegexp) && 
                   $scope.checkField($scope.user.email, $scope._screenParams.emailRegexp) && 
                   $scope.user.accept==true;
        }
    
        $scope.next = function () {
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