// 'store' = application name
// [ ] = dependencies, other libraries needed. Still need to pass in empty
// array even if we have no dependencies

(function() {
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){
	this.products = gems; // product is a property of the controller
	});

    app.controller('PanelController', function(){
	this.tab = 1;

	this.selectTab = function(setTab) {
	    this.tab = setTab;
	};
	this.isSelected = function(checkTab) {
	    return this.tab === checkTab;
	};
	});
    
    var gems = [
        {
    	name: 'Dodecahedron', 
    	price: 2, 
    	description: '. . .',
    	canPurchase: true,
    	soldOut: false,
        },
        {
    	name: 'Pentagonal Gem', 
    	price: 5, 
    	description: '. . .',
    	canPurchase: false,
    	soldOut: false,
        }
    ];
})();
