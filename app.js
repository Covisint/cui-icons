(function(angular){

	'use strict';

	angular
	.module('app',[])
	.factory('getSvgList',['$http',function($http){
		return {
			icons : function(){
				return $http.get('iconList');
			},
			logos: function(){
				return $http.get('logoList');
			},
			fontAwesome: function(){
				return $http.get('fontAwesomeList');
			}
		}
	}])
	.controller('ctrl',['getSvgList','$scope',function(getSvgList,$scope){
		this.init=function(){
			getSvgList.icons().then(function(res){
				var iconList=res.data.split(',');
				for(var i=0;i<iconList.length;i++){
					var index = iconList[i].indexOf('.svg');
					if(index>-1){
						iconList[i]=iconList[i].split('.')[0];
					}
					iconList[i]='dist/icons/icons-out.svg#' + iconList[i];
				}
				$scope.iconList=iconList;
			});

			getSvgList.logos().then(function(res){
				var logoList=res.data.split(',');
				for(var i=0;i<logoList.length;i++){
					var index = logoList[i].indexOf('.svg');
					if(index>-1){
						logoList[i]=logoList[i].split('.')[0];
					}
					logoList[i]='dist/logos/logos-out.svg#' + logoList[i];
				}
				$scope.logoList=logoList;
			});

			getSvgList.fontAwesome().then(function(res){
				var fontAwesomeList=res.data.split(',');
				for(var i=0;i<fontAwesomeList.length;i++){
					var index = fontAwesomeList[i].indexOf('.svg');
					if(index>-1){
						fontAwesomeList[i]=fontAwesomeList[i].split('.')[0];
					}
					fontAwesomeList[i]='dist/font-awesome/font-awesome-out.svg#' + fontAwesomeList[i];
				}
				$scope.fontAwesomeList=fontAwesomeList;
			});
		}

		this.init();

	}])
	.filter('svgIconCardHref',['$sce',function ($sce) {
	    return function(svg) {
	      return $sce.trustAsResourceUrl(svg);
	    };
	}]);

})(angular)