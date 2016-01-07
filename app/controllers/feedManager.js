angular.module('feedReader.feedManager', ['ui.bootstrap'])
  .controller('feedManagerController', ['$scope', '$location', function ($scope, $location) {
    $scope.feeds = [
      {
        name: 'TEDTalks',
        url: 'http://feeds.feedburner.com/tedtalks_video'
      },
      {
        name: 'XKCD',
        url: 'http://xkcd.com/rss.xml'
      },
      {
        name: 'The Guardian',
        url: 'http://www.theguardian.com/uk/rss'
      },
      {
        name: 'Bad Feed',
        url: 'google.com'
      }
    ];
    $scope.selectedFeed = $scope.feeds[0];
    $scope.setFeed = function(feed) {
      $scope.selectedFeed = feed;
    };

  }]);
