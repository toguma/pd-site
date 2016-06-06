$(function() {
	
	var ua = navigator.userAgent;
	var isSP = Boolean(ua.match(/iPhone|iPod|Android/));
	
	
	(function(){
		var handler = isSP ? "touchstart" : "mousedown";
		
		var nodes = $("#feature li");
		var areas = $("#feature area");
		var details = $("#feature li strong");
		var len = areas.length;
		for(var i=0; i<len; i++) {
			var area = areas[i];
			area.rel = i;
			/*
			$(area).on("mousedown",function() {
				toggle(this);
			});
			*/
			
			nodes[i].setAttribute("data-key", i);
			nodes[i].addEventListener(handler, function(){
				toggle(this);
			});
		}
		
		function toggle(elem) {
			var key = Number(elem.getAttribute("data-key"));
			
			if(elem.className.match("active")) {
				$(elem).removeClass("active");
				details[key].style.visibility = "hidden";
			}
			else {
				var len = details.length;
				for(var i=0; i<len ;i++) {
					$(nodes[i]).removeClass("active");
					details[i].style.visibility = "hidden";
				}
				
				$(elem).addClass("active");
				details[key].style.visibility = "visible";
			}
		}
	})();
	
	
	(function(){
		var handler = isSP ? "touchstart" : "mousedown";
		
		var chara = $("#contact .cloud-kun")[0];
		var timer;
		
		chara.addEventListener(handler, function(){
			if(timer) {
				clearTimeout(timer);
			}
			$("#contact").addClass("moving");
			timer = setTimeout(function() {
				$("#contact").removeClass("moving");
			}, 500);
		});
		
		
	})();
	
	
});