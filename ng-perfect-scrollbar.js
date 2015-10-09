angular.module('ngPerfectScrollbar', [])

.directive('ngPerfectScrollbar', ['$window', function($window) {

  return {
    restrict: 'A',
    scope: { options: '='},
    link: function($scope, $elem, $attr) {
      var Window = angular.element($window)
      $elem = angular.element($elem)[0]

      Ps.initialize($elem, $scope.options)

      if ($attr.refreshOnChange) {
        $scope.$watchCollection($attr.refreshOnChange, function() {
          Ps.update($elem)
        })
      }

      if ($attr.refreshOnResize) {
        Window.on('resize', function() {
          Ps.update($elem)
        })
      }
    }
  }
}])
