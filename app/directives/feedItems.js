angular.module('feedReader.feedItems', ['feedReader.feedServices', 'feedReader.itemSummary', 'feedReader.itemDetail'])
  .controller('FeedItemsController', ['$scope', 'feedsAPI', function ($scope, feedsAPI) {
    // Use service to get RSS items from $scope.url;
    $scope.feed = {};
    feedsAPI.getFeed($scope.url).then(function (feed) {
      $scope.feed = feed;
    });

    $scope.selected;
    $scope.selectEntry = function(index) {
      $scope.selected = index;
    };
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
  });
