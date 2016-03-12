angular.module('portalApp')

// Widget controller - runs every time widget is shown
.controller('cosine37Ctrl', ['$scope', '$http', '$q', 'cosine37Factory', function ($scope, $http, $q, cosine37Factory) {

    // Widget Configuration
    $scope.portalHelpers.config = {
        // make 'widgetMenu.html' the template for the top right menu
        "widgetMenu": "widgetMenu.html"
    };

    // Import variables and functions from service
    $scope.data = cosine37Factory.data;

	// Show main view in the first column
	$scope.portalHelpers.showView('main.html', 1);

    // Import variables and functions from service
    $scope.loading = cosine37Factory.loading;
    $scope.item = {value:''};

    $scope.item2 = {value:''};
    $scope.item3 = {value:''};
    $scope.item4 = {value:''};
    // Model for the search and list example
    // 
    
    $scope.PAC = [{
        title: "Recreation Hours",
        details:  "bla",
        category: '1'
    }]
    
    $scope.model = [{
        title: "Swim",
        details:  [{
        title: "Courses",
        details:  "Level1 Beginner",
        location_time: "PAC   Thursdays   20:00-21:00",
        Instruction:"Swimming course Level 1 is suitable for those \" landlubbers \".Basic skills for "+
            "swimming and throughout guide will give you a kivk out. Come on and have fun!",  
        num: "Want to register? Come on!",
            picture: "http://s10.sinaimg.cn/orignal/005PMBMqgy704iFqbONf9&690",
            url: "https://nike.uwaterloo.ca/Course/Search.aspx"
    }, {
        title: "Fitness & Recreation Hours",
        details:  "Wednesday, Mar 16",
        location_time: "PAC 16:00-18:00",
        num: ""
    }, {
        title: "Recreation Hours",
        details:  "Friday, Mar 18",
        location_time: "PAC 18:00-20:00",
        num: ""
    }],
        category: '1'
    }, {
        title: "Skating",
        details: [{
        title: "Courses",
        details:  "11:00-12:20 every Wednesday",
        location_time: "CIF Arena",
        num: ""
    }, {
        title: "Wednesday and Friday Hours",
        details:  "11:30-12:20",
        location_time: "CIF Arena",
        num: ""
    }, {
        title: "Thursday Hours",
        details:  "11:00-12:20 every Wednesday",
        location_time: "CIF Arena",
        num: "Remind: Do not open on March 26."
    }],
        category: "Recreation"
    }, {
        title: "Basketball",
        details: "item 3 details",
        category: "Ball"
    }, {
        title: "Indoor Soccer",
        details: "item 4 details",
        category: 'Ball'
    }, {
        title: "Volleyball",
        details: "item 5 details",
        category: 'Ball'
    }, {
        title: "Ballroom Dance Club",
        details: "item 5 details",
        category: 'Recreation'
    }, 
       {
        title: "Triathlon",
        details: "item 5 details",
        category: "Track and Field"
    }, 
                     {
        title: "Women Only Swim",
        details: "item 6 details",
        category: "Women Only"
    },
      {
        title: "Women Only Volleyball",
        details: "item 6 details",
        category: "Women Only"
    }];

    // initialize the service
    cosine37Factory.init($scope);

    // watch for changes in the loading variable
    $scope.$watch('loading.value', function () {
        // if loading
        if ($scope.loading.value) {
            // show loading screen in the first column, and don't append it to browser history
            $scope.portalHelpers.showView('loading.html', 1, false);
            // show loading animation in place of menu button
            $scope.portalHelpers.toggleLoading(true);
        } else {
            $scope.portalHelpers.showView('main.html', 1);
            $scope.portalHelpers.toggleLoading(false);
        }
    });

    // Handle click on an item in the list and search example
    $scope.showDetails = function (item) {
        // Set which item to show in the details view
        $scope.item.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('details.html', 2);
    };
    
        // Handle click on an item in the second list 
    $scope.showDetails2 = function (item) {
        console.log(item);
        // Set which item to show in the details view
        $scope.item2.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('details2.html', 3);
    };
    
    $scope.showPAC = function (item) {
        console.log(item);
        // Set which item to show in the details view
        $scope.item3.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('pac.html', 2);
    };
    
	$scope.showCIF = function (item) {
        console.log(item);
        // Set which item to show in the details view
        $scope.item4.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('cif.html', 2);
    };

    // Handle "previous item" click from the details page
    $scope.prevItem = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails(prevItem);
    }

    $scope.nextItem = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails(nextItem);
    }

	
}])
// Factory maintains the state of the widget
.factory('cosine37Factory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
		
	var initialized = {value: false};

	// Your variable declarations
	var data = {value: null};
    
    // Your variable declarations
        var loading = {
            value: true
        };
    
    var sourcesLoaded = 0;

	var init = function ($scope) {
            if (initialized.value)
                return;
            initialized.value = true;
            // Place your init code here:
            sourceLoaded();
        }


	function sourceLoaded() {
            sourcesLoaded++;
            if (sourcesLoaded > 0)
                loading.value = false;
        }

        return {
            init: init,
            loading: loading
        };

}])
// Custom directive example
.directive('cosine37DirectiveName', ['$http', function ($http) {
	return {
		link: function (scope, el, attrs) {

		}
	};
}])
// Custom filter example
.filter('cosine37FilterName', function () {
	return function (input, arg1, arg2) {
		// Filter your output here by iterating over input elements
		var output = input;
		return output;
	}
});

