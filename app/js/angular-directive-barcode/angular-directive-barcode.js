angular.module('Pasella.Components', [])
  .directive('barcode', [function() {
    return {
      restrict: 'A',
      scope : {
        codice : '='
      },
      link: function(scope, element, attrs) {
        scope.$watch('codice', function(newValue, oldValue){
          if(!newValue){
            element.attr("src", "");
            return;
          }
          var $img = jQuery("<div>" + newValue + "</div>");
          $img.barcode({code:'code39'});
          element.attr("src", $img.find("img").attr("src"));
        });
      },
      replace: false
    };
  }]);