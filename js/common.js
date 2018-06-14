


$(function() {



  

  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
   
     
   $('.iframe-popup').magnificPopup({
        type: 'iframe'
    });
  




  var pmn = $('#project_main_number');
  console.log(pmn.data("count"));
  if(pmn && typeof pmn.data("count") !== 'undefined'){ 

     
     var pmn_arr = pmn.data("count").split('');
     let new_arr = [];
     for(var i = 0; i < pmn_arr.length; i++){
        if(i == 0){
        new_arr.push('<span class="numb blue"> 0 1 2 3 4 5 6 7 8 9 </span>');
        }else if(pmn_arr[i] == '.'){
        new_arr.push('<span class="comma">.</span>');
        }else if(pmn_arr[i] == ' '){
        new_arr.push('<span class="comma"> </span>');
        }else if(pmn_arr[i] == ','){
        new_arr.push('<span class="comma">,</span>');
        }else{
        new_arr.push('<span class="numb"> 0 1 2 3 4 5 6 7 8 9 </span>');
        }

        // if(i == 0){
        //   new_arr.push('<span class="blue">'+pmn_arr[i]+'</span>');
        // }else if(pmn_arr[i] == '.'){
        //   new_arr.push(pmn_arr[i]);
        // }else{
        //   new_arr.push(' <span>'+pmn_arr[i]+'</span>');
        // }

        // if(i == 0){
        //   new_arr.push('<span class="blue">'+pmn_arr[i]+'</span>');
        // }else{
        //   new_arr.push(pmn_arr[i]);
        // }

     }

     pmn.find('.count').html(new_arr.join(''));
     var swith_change_scroll = 0;
     if(swith_change_scroll == 0){


     $(window).scroll(function() {


      if($('.numb').offset().top - $(window).scrollTop() < 400){
        swith_change_scroll = 1;
        count_anim(pmn_arr);
      }
      });

     } 
      setInterval(function(){
        if(swith_change_scroll == 1){
        pmn_arr = $('#project_main_number').attr("data-count").split('');
        count_anim(pmn_arr);
        // console.log(pmn_arr);
        }

      } , 5000);
       
      

  }

	 $('.wrap_progress_bar').each(function(index , el){
      $(this).addClass('wpb_'+index);
   });

   function count_anim(pmn_arr){
      let unit = -90;
      var num_index = -1;
     $(".numb").each(function(index, el) {
          num_index++;
          if(pmn_arr[num_index] == '.' || pmn_arr[num_index] == ' ' || pmn_arr[num_index] == ','){
              num_index++;
          }
          var rnd = pmn_arr[num_index];
          $(el).css('top', rnd * unit);
           // console.log(rnd);
          

      });

   }



// $(function () {
//         var fx = function fx() {
//           var dfd = $(".count").map(function (i, el) {
//               var data = parseInt(this.dataset.n, 10);
//               var props = {
//                 "from": {
//                     "count": 0
//                 },
//                 "to": {
//                     "count": data
//                 }
//               };
//             return $(props.from).animate(props.to, {
//                 duration: 1000 * 1,
//                 step: function (now, fx) {
//                     $(el).text(Math.ceil(now));
//                 },
//                 complete: function() {
//                    if (el.dataset.sym !== undefined) {
//                   el.textContent = el.textContent.concat(el.dataset.sym)
//                    }
//                 }
//             }).promise();
//         }).toArray();
//             return $.when.apply($, dfd);
//         };
        
//         var reset = function reset() {
//           console.log($(this).scrollTop());
//             if ($(this).scrollTop() > 50) {
//               $(this).off("scroll");
//                 fx()
//             }
//         };
//         $(window).on("scroll", reset);
//     });
  setTimeout( function(){
     for(var i = 0; i < $('.wrap_progress_bar').length; i++ ){
            if($('.wpb_'+i).offset().top - $(window).scrollTop() < 600){

               
              var percent_width = $('.wpb_'+i).find('.bar').data('percent'),
              start_color = $('.wpb_'+i).find('.bar').data('start-color');

               $('.wpb_'+i).find('.bar').css({'width' : percent_width+'%' , 'background' : start_color });

               
                   
                
            }
        }

  } , 500)
 

  $(window).scroll(function(){

 


 
        for(var i = 0; i < $('.wrap_progress_bar').length; i++ ){
          if(typeof $('.wpb_'+i).offset() !== 'undefined'){

            if($('.wpb_'+i).offset().top - $(window).scrollTop() < 600){

              var percent_width = $('.wpb_'+i).find('.bar').data('percent'),
              start_color = $('.wpb_'+i).find('.bar').data('start-color');

               $('.wpb_'+i).find('.bar').css({'width' : percent_width+'%' , 'background' : start_color });

                   
                
            }

          }
        }
        
  	
  			$(".main-header-page .header-img").css("transform" , "translate( 0px , "+ $(this).scrollTop() / 2  +"px)");
  		

  		if($(this).scrollTop() > $("#top").height() / 1.5){
  			$(" header").addClass("fixed");
  		}else{
  			$(" header").removeClass("fixed");
  		}


  		if($(this).scrollTop() > $("#top").height()){
  			$(".top_button").addClass("open");
  		}else{
  			$(".top_button").removeClass("open");
  		}
  });

  $(".work-buttons-wrap li").click(function(){

  	  $(".work-buttons-wrap li").removeClass('active');
  	  $(this).addClass('active');
  })

  $(".s-blog li").click(function(){

  	  $(".s-blog li").removeClass('active');
  	  $(this).addClass('active');
  })


  $('.blog-wrap').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  prevArrow: '<button class="PrevArrow"><img src="img/larrow-2.png" ></button>',
  nextArrow: '<button class="NextArrow"><img src="img/rarrow-2.png" ></button>',
  // centerMode: true,
  // focusOnSelect: true
});

  $('.aside_project_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  prevArrow: '<button class="PrevArrow"><img src="img/larrow-2.png" ></button>',
  nextArrow: '<button class="NextArrow"><img src="img/rarrow-2.png" ></button>',
  // centerMode: true,
  // focusOnSelect: true
});


