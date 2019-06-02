
jQuery(window).load(function () {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function () {

    <!-- This will will member details -------------------------------------------->
    loadMemberData();

    jQuery('#nav').singlePageNav({
        offset: jQuery('#nav').outerHeight(),
        filter: ':not(.external)',
        speed: 1200,
        currentClass: 'current',
        easing: 'easeInOutExpo',
        updateHash: true,
        beforeStart: function () {
            console.log('begin scrolling');
        },
        onComplete: function () {
            console.log('done scrolling');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color", "#0EB493");
        } else {
            $("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");
        }
    });

    var slideHeight = $(window).height();

    $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
    $(window).resize(function () {
        'use strict',
            $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
    });

    $(".project-wrapper").mixItUp();

    $(".fancybox").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 650,
        closeEffect: 'elastic',
        closeSpeed: 550,
        closeClick: true,
    });
    $('#facts').parallax("50%", 0.3);
    "use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
});
function initialize() {
    /*var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

     var mapOptions = {
     zoom: 14,
     center: myLatLng,
     disableDefaultUI: true,
     scrollwheel: false,
     navigationControl: false,
     mapTypeControl: false,
     scaleControl: false,
     draggable: false,
     mapTypeControlOptions: {
     mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
     }
     };

     var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


     var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     icon: 'img/location-icon.png',
     title: '',
     });*/
}
//google.maps.event.addDomListener(window, "load", initialize);


function loadMemberData() {
    $.getJSON("data/committee_19_20.json", function (dataList) {
        //console.log(dataList);
        var i = 0;
        $("#committee").append("<div class='row'>");

        $.each(dataList.members, function (key, val) {
            //if (val.img == "") val.img = "img/team/male.jpg";
            if (val.email.length > 20) {
                val.email = val.email.replace("@", " @"); // Long email addresses will eb splited into two lines
            }

            if (val.linkedin != "") {
                val.linkedin = "<li><a href='" + val.linkedin + "' target='_blank'><i class='fa fa-linkedin fa-sm'></i></a></li>";
            }
            if (val.fb != "") {
                val.fb = "<li><a href='" + val.fb + "' target='_blank'><i class='fa fa-facebook fa-sm'></i></a></li>"
            }
            // wow fadeInUp animated
            $("#committee").append("<figure class='team-member col-md-2 col-sm-4 col-xs-8 text-center wow fadeInUp animated' data-wow-duration='500ms' data-wow-delay='500ms'>" +
                "<div class='member-thumb'><img src='" + val.img + "' alt='Team Member' class='img-responsive'>" +
                "<figcaption class='overlay'><ul class='social-links text-center'>" + val.linkedin + val.fb +
                "<br><br><span><h6>" + val.email + "</h6></span><br></ul></figcaption></div><h4>" + val.name + "</h4><span>" + val.position + "</span></figure>");

            if (i % 6 == 5) {
                $("#committee").append("</div><div class='row'>");
            }
            i++;
        });
        $("#committee").append("</div>");
        $("#team-member").hide();

        var wow = new WOW({
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 120,          // distance to the element when triggering the animation (default is 0)
            mobile: false,       // trigger animations on mobile devices (default is true)
            live: true        // act on asynchronously loaded content (default is true)
        });
        new WOW().init();
    });
}
