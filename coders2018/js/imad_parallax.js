var bg_0 = $("#bg_0");
var bg_1 = $("#bg_1");
var bg_2 = $("#bg_2");
var i_width = $(window).width();
var depth = 100;


$(document).bind("mousemove", function(e){
	var motionSpan_0 = ((i_width/2) - e.pageX)/i_width * depth;
	var motionSpan_1 = ((i_width/2) - e.pageX)/i_width * depth * 0.6;
	var motionSpan_2 = ((i_width/2) - e.pageX)/i_width * depth * 0.2;
	var motionSpan_1_y = (e.pageY)/i_width * depth * 0.6;
	var motionSpan_2_y = (e.pageY)/i_width * depth * 0.2;
	bg_0.css("transform", "translateX(" + motionSpan_0 + "px)");
	bg_1.css("transform", "translate(" + motionSpan_1 + "px, "+ (motionSpan_2_y + 5) + "px)");
	bg_2.css("transform", "translate(" + motionSpan_2 + "px, "+ (motionSpan_1_y + 5) + "px)");
});
$(window).resize(function(){
	i_width = $(window).width();
});
