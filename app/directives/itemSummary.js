angular.module('feedReader.itemSummary', ['angularMoment'])
  .directive('itemSummary', function() {
    return {
      restrict: 'E',
      scope: {
        entry: '=',
        name: '@',
        index: '@'
      },
      templateUrl: 'app/views/itemSummary.html',
    };
  });
