var feedServices = angular.module('feedReader.feedServices', []);
feedServices.factory('feedsAPI', function ($q) {

  var getFeed = function(url) {
    var defer = $q.defer();
    var feed = new google.feeds.Feed(url);
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
