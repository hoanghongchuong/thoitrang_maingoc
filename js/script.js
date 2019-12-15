$(document).ready(function($){
	var owl = $(".owl-carousel");
        owl.owlCarousel({
            margin:0,                           
            loop:true,
            dots:true,
            autoplay:false,                         
            autoplayTimeout:1500,
            dotsEach: true,
            dotsData: true,
            autoplayHoverPause:true,
            autoplaySpeed: 2000,
            responsiveClass:true,               
            responsive:{
                0:{
                    items:2,                                                                                                
                },
                600:{
                    items:4,          
                },
                1000:{
                    items:4,  
                }
            }
        });

});
