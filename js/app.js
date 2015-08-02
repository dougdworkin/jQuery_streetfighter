$(document).ready(function(){

// select Ryu Div and show Ryu in ready position on mouseover
	$('#Ryu').mouseenter(function() {
		$('.ryuStill').hide();
		$('.ryuReady').show();
	})

// put RYU back into still position when mouse leaves
	.mouseleave(function() {
		$('.ryuReady').hide();
		$('.ryuStill').show();
	})

// RYU goes into stance and fires hadouken w/sound on downclick
	.mousedown(function() {
		//play hadouken sound
		playHadouken();
		//show and hide positions
		$('.ryuReady').hide();
		$('.ryuThrowing').show();
		//show and animate hadouken across the screen
		$('.hadouken').finish().show().animate (
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '529px');
			}
		);
	})

// RYU goes back to ready position on upclick
	.mouseup(function() {
		$('.ryuThrowing').hide();
		$('.ryuReady').show();
	});

});

//function to set valume and play hadouken sound
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();


}


