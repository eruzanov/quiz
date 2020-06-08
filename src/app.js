angular
    .module('quiz', ['ngMaterial', 'ngMessages'])
    .controller('main', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    	$scope.toggleSideNav = function() {
    		$mdSidenav('left').toggle();
    	}
    }]);
