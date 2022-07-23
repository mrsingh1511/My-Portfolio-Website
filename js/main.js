// innitiate js
new WOW().init();

// js for sticky header.....

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove("header");
  } else {
    header.classList.remove("sticky");
    header.classList.add("header");
  }
}

// skill section progress bar js

// $('.section-box').waypoint(function(){
//   $('.title').each(function(){
//     $(this).addClass('title2');
//   });
// },{ offset: '10%'});




$('#skills').waypoint(function() {
  $('.progress .progress-bar').each(function() {
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, { offset: '80%'} );


//portfolio filter js

$(document).ready(function(){
	$('.filter').click(function(){
		var value = $(this).attr('data-filter');

		if(value == 'all')
		{
			$('.filter').removeClass('active');
			$(this).addClass('active');
			$('.item').show().css("transition",".5s");
		}
		else
		{
			$('.filter').removeClass('active');
			$(this).addClass('active');
			$('.item').not("."+value).hide();
			$('.item').filter("."+value).show();
		}
	});
});


//owl carousel js


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	nav:false,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//preloader js

$(window).on('load', function() {
  setTimeout(function () {
    $('.spinner-wrapper').css("display","none");
  })});

  



