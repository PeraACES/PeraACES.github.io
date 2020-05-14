$(document).ready(function() {
    
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
            var mousex = e.pageX;// + 50; //Get X coordinates
            /*var mousex = window.innerWidth - 100 - 50;*/
            var mousey = e.pageY - 40; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
    }).mousedown(function(){
            $('.tooltip')
            .css("display","none")
    });
});

