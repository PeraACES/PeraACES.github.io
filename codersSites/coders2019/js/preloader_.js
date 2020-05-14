$(document).ready(function() {
	  
	setTimeout(function() {
	$('#ctn-preloader').addClass('loaded');
	// Una vez haya terminado el preloader aparezca el scroll
	$('body').removeClass('no-scroll-y');

	if ($('#ctn-preloader').hasClass('loaded')) {
	// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
	$('#preloader').delay(1000).queue(function() {
	    $(this).remove();
	    });
	}
	}, 3000);
	  
});	