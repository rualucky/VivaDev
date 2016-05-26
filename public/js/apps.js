var $ = jQuery.noConflict();

'use strict';


$(function () {


    ///////////////////////////////////////////////////////////////////////
    //Go To Element
    ///////////////////////////////////////////////////////////////////////
    /*$('a.page-scroll').on('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 110
        }, 1000);
        event.preventDefault();
    });
*/




    //Mobile Detect
    var testMobile;

    console.log('call apps.js')
    console.log(checkMobile())
    ///////////////////////////////////////////////////////////////////////
    //scroll showcase
    ///////////////////////////////////////////////////////////////////////
    var testMobile = checkMobile();

    // if (testMobile == null) {
    //     setShowCaseCustomScrollBar();
    // }
    //
    // resizeShowcase();
    // $( window ).resize(function() {
    //     resizeShowcase();
    // });


    ///////////////////////////////////////////////////////////////////////
    //animation menu
    ///////////////////////////////////////////////////////////////////////

    function addAnimationNavbar() {
        var y = $(this).scrollTop();
        if (y > 0) {
            $('body').addClass('animation-scroll');
        }else {
            $('body').removeClass('animation-scroll');
        }
    }
    addAnimationNavbar();
    $(window).scroll(function (event) {
        addAnimationNavbar();
    });




    ///////////////////////////////////////////////////////////////////////
    //button main menu
    ///////////////////////////////////////////////////////////////////////
    $('.btn-mainmenu').click(function() {
        $('body').toggleClass('show-main-menu');
        $(this).toggleClass('active');
    });
    $('.bg-overlay').click(function() {
        $('body').removeClass('show-main-menu');
        $('.btn-mainmenu').removeClass('active');
    });

    $('.btn-search-icon').click(function(e) {
        e.preventDefault();

        $('.wrapper-search-header').addClass('show-search');

    });
    $('.btn-close-search').click(function(e) {
        e.preventDefault();

        $('.wrapper-search-header').removeClass('show-search');

    });
});

function checkMobile() {
  console.log('check Mobile')
  var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      }
    return isMobile.any();
}

function resizeShowcase() {
    var elShowcase = $('#showcase');
    var showcaseWidth = elShowcase.width();
    if (showcaseWidth > 767 && showcaseWidth < 991) {
        elShowcase.addClass('showcase-sm');
        //elShowcase.mCustomScrollbar("update");
    }else {
        elShowcase.removeClass('showcase-sm');
        //elShowcase.mCustomScrollbar("update");
    }

    if (showcaseWidth < 767) {
        elShowcase.addClass('showcase-xs');
       // elShowcase.mCustomScrollbar("update");
    }else {
        elShowcase.removeClass('showcase-xs');
        //elShowcase.mCustomScrollbar("update");
    }
}

function setShowCaseCustomScrollBar() {
  $("#showcase").mCustomScrollbar({
      axis:"x",
      theme:"light-3",
      //mouseWheel: 'disable',
      autoDraggerLength: 'false',
      scrollInertia: 0,
      advanced:{
          autoExpandHorizontalScroll:true,
          updateOnContentResize: true
      }
  });
}

function generateSlideYoutube() {
  ///////////////////////////////////////////////////////////////////////
  //Slide youtube
  ///////////////////////////////////////////////////////////////////////
  slideyoutube = $('.slide-youtube');
  slideyoutube.on('initialized.owl.carousel', function(event) {
      var items = event.item.count;
      var currentItem = event.item.index;
      //console.log(currentItem);
      if (items <= 6) {
          slideyoutube.find('.owl-next').addClass('disable');
      }
      if(currentItem == 0) {
          slideyoutube.find('.owl-prev').addClass('disable');
      }
  })
  slideyoutube.on('translated.owl.carousel', function(event) {
      var items = event.item.count;
      var currentItem = event.item.index;
      var maximumItem =  items - event.page.size;
      if(currentItem == maximumItem){
       $(this).find('.owl-next').addClass('disable');
      }
      if(currentItem < maximumItem){
       $(this).find('.owl-next').removeClass('disable');
      }

      if(currentItem == 0){
        $(this).find('.owl-prev').addClass('disable');
      }
      if(currentItem > 0){
        $(this).find('.owl-prev').removeClass('disable');
      }
  })
  slideyoutube.owlCarousel({
      items:6,
      margin:20,
      nav:true,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsive:{0:{items:2,slideBy:2},768:{items:4,slideBy:4},991:{items:6,slideBy:6}}
  })

  slideyoutube.on('resized.owl.carousel', function(event) {
      var items = event.item.count;
      var currentItem = event.item.index;
      var maximumItem =  items - event.page.size;
      //console.log(event.item);
      //console.log(event.page);
      if(currentItem == maximumItem){
       $(this).find('.owl-next').addClass('disable');
      }
      if(currentItem < maximumItem){
       $(this).find('.owl-next').removeClass('disable');

      }
      if(currentItem == 0){
        $(this).find('.owl-prev').addClass('disable');
      }
      if(currentItem > 0){
        $(this).find('.owl-prev').removeClass('disable');
      }
  })
}
