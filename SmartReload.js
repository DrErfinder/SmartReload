var LastCount = 0;
var ScrollPos = 0;
var ScollBe;
function SmartReload() {
	$.get(window.location.origin + "/SmartReload.php", function(NewCount, status) {
		if(LastCount == 0){
			LastCount = NewCount;
			ScollBe = $('html').css('scroll-behavior');
			$('html').css('scroll-behavior', 'auto');
			ScrollPos = Cookies.get('smartreload');
			window.scrollTo(0, ScrollPos);
			$('html').css('scroll-behavior', ScollBe);
		}
		else if(NewCount > LastCount) {
			ScrollPos = window.pageYOffset;
			Cookies.set('smartreload', ScrollPos)
			location.reload(true);
		}
	});
}
if(jQuery) {
	$(document).ready(function() {
		SmartReload();
		setInterval(SmartReload, 2000);
	});
}
else {
	alert("Error: jQuery not installed!");
}
