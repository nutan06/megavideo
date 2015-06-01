angular.module('megaVideoDemo',[]).
directive('megaVideo',function($sce){
	return{
		restrict:'E',
		templateUrl:'mega-video.html',
		scope:true,
		link:function(scope,element,attrs){
			scope.sources=[];

			function processSources(){
				var sourceTypes={
					webm:{type:'video/webm'},
					mp4:{type:'video/mp4'},
					ogg:{type:'video/ogg'}
				}
				for (source in sourceTypes) {
						if (attrs.hasOwnProperty(source)) {
							scope.sources.push(
								{ type: sourceTypes[source].type, 
								  src: $sce.trustAsResourceUrl(attrs[source])
								}
							);
						}
					}
				}
				processSources();
		}
	}
});