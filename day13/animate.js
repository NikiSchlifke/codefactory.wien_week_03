// animate.js

function fade() {
    $("#animate").hide(5000);
    setTimeout(function() {
        $("#animate").show(5000);
    }, 5000);
    fade();
}

document.addEventListener("DOMContentLoaded", customFade);
// fade();

function customFade() {
	$("#animate")
	.fadeOut(0)
	.fadeIn(5000)
	.delay(5000)
	.fadeOut(5000);
}		