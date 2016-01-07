angular.module('feedReader.feedManager', [])
  .controller('feedManagerController', ['$scope', function ($scope) {
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
    $scope.feedUrl = $scope.feeds[0].url;
  }]);
