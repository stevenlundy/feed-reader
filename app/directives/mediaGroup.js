angular.module('feedReader.mediaGroupDisplay', [])
  .directive('mediaGroupDisplay', ['$compile', function($compile) {

    var video = '<video width="{{media.contents[0].thumbnails[0].width}}" height="{{media.contents[0].thumbnails[0].height}}" poster="{{media.contents[0].thumbnails[0].url}}" controls> ' +
      '<source ng-src="{{media.contents[0].url | trusted}}" type="{{media.contents[0].type}}">' +
    '</video>';
    var image = '<div><img ng-src="{{media.contents[0].url}}" class="ng-responsive" /></div>';
    var audio = '<audio controls>' +
      '<source ng-src="{{media.contents[0].url | trusted}}" type="{{media.contents[0].type}}">' +
    '</audio>';

    return {
      restrict: 'E',
      scope: {
        media: '='
      },
      template: '<div></div>',
      transclude: true,
      compile: function(tElem, tAttr) {
        return function(scope, el, attr, ctrl, trans) {
          var mediaType = scope.media.contents[0].type.split('/')[0];
          if (mediaType == 'video') {
            var vid = $compile(video)(scope);
            el.append(vid);
          } else if (mediaType == 'image') {
            var img = $compile(image)(scope);
            el.append(img);
          } else if (mediaType == 'audio') {
            var aud = $compile(audio)(scope);
            el.append(aud);
          }
        }
      }
    };
  }]).filter('trusted', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);;
