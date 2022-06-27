/****************
 *  ElvinLabs   *
 ****************/

$(document).ready(function() {
    
    /* nav bar functions  */
    var $navbar = $("#navbar");
    var wh = window.innerHeight;
    var nh = 300;
    $navbar.css("marginTop",(window.innerHeight - nh)/2 + "px");
    
    $(window).resize(function(){
        $navbar.css("marginTop",(window.innerHeight - nh)/2 + "px");
    });

    /*$(window).scroll(function(){			
        $navbar
            .stop()
            .animate({"marginTop": ($(window).scrollTop())/10 + "px"}, "slow" );			
    });*/

    /***********************/
    
    /* news tab hover */
    
    $('#newsTab1').hover(function(){
        $('#newsTab1c').css("border-color","#f4f4f4");
    });$('#newsTab1').mouseleave(function(){
        $('#newsTab1c').css("border-color","#222");
    });
    
    $('#newsTab2').hover(function(){
        $('#newsTab2c').css("border-color","#f4f4f4");
    });$('#newsTab2').mouseleave(function(){
        $('#newsTab2c').css("border-color","#222");
    });
    
    $('#newsTab3').hover(function(){
        $('#newsTab3c').css("border-color","#f4f4f4");
    });$('#newsTab3').mouseleave(function(){
        $('#newsTab3c').css("border-color","#222");
    });
    
    $('#newsTab4').hover(function(){
        $('#newsTab4c').css("border-color","#f4f4f4");
    });$('#newsTab4').mouseleave(function(){
        $('#newsTab4c').css("border-color","#222");
    });
    
    /***********************/
    
    /* tool tip */
    
    // Tooltip only Text
    $('.masterTooltip').hover(function(){
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
    }).mousemove(function(e) {
            /*var mousex = e.pageX - 100; //Get X coordinates*/
            var mousex = window.innerWidth - 100 - 50;
            var mousey = e.pageY - 20; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
    }).mousedown(function(){
            $('.tooltip')
            .css("display","none")
    });
});

