$(function(){

  // Sub-menu_part
   $('.sub_menu_part').hide(),
   $('.sub_menu_drop_down').click(function(){
    $('.sub_menu_part').toggle()
   })


  // Banner Slick Slider 
$('.banner_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  // 2nd Slick Slider 
  $('.service_img_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:true,
  });

  // 3rd Slick Slider 
  $('.testimonial_slick_slider_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:true,
  });

  // Project_page Slick Slider Start 
  $('.our_project_details').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots:true,
    prevArrow: false,
    nextArrow: '<i class="fa-solid fa-angle-right next_arrow"></i>'
  });




  // Counter Up 
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');


  
});