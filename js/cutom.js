/*==============================================
                    services                    
===============================================*/

$(function() {
    // animate on scroll
    new WOW().init();
})

/*==============================================
                    work                    
===============================================*/

$(function(){
    $('#work').magnificPopup({
        type:'image',
        delegate: 'a',
        gallery:{
            enabled:true
        }
    });
})

/*==============================================
                    team                    
===============================================*/

$(function(){
    $(".team-members").owlCarousel({
        margin: 40,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            },
        }
    });
})

/*==============================================
                    testimonials                    
===============================================*/

$(function(){
    $(".member-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
})

/*==============================================
                    stats                    
===============================================*/

$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
})


/*==============================================
                    clients                    
===============================================*/

$(function(){
    $(".clients").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
        }
    });
})

/*==============================================
                    navigation                    
===============================================*/

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ) {
            //hide nav
            $('nav').removeClass('navbar-trans')
            $('#back-to-top').fadeOut()
        } else {
            //show nav
            $('nav').addClass('navbar-trans')
            $('#back-to-top').fadeIn()
        }
    })
})

//smooth-scroll
$(function(){
    $('a.smooth-scroll').click(function(e){
        e.preventDefault()

        // get/return id like #about
        let section = $(this).attr('href')

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1000, 'easeInOutExpo')
    })
})

$(function(){
    $('.navbar-collapse ul li a').on('click touch', function(){
        $('.navbar-toggler').click()
    })
})