'use strict';

var homepageApp = angular.module('homepageApp', ['homepageControllers', 'homepageDirectives']);

var homepageDirectives = angular.module('homepageDirectives', []);

homepageDirectives.directive('ngRepeatFinished', ['$timeout',
    function ngRepeatFinished($timeout) {
        var directive = {
            restrict: 'A',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope[attrs.ngRepeatFinished]();
                });
            }
        }
    }]);

var homepageControllers = angular.module('homepageControllers', []);

homepageControllers.controller('HomeCtrl', ['$scope', '$sce', '$http',
    function ($scope, $sce, $http) {
        $scope.isArray = angular.isArray;
        
        $scope.getHTML = function (lines) {
            var s = '';
            for (var i in lines) {
                s += lines[i];
            }
            return $sce.trustAsHtml(s);
        };
        
        $scope.repeatFinished = function() {
            jq('#googleSearch').focus();
            jq('#grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 250,
                gutter: 20
            });
        };

        $http.get('mycontent.json').then(function (response) {
            $scope.boxes = response.data;
        });
    }]);
