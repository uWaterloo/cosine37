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
    $scope.show = false;
    // Model for the search and list example
    $scope.model = [{
        title: "Swim",
        details:  [{
        title: "Courses",
        details:  "bla",
        category: '1'
    }, {
        title: "Fitness & Recreation Hours",
        details:  "bla",
        category: '1'
    }, {
        title: "Recreation Hours",
        details:  "bla",
        category: '1'
    }],
        category: '1'
    }, {
        title: "Badminton",
        details: "item 2 details",
        category: '2'
    }, {
        title: "Basketball",
        details: "item 3 details",
        category: '1'
    }, {
        title: "Indoor Soccer",
        details: "item 4 details",
        category: '2'
    }, {
        title: "Volleyball",
        details: "item 5 details",
        category: '1'
    }, {
        title: "Women Only",
        details: "item 6 details",
        category: '2'
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
        $scope.portalHelpers.showView('details2.html', 2);
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
 
     $scope.showCourses = function() {
         $scope.show=true;
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