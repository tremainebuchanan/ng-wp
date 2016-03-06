(function(){
	angular
	.module('home')
	.controller('Home', Home);

	Home.$inject = ['$scope', '$http'];

	function Home($scope, $http){
		var res = $http.get('/ng-wp/wordpress/api/?json=get_recent_posts');
		res.success(function(data, status, headers, config){
			console.log(data);
		});
	}
})();