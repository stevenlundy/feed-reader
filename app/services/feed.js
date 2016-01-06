angular.module('feedReader.feedServices', [])
  .factory('feedsAPI', function ($q) {

    var getFeed = function(url) {
      var defer = $q.defer();
      var feed = new google.feeds.Feed(url);
      feed.includeHistoricalEntries();
      feed.setNumEntries(20);
      feed.load(function(result) {
        if(result.error) {
          defer.reject(result.error);
        } else {
          defer.resolve(result.feed);
        }
      });
      return defer.promise;
    };

    return {
      getFeed: getFeed
    };
  });
