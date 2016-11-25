document.onkeyup = move;

function move(e){
			console.log(e.keyCode);
	if(e.keyCode==39){
		walkRight();
		//move forest right
		shift(".forest", "-=15px");
		shift("html", "-=30px");
	}
	else if(e.keyCode==37){
		//if not at start of forest
		if(parseInt($(".forest").css('marginLeft')) < parseInt('-10px')){
			walkLeft();
			//move forest left
			shift(".forest", "+=15px");
			shift("html", "+=30px");
		}
	}
	else if(e.keyCode==38){
		walkFront();
	}
}

function walkFront(){
	$(".kiwi").css('background', 'url(images/kiwi/walkingFront.png)');
	$(".kiwi").css('background-size', '400px');
	$(".kiwi").css('top', '435px');
	$(".kiwi").css('width', '80px');
	$(".kiwi").css('height', '75px');
}

function walkLeft(){
	$(".kiwi").css('background', 'url(images/kiwi/walkingLeft.png)');
	$(".kiwi").css('background-size', '500px');
	$(".kiwi").css('top', '450px');
	$(".kiwi").css('width', '100px');
	$(".kiwi").css('height', '60px');
	step();
}

function walkRight(){
	$(".kiwi").css('background', "url(images/kiwi/walkingRight.png)");
	$(".kiwi").css('background-size', '500px');
	$(".kiwi").css('top', '450px');
	$(".kiwi").css('width', '100px');
	$(".kiwi").css('height', '60px');
	step();
}

var steps = 0;

function step(){
	if(steps == 0){
		$(".kiwi").css('background-position', '-100px');
		steps++;
	}
	else{
	  $(".kiwi").css('background-position', '0px');
		steps--;
	}
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
