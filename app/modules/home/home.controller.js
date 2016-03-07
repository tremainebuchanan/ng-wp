(function(){
	angular
	.module('home')
	.controller('Home', Home);

	Home.$inject = ['$scope', '$http', '$location'];
	/**
	 * [Home description]
	 * @param {[type]} $scope    [description]
	 * @param {[type]} $http     [description]
	 * @param {[type]} $location [description]
	 */
	function Home($scope, $http, $location){
		var res = $http.get('/ng-wp/wordpress/api/?json=get_recent_posts');
		console.log($location.absUrl());
		res.success(function(data, status, headers, config){
			console.log(data);
		});
	}
})();