$(document).ready(function(){

  /*- header -*/
  $header = $('.header');
  $window = $(window);
  $h = $header.offset().top;
  $window.scroll(function(){
    if ($window.scrollTop() > $h) {
      $header.addClass('fixed');
      $('.product-info__right-col').removeClass('indent-top');
    } else {
      $header.removeClass('fixed');
    }
  });

  /*- search-form -*/
  $('.search-form').click(function(e) {
    $('.search-modal').addClass('show');
    $('body').addClass('m-scroll-none');
    return false;
  });

  $('.search-modal__close, .search-modal__overlay').click(function(e) {
    $('.search-modal').removeClass('show');
    $('body').removeClass('m-scroll-none');
  });

  /*- main-navi -*/
  var siteToggles = $('.main-navi__improved'),
      siteMenus= $('.main-navi__dropdown');

  siteToggles.hover(function(){
      $(this).toggleClass("collapsed");
        siteMenus.toggleClass("show");
      $('.catalogue-overlay').toggleClass('show');
  });

	/*- promo-slider -*/
	var swiper = new Swiper(".promo-slider", {
		loop: true,
    loopFillGroupWithBlank: true,
  	pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
	});

  /*- new-products-slider -*/
	var swiper = new Swiper("#new-products-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#new-products-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#new-products-slider-arrows .swiper-button-next",
        prevEl: "#new-products-slider-arrows .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1420: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });

  /*- trends-slider -*/
  var swiper = new Swiper("#trends-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#trends-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#trends-slider-arrows .swiper-button-next",
        prevEl: "#trends-slider-arrows .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1420: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });

  /*- recommendation-slider -*/
	var swiper = new Swiper("#recommendation-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      scrollbar: {
        el: "#recommendation-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#recommendation-slider-arrows .swiper-button-next",
        prevEl: "#recommendation-slider-arrows .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1420: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });

  /*- popular-categories-slider -*/
	var swiper = new Swiper("#popular-categories-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
		pagination: {
      el: "#popular-categories-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#popular-categories-arrows .swiper-button-next",
      prevEl: "#popular-categories-arrows .swiper-button-prev",
    },
  });

  /*- m-popular-categories-slider -*/
  var swiper = new Swiper("#m-popular-categories-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: "#m-popular-categories-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        765: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1360: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1420: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  });

  /*- interior-slider -*/
	var swiper = new Swiper("#interior-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#interior-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#interior-slider-arrows .swiper-button-next",
        prevEl: "#interior-slider-arrows .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1420: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });

  /*- save-btn -*/
  $('.save-btn__in').click(function(e) {
      if($(this).parent().hasClass('active')) {
          $(this).parent().removeClass('active');
      } else {
          $(this).parent().addClass('active');
      }
      return false;
  });

	/*- hits-slider -*/
	var swiper = new Swiper("#hits-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#hits-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#hits-slider .swiper-button-next",
        prevEl: "#hits-slider .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1420: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
  });

  /*- comparison-slider -*/
  var swiper = new Swiper("#comparison-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      scrollbar: {
        el: "#comparison-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#comparison-slider .swiper-button-next",
        prevEl: "#comparison-slider .swiper-button-prev",
      },
  });

  /*- tabs -*/
  $('.tabs-nav li:first-child').addClass('active');
  $('.tabs-content__item').hide();
  $('.tabs-content__item:first').show();

  /*- tabs -*/
  $('.tabs-nav li').click(function(){
    $('.tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tabs-content__item').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  /*- category-slider -*/
  var swiper = new Swiper("#category-slider", {
      direction: "horizontal",
      slidesPerView: "auto",
      scrollbar: {
        el: "#category-slider .swiper-scrollbar",
        hide: true,
      },
  });

  /*- reviews-slider -*/
  var swiper = new Swiper("#reviews-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#reviews-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#reviews-slider-arrows .swiper-button-next",
        prevEl: "#reviews-slider-arrows .swiper-button-prev",
      },
  });

  /*- purchase-slider -*/
  var swiper = new Swiper("#purchase-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#purchase-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#purchase-slider-arrows .swiper-button-next",
        prevEl: "#purchase-slider-arrows .swiper-button-prev",
      },
  });

  /*- variants-slider -*/
  var swiper = new Swiper("#variants-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#variants-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#variants-slider-arrows .swiper-button-next",
        prevEl: "#variants-slider-arrows .swiper-button-prev",
      },
  });

  /*- similar-products-slider -*/
  var swiper = new Swiper("#similar-products-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: "#similar-products-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#similar-products-slider-arrows .swiper-button-next",
        prevEl: "#similar-products-slider-arrows .swiper-button-prev",
      },
  });

  /*- recently-viewed-slider -*/
  var swiper = new Swiper("#recently-viewed-slider", {
      slidesPerView: 7,
      spaceBetween: 30,
      scrollbar: {
        el: "#recently-viewed-slider .swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: "#recently-viewed-slider-arrows .swiper-button-next",
        prevEl: "#recently-viewed-slider-arrows .swiper-button-prev",
      },
  });

  /*- ordering -*/
  $('.gl-radio.courier label, .gl-radio.courier input').click(function(e) {
      $('.gl-radio.pickup').removeClass('active');
      $('.gl-radio.courier').addClass('active');
      $('.ordering__pickup').removeClass('active');
      $('.ordering__courier').addClass('active');
  });

  $('.gl-radio.pickup label, .gl-radio.pickup input').click(function(e) {
      $('.gl-radio.courier').removeClass('active');
      $('.gl-radio.pickup').addClass('active');
      $('.ordering__courier').removeClass('active');
      $('.ordering__pickup').addClass('active');
  });

  /*- switch -*/
  $('.switch')
      .on('click', '.switch__more', function(){
          var el = $(this);
          var field = el.parents('.switch').find('input[type="text"]');
          field[0].value++;
      })
      .on('click', '.switch__fewer', function(){
          var el = $(this);
          var field = el.parents('.switch').find('input[type="text"]');
          if(field[0].value >= 2) field[0].value--;
      });
    
  $('.switch input').keypress(function(event){
      var key, keyChar;
      if(!event) var event = window.event;
      if (event.keyCode) key = event.keyCode;
      else if(event.which) key = event.which;
      if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
      keyChar=String.fromCharCode(key);
      if(!/\d/.test(keyChar)) return false;
  }); 

  /*- promocode -*/
  $('.gl-radio.promocode label, .gl-radio.promocode input').click(function(e) {
      $('.promocode-form').addClass('show');
  });

  /*- products-related -*/
  $('.ordering__products-related-top-panel').click(function(e) {
      if($(this).parent().hasClass('active')) {
          $(this).parent().removeClass('active');
      } else {
          $(this).parent().addClass('active');
      }
      return false;
  });

  /*- scroll to blocks -*/
  $(".to-specifications").click(function() {
    $('html, body').animate({
    scrollTop: $("#to-specifications").offset().top
    }, 1000);
  });

  $(".reviews-link, .to-reviews").click(function() {
    $('html, body').animate({
    scrollTop: $("#to-reviews").offset().top
    }, 1000);
  });

  /*- gallery-modal -*/
  $('#gallery-modal-btn').click(function(e) {
    $('.gallery-modal').addClass('show');
    $('body').addClass('scroll-none');
    return false;
  });

  $('.gallery-modal__close').click(function(e) {
    $('.gallery-modal').removeClass('show');
    $('body').removeClass('scroll-none');
  });

  /*- gallery-modal -*/
  var swiper = new Swiper(".gallery-small-slider", {
    autoHeight: true,
    direction: "vertical",
    mousewheel: true,
    spaceBetween: 30,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    scrollbar: {
        el: ".gallery-small-slider .swiper-scrollbar",
        hide: true,
      },
  });
  var swiper2 = new Swiper(".gallery-big-slider", {
    loop: true,
    effect: "fade",
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  /*- modal -*/
  const myModal = new HystModal({
      closeOnEsc: true,
      backscroll: true,
      afterClose: function(modal){
          let videoframe = modal.openedWindow.querySelector('iframe');
          if(videoframe){
              videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
          }
      },
  });

  /*- ideas__info -*/
  $('.ideas__info-bullet').click(function(e) {
      if($(this).parent().hasClass('show')) {
          $(this).parent().removeClass('show');
      } else {
          $(this).parent().addClass('show');
      }
      return false;
  });

  /*- favorites-modal -*/
  $('.user-panel__item.favorites').click(function(e) {
    $('.favorites-modal').addClass('show');
    $('body').addClass('scroll-none');
    return false;
  });

  $('.favorites-modal__close, .favorites-modal__overlay').click(function(e) {
    $('.favorites-modal').removeClass('show');
    $('body').removeClass('scroll-none');
  });
	
  /*- footer__col -*/
  $('.footer__col-item.changed .footer__small-title').click(function(e) {
      if($(this).parent().hasClass('show')) {
          $(this).parent().removeClass('show');
      } else {
          $(this).parent().addClass('show');
      }
      return false;
  });

  /*- favorites-modal -*/
  $('.ideas__info-bullet').click(function(e) {
    $('.ideas-modal').addClass('show');
    $('body').addClass('m-scroll-none');
    return false;
  });

  $('.ideas-modal__close, .ideas-modal__overlay').click(function(e) {
    $('.ideas-modal').removeClass('show');
    $('body').removeClass('m-scroll-none');
  });

  /*- search-form -*/
  $('.menu-btn').click(function(e) {
    $('.mobile-modal').addClass('show');
    $('body').addClass('m-scroll-none');
    return false;
  });

  $('.mobile-modal__close, .mobile-modal__overlay').click(function(e) {
    $('.mobile-modal').removeClass('show');
    $('body').removeClass('m-scroll-none');
  });

});