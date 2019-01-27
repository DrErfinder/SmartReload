if(jQuery) {
	var LastCount = 0;
	function SmartReload() {
		$.get(window.location.origin + "/SmartReload.php", function(NewCount, status) {
			if(LastCount == 0){
				LastCount = NewCount;
			}
			else if(NewCount > LastCount) {
				LastCount = NewCount;
				location.reload(true);
			}
		});
	}
	$(document).ready(function() {
		setInterval(SmartReload, 2000);
	});
}
else {
	alert("Error: jQuery not installed!");
}