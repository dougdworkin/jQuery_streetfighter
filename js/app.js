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
		console.log('mousedown event triggered');
		//play hadouken sound
		$('.ryuReady').hide();
		$('.ryuThrowing').show();
		$('.hadouken').show();
		//animate hadouken across screen
	})

// RYU goes back to ready position on upclick
	.mouseup(function() {
		console.log('mouseup event triggered');
		$('.ryuThrowing').hide();
		$('.ryuReady').show();
	});

});