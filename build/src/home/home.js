!function(){function o(o,n,e){var c=n.get("/ng-wp/wordpress/api/?json=get_recent_posts");console.log(e.absUrl()),c.success(function(o,n,e,c){console.log(o)})}angular.module("home").controller("Home",o),o.$inject=["$scope","$http","$location"]}();