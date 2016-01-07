angular.module('feedReader.itemSummary', ['angularMoment'])
  .directive('itemSummary', function() {
    return {
      restrict: 'E',
      scope: {
        entry: '='
      },
      templateUrl: 'app/views/itemSummary.html',
    };
  });
