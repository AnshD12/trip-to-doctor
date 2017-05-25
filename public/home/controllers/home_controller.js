app.controller('homeController', ['$scope','$anchorScroll', '$location' , function($scope,$anchorScroll,$location){
	var myNav = document.getElementById('mainNav');
    window.onscroll = function () { 
        "use strict";
        if (document.body.scrollTop >= 200 ) {
            myNav.classList.add("navbar-advance");
            myNav.classList.remove("navbar-default");
        } 
        else {
            myNav.classList.add("navbar-default");
            myNav.classList.remove("navbar-advance");
        }
    };
    $scope.goTo = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
}])