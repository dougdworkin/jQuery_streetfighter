$(document).ready(function(){


// Control starting and pausing music

$('.playTheme').click(function () {
	$('#theme').trigger('play');
});

$('.pauseTheme').click(function () {
	$('#theme').trigger('pause');
});


// **** Opening title animations *******

// Delay and show title
$('#streetFighter') .delay(300).fadeIn(2000)
	.delay(200).fadeOut(900);

// ... then delay & show intro part I
$('#introText01') .delay(3400).fadeIn(2000)
	.delay(2000).fadeOut(900);

// ... then delay & show intro part II
$('#introText02') .delay(5400).fadeIn(1000)
	.delay(1000).fadeOut(900);

// ... then delay & show instructions
$('#instructions') .delay(8300).fadeIn(1000);

// **** End ppening title animations *******


// cool position & play music when x pressed

$(document).keydown(function(e) {
	if (e.which == 88) {  // 88 = "x" key
		$('.ryuStill').hide();
		$('.ryuReady').hide();
		$('.ryuCool').show();
		$('#beinCool').trigger('play');
	}

})

// cool to still position & stop music when x depressed
.keyup(function(e) {
	if (e.which == 88) { 
		$('.ryuCool').hide();
		$('.ryuStill').show();
		$('#beinCool').trigger('pause');
	}

}); 


// Show Ryu in ready position on mouseover
	$('#Ryu').mouseenter(function() {
		$('.ryuStill').hide();
		$('.ryuReady').show();
	})

// put Ryu back into still position when mouse leaves
	.mouseleave(function() {
		$('.ryuReady').hide();
		$('.ryuStill').show();
	})

// Ryu goes into stance and fires hadouken w/sound on downclick
	.mousedown(function() {
		//play hadouken sound
		playHadouken();
		//show and hide positions
		$('.ryuReady').hide();
		$('.ryuStill').hide();
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
		$('.ryuStill').show();
	});

});

//function to set volume and play hadouken sound
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}






