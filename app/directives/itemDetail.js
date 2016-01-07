angular.module('feedReader.itemDetail', ['feedReader.mediaGroupDisplay'])
  .directive('itemDetail', function() {
    return {
      restrict: 'E',
      scope: {
        entry: '='
      },
      templateUrl: 'app/views/itemDetail.html',
    };
  })
  .filter('to_trusted', ['$sce', function($sce){
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);
