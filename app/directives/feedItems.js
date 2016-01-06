var feedItems = angular.module('feedReader.feedItems', []);

feedItems.controller('FeedItemsController', ['$scope', function ($scope) {
  // Use service to get RSS items from $scope.url;
}])
.directive('feedItems', function() {
  return {
    restrict: 'E',
    controller: 'FeedItemsController',
    scope: {
      url: '@'
    },
    templateUrl: 'app/views/feedItems.html',
  };
})
