$(document).ready(function () {
  //активация бокового меню в мобилке
  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
  //активация поиска в мобилке
  $('.overlay-for-search').on('click', function () {
    $('.mobile-version-search').removeClass('active');
    $('.overlay-for-search').removeClass('active');
  });
  $('.mobile-version--header a#mobile-version-search-btn').on('click', function () {
    $('.mobile-version-search').addClass('active');
    $('.overlay-for-search').addClass('active');
  });
  //активация меню в категории
  $(".catMenu-item").click(function () {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }

    $(".catMenu-item-other").slideToggle('fast');
    if($(".catMenu-item-other").hasClass('show')){
      $(".catMenu-item-other").removeClass('show');
    }else{
      $(".catMenu-item-other").addClass('show');
    }
  });
  //активация фильтра в категории
  $('.close-filter, .overlay').on('click', function () {
    $('#categoryMainFilter').removeClass('active');
    $('.overlay').removeClass('active');
    $('body').removeClass('js-no-scroll')
  });
  $('#categoryFilterCollapse').on('click', function () {
    $('#categoryMainFilter').addClass('active');
    $('.overlay').addClass('active');
    $('body').addClass('js-no-scroll');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
  //активация подфильтра в категории
  $('.return-btn, .overlay').on('click', function () {
    $('.categoryItemFilter').removeClass('active');
    $('.overlay').removeClass('active');
  });
  $('.categoryFilter-items a').on('click', function () {
    $(this).next().addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
  //карусель для хитов продаж
  $('#related-products-carousel').owlCarousel({
    items: 6,
    loop:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:true,
    navText: [
      "<i class=\"fas fa-chevron-left\"></i>",
      "<i class=\"fas fa-chevron-right\"></i>"
    ],
    responsive:{
      0:{
        items:2,
        nav:false
      },
      900:{
        items:6
      }
    }
  });
  //карусель для лучшие предложения
  $('#best-offer-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:30,
    dots: false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:false,
    responsive:{
      0:{
        items:2,
        nav:false
      },
      900:{
        items:3
      }
    }
  });
  //карусель для главной
  $('.main-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:false
  });
//карусель на главном актуальные
  $('.actual-carousel').owlCarousel({
    items: 6,
    loop:true,
    margin:30,
    dots: false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:true,
    navText: [
      "<i class=\"fas fa-chevron-left\"></i>",
      "<i class=\"fas fa-chevron-right\"></i>"
    ],
    responsive:{
      0:{
        items:3,
        nav:false
      },
      900:{
        items:6
      }
    }
  });
  //карусель для главной широкий
  $('#wide-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:false
  });
  //выделение сердечки при клике
  $(".item--like a").on('click', function (){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
  //слайдер в карточке товара
  $('.slider-container').find('.slider-for').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-container .slider-nav'
  });
  $('.slider-container').find('.slider-nav').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-container .slider-for',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true
  });
});


