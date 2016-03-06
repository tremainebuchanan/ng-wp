(function(){
	angular
	.module('ng-wp',[
		'ngRoute',
		'home'
	]).config(config);

	function config($locationProvider){
		$locationProvider.html5Mode(true);
	}
})();