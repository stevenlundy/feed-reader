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
        name: 'Radio Lab',
        url: 'http://feeds.wnyc.org/radiolab'
      },
      {
        name: 'Bad Feed',
        url: 'google.com'
      }
    ];

    $scope.setFeed = function(feed) {
      $scope.selectedFeed = feed;
    };

    $scope.$on('$locationChangeSuccess', function(e, newUrl, oldUrl) {
      var foundFeed = false;
      if($location.path().split('/')[1]) {
        var feedName = $location.path().split('/')[1];
        $scope.feeds.forEach(function(feed) {
          if(feed.name === feedName) {
            $scope.setFeed(feed);
            foundFeed = true;
          }
        });
      } else {
        $scope.setFeed($scope.feeds[0]);
        foundFeed = true;
      }
      if(!foundFeed){
        // Redirect to home page
        $location.path('');
      }

    });

  }]);
