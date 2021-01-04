/*================
 Template Name: ApeTech - App Landing Page Template
 Description: ApeTech is a powerful 100% Responsive app, product, and  Software landing page template.
 Version: 1.0
 Author: https://themeforest.net/user/htmllover/portfolio
 =======================*/

// TABLE OF CONTENTS

//  1. preloader
//  2. easeScroll
//  3. navbar or menu
//  4. client testimonial
//  5. hero background slider
//  6. customers slider
//  7. magnify popup video
//  8. ytplayer for hero background video
//  9. typed
// 10. back to top

jQuery(function ($) {

    'use strict';

    //  1. preloader
    $(window).ready(function() {
        $('#preloader').delay(200).fadeOut('fade');
    });

    //  2. easeScroll

    //  3. navbar or menu
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-59
            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

    //nav menu active color
    $('.header-nav li').on("click", function(e){
        $(this).addClass('active').siblings().removeClass('active');
    });


    //header slider
    $('.mobile-slider')['owlCarousel']({
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        items: 1
    });
    var u = $(".mobile-slider"),
        p = $("#next"),
        m = $("#prev");
    p.on("click", function() {
        u.trigger("next.owl.carousel", [400])
        console.log("next clicked");
    });
    m.on("click", function() {
        u.trigger("prev.owl.carousel", [400])
    });



    //header slider
    $('.header-slider')['owlCarousel']({
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        items: 1,
        nav: true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]
    });

    //screenshot slider
    $('.mobile-carousel-slider').owlCarousel({
        loop:true,
        margin:70,
        dots:false,
        nav:true,
        smartSpeed: 700,
        autoplay: 4000,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });



    //hero content slider
    $('.hero-content-slider').owlCarousel({
        loop:true,
        margin:70,
        dots:false,
        nav:true,
        smartSpeed: 700,
        autoplay: 4000,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    //  4. client testimonial
    $('.testimonial-slider').owlCarousel({
        responsiveClass:true,
        margin:20,
        dots: false,
        autoWidth:false,
        nav: true,
        autoplay:true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        autoplayTimeout: 3000,
        autoplayStopOnLast: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1200:{
                items:2
            }

        }

    });

    //  5. hero background slider
    $('.hero-background-slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout:3400

    });

    // 6. customers slider
    $('.customers-slider').owlCarousel({
        autoplay: true,
        loop: true,
        margin:25,
        dots:false,
        slideTransition:'linear',
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        autoplaySpeed:4500,
        responsive:{
            0:{
                items:2
            },
            500: {
                items:3
            },
            600:{
                items:3
            },
            800:{
                items:4
            },
            1200:{
                items:4
            }

        }

    });

    /* list_screen_slide Active
     =============================*/
    $('.list_screen_slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    //blog slider
    $("#sliderBlog").owlCarousel({
        items: 3,
        dots: false,
        margin: 30,
        rewind: !0,
        nav: true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });



    // 7. magnify popup video

    // 10. back to top
    (function(){

        $('body').append('<div id="toTop"><span><i class="fa fa-angle-down"></i></span></div>');

        $(window).on("scroll", function (e) {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());

}); // JQuery end

$(document).ready(function(){
  $(window).scroll(function(){
    console.log("vghfghfhgfghf");
  	var scroll = $(window).scrollTop();


	  if (scroll > 50) {
		  $(".navbar").css({
        background : 'linear-gradient(150deg,rgb(19, 211, 250)15%, rgb(19, 212, 250) 60%, rgb(28, 177, 254)   94%)'
        });
        if (scroll > 100) {
          $(".navbar").css("height" , "60px");
          $(".navbar").css({transition: 'height 1s, transform 2s'})
        }
	  }
	  else{
      $(".navbar").css("height" , "100px");
      $(".navbar").css("background" , "transparent");
	  }
  })
})

function myFunction() {
  document.getElementById("navTransition").style.WebkitTransition = "all 18s"; // Code for Safari 3.1 to 6.0
  document.getElementById("navTransition").style.transition = "all 18s";     // Standard syntax
}
/*####purchase modal*/
// Locally Registered Component
const quantitySelect = {
  name: "quantitySelect",
  props: ["productId"],
  data: function() {
    return {
      quantity: 1
    };
  },
  template: `
    <select v-model="quantity">
      <option value="" disabled>Quantity</option>
      <option v-for="(n, index) in 10" :value="n">{{n}} pcs.</option>
    </select>
  `,
  computed: {
    orderlines() {
      return this.$store.state.basket.orderlines;
    }
  },
  watch: {
    quantity: {
      handler: function(quantity) {
        this.changeQuantity(quantity, this.productId);
      },
      deep: true
    }
  },
  methods: {
    changeQuantity(quantity, productId) {
      this.$store.dispatch("updateOrderline", {
        productId: productId,
        quantity: quantity
      });
    }
  }
};


    //header slider carousel time

    $('.carousel').carousel({
      interval: 1000 * 3
    });
