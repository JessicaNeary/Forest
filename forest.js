var keys = {};

addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
	runKeys();
	delete keys[e.keyCode];
}, false);

// addEventListener("keyup", function(e){
// 	delete keys[e.keyCode];
// }, false);

function runKeys(){
	if(keys[39]){
		$(".forest").animate({
			'marginLeft' : "-=10px"
		}, "fast", 'linear');
		$('html').animate({
			'marginLeft' : "-=40px"
		}, "fast", 'linear');
	}
	else if(keys[37]){
		$(".forest").animate({
			'marginLeft' : "+=10px"
		}, "fast", 'linear');
		$('html').animate({
			'marginLeft' : "+=40px"
		}, "fast", 'linear');
	}
}
