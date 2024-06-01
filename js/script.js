$(document).scroll( function() {
	if($(this).scrollTop() > 100) {
		$('#nav').addClass('active');
	} else {
		$('#nav').removeClass('active');
	}
});