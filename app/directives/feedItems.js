var feedItems = angular.module('feedReader.feedItems', ['feedReader.feedServices']);

feedItems.controller('FeedItemsController', ['$scope', 'feedsAPI', function ($scope, feedsAPI) {
  // Use service to get RSS items from $scope.url;
  $scope.feed = {};
  feedsAPI.getFeed($scope.url).then(function (feed) {
    $scope.feed = feed;
  });
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
