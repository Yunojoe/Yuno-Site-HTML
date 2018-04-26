$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.container');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', ' #2980b9');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    }
});