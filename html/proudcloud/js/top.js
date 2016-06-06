$(function() {
	
	
	(function(){
		var areas = $("#feature area");
		var nodes = $("#feature li");
		var len = areas.length;
		for(var i=0; i<len; i++) {
			var area = areas[i];
			area.rel = i;
			$(area).on("mouseenter",function() {
				var key = Number(this.rel);
				show(key);
			});
			$(area).on("mouseleave",function() {
				var key = Number(this.rel);
				hide(key);
			});
		}
		
		function show(key) {
			var len = nodes.length;
			for(var i=0; i<len ;i++) {
				$(nodes[i]).removeClass("active");
			}
			$(nodes[key]).addClass("active");
		}
		
		function hide(key) {
			var len = nodes.length;
			for(var i=0; i<len ;i++) {
				$(nodes[i]).removeClass("active");
			}
		}
	})();
	
	
	
	
	
	
});