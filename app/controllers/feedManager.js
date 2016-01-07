angular.module('feedReader.feedManager', [])
  .controller('feedManagerController', ['$scope', function ($scope) {
    $scope.feeds = [
      {
        name: "TEDTalks",
        url: "http://feeds.feedburner.com/tedtalks_video"
      },
      {
        name: "XKCD",
        url: "http://xkcd.com/rss.xml"
      },
    ];
    $scope.feedUrl = $scope.feeds[0].url;
  }]);
