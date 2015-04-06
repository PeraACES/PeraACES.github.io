$(function() {
    
    var open = false, about = false, register = false, news = false, contact = false;
    $( '#sb-container' ).swatchbook( {
        // number of degrees that is between each item
        angleInc : 15,
        neighbor : 15,
        // if it should be closed by default
        initclosed : true,
        // index of the element that when clicked, triggers the open/close function
        // by default there is no such element
        closeIdx : 11
    } );
    
    display_none();
    
    // about handler
    $( '.dv-about' ).click(function(){
        var left_dist = "+=650";
        if(open && !about){
            $( '.main' ).css('height','780px');
            display_none();
            $( '.text-content-about' ).css('display','block');
            $( '.text-content-about' ).delay(1300).animate({"opacity": '1'}, "slow");
            about = true; register = false; news = false; contact = false;
        }
        else if(!open){
            // change window size
            $( '.main' ).css('height','780px');
            // hide text-content span
            $( '.text-content' ).css('opacity', '0');
            // expand the div
            $( '.content' ).delay(700).animate({"width":left_dist}, "slow");
            // appear about span
            $( '.text-content-about' ).css('display','block');
            // show about content text
            $( '.text-content-about' ).delay(1300).animate({"opacity": '1'}, "slow");           
            // change opacity of swatchbook
            swatchbook_opac();
            // book opened
            open = true;
            // selected tab
            about = true;
        }
        
    });
    
    // register handler
    $( '.dv-register' ).click(function(){
        var left_dist = "+=650";
        if(open && !register){
            $( '.main' ).css('height','720px');
            display_none();
            $( '.text-content-register' ).css('display','block');
            $( '.text-content-register' ).delay(1300).animate({"opacity": '1'}, "slow");
            register = true; about = false; news = false; contact = false;
        }
        else if(!open){
            $( '.main' ).css('height','720px');
            $( '.text-content' ).css('opacity', '0');
            $( '.content' ).delay(700).animate({"width":left_dist}, "slow");
            $( '.text-content-register' ).css('display','block');
            $( '.text-content-register' ).delay(1300).animate({"opacity": '1'}, "slow");
            
            swatchbook_opac();
            open = true;
            register = true;
        }
        
    });
    
    // news handler
    $( '.dv-news' ).click(function(){
        var left_dist = "+=650";
        if(open && !news){
            $( '.main' ).css('height','510px');
            display_none();
            $( '.text-content-news' ).css('display','block');
            $( '.text-content-news' ).delay(1300).animate({"opacity": '1'}, "slow");
            news = true; about = false; register = false; contact = false;
        }
        else if(!open){
            $( '.main' ).css('height','510px');
            $( '.text-content' ).css('opacity', '0');
            $( '.content' ).delay(700).animate({"width":left_dist}, "slow");
            $( '.text-content-news' ).css('display','block');
            $( '.text-content-news' ).delay(1300).animate({"opacity": '1'}, "slow");
            
            swatchbook_opac();
            open = true;
            news = true;
        }
        
    });
    
    // contact handler
    $( '.dv-contact' ).click(function(){
        var left_dist = "+=650";
        if(open && !contact){
            $( '.main' ).css('height','675px');
            display_none();
            $( '.text-content-contact' ).css('display','block');
            $( '.text-content-contact' ).delay(1300).animate({"opacity": '1'}, "slow");
            news = false; about = false; register = false; contact = true;
        }
        else if(!open){
            $( '.main' ).css('height','675px');
            $( '.text-content' ).css('opacity', '0');
            $( '.content' ).delay(700).animate({"width":left_dist}, "slow");
            $( '.text-content-contact' ).css('display','block');
            $( '.text-content-contact' ).delay(1300).animate({"opacity": '1'}, "slow");
            
            swatchbook_opac();
            open = true;
            contact = true;
        }
        
    });
    
    // home handler
    $( '.dv-home' ).click(function(){
        var left_dist = "-=650";
        if(open){
            $( '.content' ).delay(700).animate({"width":left_dist}, "slow");
            $( '.text-content' ).fadeTo("slow","0.0");
            display_none();
            $( '#sb-container > .dv-nav').each(function () { 
                $(this).delay(100).animate({"opacity": '1'}, "slow");
            });
            $( '.main' ).css('height','510px');
            // book closed
            open = false;
        }
    });
    
    // normal nav
    $( '.dv-home' ).click(function(){
        var height_new = $('.main').height()+50;
        $( '.main' ).css('height',height_new.toString+'px');
    });
    
    $(".dv-nav-h").hover(
        function() {
            if(open) $(this).animate({opacity: 8.0}, 100);
        }, function() {
            if(open) $(this).animate({opacity: 0.3}, 100);
        }
    );
    
});

function display_none(){
        $( '.text-content-register' ).css('display','none');
        $( '.text-content-about' ).css('display','none');
        $( '.text-content-news' ).css('display','none');
        $( '.text-content-contact' ).css('display','none');
}

function swatchbook_opac(){
    $( '#sb-container > .dv-nav').each(function () { 
        $(this).delay(100).animate({"opacity": '0.3'}, "slow");
    });
}
