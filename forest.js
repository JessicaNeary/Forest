document.onkeydown = move;

function move(e){
			console.log(e.keyCode);
	if(e.keyCode==39){
		walkRight();
		//move forest right
		shift(".forest", "-=10px");
		shift("html", "-=30px");
	}
	else if(e.keyCode==37){
		//if not at start of forest
		if(parseInt($(".forest").css('marginLeft')) < parseInt('-10px')){
			walkLeft();
			//move forest left
			shift(".forest", "+=10px");
			shift("html", "+=30px");
		}
	}
}

function walkLeft(){
	$(".kiwi").css('background', 'url(images/kiwi/walkingLeft.png)');
	$(".kiwi").css('background-size', '500px');
}

function walkRight(){
	$(".kiwi").css('background', "url(images/kiwi/walkingRight.png)");
	$(".kiwi").css('background-size', '500px');
}

function shift(item,pixels){
	$(item).animate({
		'marginLeft' : pixels
	},"fast", "linear");
}

// addEventListener("keydown", function(e){
// 	keys[e.keyCode] = true;
// 	runKeys();
// 	delete keys[e.keyCode];
// }, false);

// addEventListener("keyup", function(e){
// 	delete keys[e.keyCode];
// }, false);

// function runKeys(){
// 	if(keys[39]){
// 		$(".forest").animate({
// 			'marginLeft' : "-=10px"
// 		}, "fast", 'linear');
// 		$('html').animate({
// 			'marginLeft' : "-=40px"
// 		}, "fast", 'linear');
// 	}
// 	else if(keys[37]){
// 		$(".forest").animate({
// 			'marginLeft' : "+=10px"
// 		}, "fast", 'linear');
// 		$('html').animate({
// 			'marginLeft' : "+=40px"
// 		}, "fast", 'linear');
// 	}
// }
