angular.module('feedReader.itemSummary', [])
  .directive('itemSummary', function() {
    return {
      restrict: 'E',
      scope: {
        entry: '='
      },
      templateUrl: 'app/views/itemSummary.html',
    };
  });
