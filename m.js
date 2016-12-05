var app= angular.module('myApp', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
	console.log("hello");
    $locationProvider.html5Mode(true);
	$routeProvider
	.when('/about',{
		templateUrl:  'about.html'
	})
	.otherwise({
		templateUrl:  'my.html'

	});
});


app.controller('loginCtrl', function($scope, $location){
	console.log("hello1")
	$scope.submit=function(){
		var uname=$scope.username;
		var pwd=$scope.password;
		console.log("inside controller");
        if($scope.username=='admin' && $scope.password=='admin') {
        	console.log("inside if")
        
        }
        console.log("pathname", $location);
        $location.path('/about');
    //    $window.location.href = 'about.html';
	};
});

/*
var app = angular.module('myApp', ['ngCookies']);
app.controller('loginCtrl', ['$scope', '$timeout','$http', '$cookieStore', '$window', function ($scope, $timeout, $http, $cookieStore, $window) {
    console.log("Controller Loaded");
/*
    var executefirst_login = function ()
    {
        var cookieval = $cookieStore.get('KhaaliJeb');
        if (cookieval == NaN  || cookieval == undefined)
        {

        }
        else
        {
            $window.open('/index3.html', '_self');
        }
    }

    executefirst_login();

    $scope.submit=function(){

		var uname=$scope.username;
		var pwd=$scope.password;
		console.log("inside controller");
        if($scope.username=='admin' && $scope.password=='admin') {
        	console.log("inside if")
        //	$location.path('/exp/public/about.html')
       // 	$scope.templateURL = 'about.html';
        	//$window.open('/../about.html', '_self');
        	$window.open('about.html', '_self');
        }
	};
}]);
*/