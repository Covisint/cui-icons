(function(angular){

	'use strict';

	angular
	.module('app',[])
	.factory('getSvgList',function($http){
		return $http.get('svgList');
	})
	.controller('ctrl',function(getSvgList,$scope){
		this.init=function(){
			getSvgList.then(function(res){
				var svgList=res.data.split(',');
				for(var i=0;i<svgList.length;i++){
					var index = svgList[i].indexOf('.svg');
					if(index>-1){
						svgList[i]=svgList[i].split('.')[0];
					}
					svgList[i]='dist/svg/svg-out.svg#' + svgList[i];
				}
				$scope.list=svgList;
			})
		}

		this.init();
		
	})
	.filter('svgIconCardHref', function ($sce) {
	    return function(svg) {
	      return $sce.trustAsResourceUrl(svg);
	    };
	  });

})(angular)