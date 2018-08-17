 $(window).on('resize', function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 769 && ($("#aboutus-content").hasClass("mt-3"))) {
            $("#aboutus-content").removeClass("mt-3");

    
    }else if (viewportWidth < 769 && (!$("#aboutus-content").hasClass("mt-3"))){
    	$("#aboutus-content").addClass("mt-3");
    		}
	});
$( document ).ready(function() {
    console.log( "ready!" );
    $(window).on("load", function() {
    $(".loader").fadeOut(3000);
});
    $(window).trigger('resize');

});

