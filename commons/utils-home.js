module.exports = {

  checkMobile: function() {
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
  },

  /******************* show-case **********************************/
  setShowCaseCustomScrollBar: function() {
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
  },

  resizeShowcase: function() {
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
  },
  /******************* end show-case **********************************/

  /******************* slide-youtube **********************************/
  generateSlideYoutube: function() {
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
  },
  /******************* end slide-youtube **********************************/

}
