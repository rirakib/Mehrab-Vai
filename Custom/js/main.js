$(document).ready(function(){

    // STICKY MENU
    $(".js--sticky-menu").waypoint(function(direction){
        if(direction == "down"){
          $("nav").addClass("sticky");
        }else{
          $("nav").removeClass("sticky");
        }
      });

   // RECOMMENDED SECTION
   $('.recommended-slider').slick({
    dots: true,
    infinite: true,
    autoplayTimeou: 3000,
    autoplay: true, 
    speed: 300,
    slidesToShow: 4,
    prevArrow:".recommended-prev-btn",
    nextArrow:".recommended-next-btn",
    slidesToScroll: 1,
    responsive: [
   {
   breakpoint: 1025,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: true,
   dots: true
   }
 },
 {
   breakpoint: 860,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1
   }
 },
 {
   breakpoint: 820,
   settings: {
   slidesToShow: 2,
   slidesToScroll: 1
   }
 },
 {
  breakpoint: 680,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
}
 ]
}); 

// FOR HOME SECTION
$('.for-your-home-slider').slick({
    dots: true,
    infinite: true,
    autoplayTimeou: 3000,
    autoplay: true, 
    speed: 300,
    slidesToShow: 4,
    prevArrow:".your-home-prev-btn",
    nextArrow:".your-home-next-btn",
    slidesToScroll: 1,
    responsive: [
   {
   breakpoint: 1025,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: true,
   dots: true
   }
 },
 {
   breakpoint: 860,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1
   }
 },
 {
   breakpoint: 820,
   settings: {
   slidesToShow: 2,
   slidesToScroll: 1
   }
 },
 {
  breakpoint: 680,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
}
 ]
}); 

// PERSONAL CARE SECTION
$('.personal-care-slider').slick({
    dots: true,
    infinite: true,
    autoplayTimeou: 3000,
    autoplay: true, 
    speed: 300,
    slidesToShow: 4,
    prevArrow:".personal-care-prev-btn",
    nextArrow:".personal-care-next-btn",
    slidesToScroll: 1,
    responsive: [
   {
   breakpoint: 1025,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: true,
   dots: true
   }
 },
 {
   breakpoint: 860,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1
   }
 },
 {
   breakpoint: 820,
   settings: {
   slidesToShow: 2,
   slidesToScroll: 1
   }
 },
 {
  breakpoint: 680,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
}
 ]
});

// PERSONAL CARE SECTION
$('.trending-slider').slick({
    dots: true,
    infinite: true,
    autoplayTimeou: 3000,
    autoplay: true, 
    speed: 300,
    slidesToShow: 4,
    prevArrow:".trending-prev-btn",
    nextArrow:".trending-care-next-btn",
    slidesToScroll: 1,
    responsive: [
   {
   breakpoint: 1025,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: true,
   dots: true
   }
 },
 {
   breakpoint: 860,
   settings: {
   slidesToShow: 3,
   slidesToScroll: 1
   }
 },
 {
   breakpoint: 820,
   settings: {
   slidesToShow: 2,
   slidesToScroll: 1
   }
 },
 {
  breakpoint: 680,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
}
 ]
});

// CLIENT REVIEW SECTION
$('.client-review-slider').slick({
    dots: true, 
    autoplay: true,
    speed:1000,
    autoplaySpeed: 4000,
    slidesToShow:1,
    slidesToScroll:1,
    prevArrow:".client-prev-btn",
    nextArrow:".client-next-btn"
 });

// PAGE UP SECTION
$(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    }else{
      $('#topBtn').fadeOut();
    }
    });
  
    $("#topBtn").click(function(){
    $('html,body').animate({scrollTop: 0},900)
   });









});

// PAGE LOADING SECTION
$(window).on('load', function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({
		'overflow': 'visible'
	});
});

// MOBILE MENU

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}






















