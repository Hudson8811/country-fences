$('.burger').click(function(){
  var height = $(document).outerHeight();
  if (window.innerWidth < 651) {
    $('.menu_shadow').toggleClass('active').css('height', height - 156);
  } else {
    $('.menu_shadow').toggleClass('active').css('height', height - 102);
  }
  $('#header .menu_row .menu').toggleClass('active');
});

$('#header .menu_row .menu > ul > li.menu-item-has-children .mobile_menu').click(function(e){
          $(this).next().toggle();
});

$('#header .menu_row .menu .close').click(function(e){
          $('.menu_shadow').removeClass('active');
          $('#header .menu_row .menu').removeClass('active');
});

$('.menu_shadow').click(function(e){
          $('.menu_shadow').removeClass('active');
          $('#header .menu_row .menu').removeClass('active');
});

$(".mask").inputmask("+7 (999) 999 99 99");

$('.call_me').click(function(){
	$(this).removeAttr("href");
	$('#call_me').arcticmodal();
});

$('.work_slider').slick({
    infinite:false,
    dots: true,
    variableWidth:false,
    centerMode:false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.my_tabs ul li a').click(function() {
  $(this).closest('.my_tabs').find('li').removeClass('active');
  $(this).parent().addClass('active');
  $(this).closest('.my_tabs').find('.item').removeClass('active')
                    .eq($(this).parent().index()).addClass('active');
  return false;
});

$('.works_block .bg_block .work_slider .text_block .text a.more').click(function() {
  $(this).closest('.text').css('max-height', '700px');
  $(this).hide();
});

$('.price_block .dd .item .on_mobile .ah2.cp').click(function() {
  $(this).toggleClass('active');
  $(this).next().toggleClass('active');
});

$(".fancybox").fancybox({
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

$.widget( 'app.selectmenu', $.ui.selectmenu, {
  _drawButton: function() {
    this._super();
    var selected = this.element
    .find( '[selected]' )
    .length,
      placeholder = this.options.placeholder;
  
    if (!selected && placeholder) {
    this.buttonItem.html(placeholder);
    }
  }
  });
  
$(".select").selectmenu({ 
  placeholder: '<b>' + $(".select").attr("data-placeholder") + '</b>'
});

$(".select1").selectmenu({ 
  placeholder: '<b>' + $(".select1").attr("data-placeholder") + '</b>'
});

$(".select2").selectmenu({ 
  placeholder: '<b>' + $(".select2").attr("data-placeholder") + '</b>'
});

$(".select3").selectmenu({ 
  placeholder: '<b>' + $(".select3").attr("data-placeholder") + '</b>'
});

$(".select4").selectmenu({ 
  placeholder: '<b>' + $(".select4").attr("data-placeholder") + '</b>'
});

$( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      range: "min",
      value: 40,
      min: 1,
      max: 100,
      create: function() {
        handle.text( $( this ).slider( "value" )  + ' км');
      },
      slide: function( event, ui ) {
        handle.text( ui.value  + ' км');
      }
    });
  } );

$('.gallery_button').click(function(){
  $('#gallery_modal').arcticmodal();
});

$('.gallery_page .pag_block a.active').click(function(){
  $(this).removeAttr("href");
  $('.gallery_page .pag_block a').toggleClass("open");
  $('.gallery_page .pag_block').toggleClass("open");
  $('.gallery_page .row').toggleClass("open");
  $('.gallery_page .pag_block a.active').toggleClass("open_menu");
  $(this).removeClass("open");
});

$('.call_me2').click(function(){
  $(this).removeAttr("href");
  $('#call_me2').arcticmodal();
});

$('.call_me3').click(function(){
  $(this).removeAttr("href");
  $('#call_me3').arcticmodal();
});

$('.palette_slider').slick({
    infinite:false,
    dots: true,
    variableWidth:false,
    centerMode:false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });

$('.palette_block .green_button').click(function(){
  $(this).removeAttr("href");
  $('#palette_modal').arcticmodal();
  $('.palette_slider').slick('refresh');
});

$('.example_slider').slick({
    infinite:false,
    dots: false,
    variableWidth:false,
    centerMode:false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
  });

$('.width-gray-block .block .more_button a').click(function(){
  $(this).hide();
  $('.width-gray-block .block .flex_wrap .item').show();
});


/************* 1000 *****************/
if (window.innerWidth < 1000) {
  $('.bgvideo').remove();
}


/*************** 651 *****************/
if (window.innerWidth < 651) {

  $('.calculation__page .calc_bg .row2').clone().appendTo('.calculation__page .calc_bg .mobile_row2');
  $('.calculation__page .calc_bg .no_mobile_script').remove();

  $('#no_mobile').remove();
  $('.mobile_slider').slick({
    infinite:false,
    dots: true,
    variableWidth:false,
    centerMode:false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });

  $(function () {
    $(window).scroll(function () {
      var pos = $(this).scrollTop();
      var blockHeight = $('.calculation__page .mobile_script').offset().top + $('.calculation__page .mobile_script').outerHeight() - 58;
      var destination = $('.calculation__page .mobile_script').offset().top;
      if (pos > destination){
        if (pos < blockHeight) {
          $('.calculation__page .price_row .price').addClass('slide');
          $('.calculation__page .price_row .price').removeClass('slide_stop');
        } else {
          $('.calculation__page .price_row .price').addClass('slide_stop');
        }
      }
      else{
        $('.calculation__page .price_row .price').removeClass('slide');
        $('.calculation__page .price_row .price').removeClass('slide_stop');
      }
    });
  }); 
}

window.onload = function() {
if (window.innerWidth < 651) {
      $('.palette_slider').slick('slickFilter','.mini_slide');
      $('.palette_modal .item > span').wrap('<span></span>');
    } else if (window.innerWidth < 1070) {
      $('.palette_slider').slick('slickFilter','.med_slide');
    } else {
      $('.palette_slider').slick('slickFilter','.big_slide');
    }
};