$('.q-slider-image').slick({
  asNavFor: '.q-slider',
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 1000,
})
  $('.q-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    prevArrow: false,
    nextArrow: false,
    // autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    asNavFor: '.q-slider-image',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

	// $(".slider-wrpa-partners").slick({
 //        // autoplay: true,
 //        autoplaySpeed: 5000,
 //        speed: 600,
 //        slidesToShow: 6,
 //        slidesToScroll: 1,
 //        // pauseOnHover:false,
 //        dots: false,
 //        // pauseOnDotsHover:true,
 //        cssEase: 'linear',
 //        fade: false,
 //        draggable: true,
 //        prevArrow: '<button class="PrevArrow"></button>',
 //        nextArrow: '<button class="NextArrow"></button>',
 //    });

    $('.slider-wrpa-partners').slick({
      autoplay: true,
      autoplaySpeed: 5000,
	  infinite: true,
	  dots: false,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
	});

	$(".slider-conteiner").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        // pauseOnHover:false,
        dots: true,
        // pauseOnDotsHover:true,
        cssEase: 'linear',
        fade: true,
        draggable: false,
        asNavFor: '.text-slider-container',
        // prevArrow: '<button class="PrevArrow"></button>',
        // nextArrow: '<button class="NextArrow"></button>',
    });

    $('.text-slider-container').slick({
	  	asNavFor: '.slider-conteiner',
	    dots: false,
	    draggable: false,
	    prevArrow: false,
	    nextArrow: false,
	    infinite: true,
	    speed: 1000,
	});
	



});

 $(window).on('load', function () {

   
 	 $(".vl").addClass("open");

});


 $(document).ready(function(){
   var ar_l = [];
   $(".gallery img").each(function(indx, element){ // indx - номер элемента в наборе, element - сам элемент
  ar_l.push($(element).attr('src'));

});
   for(var i=0;i<$(".gallery img").length;i++){
   	$(".gallery img").eq(i).wrap("<a class='galleryItem' href='"+ar_l[i]+"'></a>");
   	
   }
   

   //----------------------------------------------------------------------------

var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);
  
  if(!groups[id]) {
    groups[id] = [];
  } 
  
  groups[id].push( this );
});


$.each(groups, function() {
  
  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true }
  })
  
});
	

 })


 
$(function() {
	var timelineBlocks = $('.timeline-item'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when entering the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
		    ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
		    ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('animate-it');

		});
	}
});