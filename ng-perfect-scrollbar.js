angular.module('ngPerfectScrollbar', [])

.directive('ngPerfectScrollbar', ['$window', function($window) {

  return {
    restrict: 'A',
    scope: { options: '='},
    link: function(scope, $elem, $attr) {
      var Window = angular.element($window)

      $elem.on('mouseenter', function() {
        Ps.update($elem)
      })

      $elem = angular.element($elem)[0]
      Ps.initialize($elem, scope.options)

      Window.on('resize', function() {
        Ps.update($elem)
      })

      scope.$watch($elem.offsetHeight, function() {
        Ps.update($elem)
      })
    }
  }
}])
