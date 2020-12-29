// top_btn.js

(function($){
  // jQuery start

  // top버튼 기능  
 var win = $(window);
 var topBtn = $('.top_btn');
 topBtn.hide();

 win.on('scroll',function(e){
   var winSt = win.scrollTop();
   if(winSt >= 900){
     topBtn.stop().fadeIn();
   }else{
     topBtn.stop().fadeOut();
   }
 });
 topBtn.on('click', ['a'], function(e){
   e.preventDefault();
   var it = $(this).find('a');
   var itAttr = it.attr('href');
   var itOffset = $(itAttr).offset().top;
   $('html, body').animate({ scrollTop:0 });
 });

// jQuery end
})(jQuery);