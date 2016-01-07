angular.module('feedReader.feedItems', ['feedReader.feedServices', 'feedReader.itemSummary', 'feedReader.itemDetail'])
  .controller('FeedItemsController', ['$scope', 'feedsAPI', function ($scope, feedsAPI) {
    $scope.getFeeds = function(){
      // Use service to get RSS items from $scope.url;
      $scope.feed = {};
      $scope.selected = null;
      $scope.error = null;
      feedsAPI.getFeed($scope.url).then(function (feed) {
        $scope.feed = feed;
        $scope.feed.entries.forEach(function(entry) {
          entry.thumbnail = getThumbnail(entry);
        });
      }).catch(function (error) {
        $scope.error = 'There\'s something wrong with your feed. Please check the url or try reloading the page.';
      });
    };

    $scope.$watch('url', function(){
      $scope.getFeeds();
    });

    var getThumbnail = function(entry) {
      // Find first image in any mediaGroup item
      // This is not necessary for the TED video feed
      // where the thumbnail is always at entry.mediaGroups[0].contents[0].thumbnails[0].url,
      // But it makes it more general
      for (var i = 0; i < (entry.mediaGroups || []).length; i++) {
        for (var j = 0; j < (entry.mediaGroups[i].contents || []).length; j++) {
          for (var k = 0; k < (entry.mediaGroups[i].contents[j].thumbnails || []).length; k++) {
            if(entry.mediaGroups[i].contents[j].thumbnails[k].url) {
              return entry.mediaGroups[i].contents[j].thumbnails[k].url
            }
          }
        }
      }

      // Find first image in content
      var pattern = /<img\b[^>]+?src\s*=\s*['"]?([^\s'"?#>]+)/;
      var images = entry.content.match(pattern);
      if (images) {
        return images[1];
      }

    };

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
