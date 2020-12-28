// headBox.js

(function($){
  // jQuery start
 
  // headBox 스크롤 45px이동 후 상단 고정
  var win = $(window); // 전체 window화면 'win'변수로 지정
  var headBox = $('#headBox'); // headBox 변수 지정
  var headOuter = headBox.find('.head_outer');
  var menuOuter = headBox.find('.menu_outer');
  var menuA = menuOuter.find('a');
 
  win.on('scroll', function(e){ // win에 scroll이라는 기능을 수행할 경우 함수 아래 실행 
   var winSt = win.scrollTop(); // winSt는 scroll 했을 시 생기는 값으로 변수로 지정
   if(winSt >= 1900 ){ // 스크롤 값이 45보다 크거나 같으면 아래 기능 수행
     headBox.css({'position':'fixed', 'top':20+'px', 'z-index':2000, 'width': 90 + '%',
     'left':0, 'right':0, 'margin':'auto', 'height':80+'px',
     'border-bottom':'1px solid rgba(0,0,0,0.4)', 
     'background-color':'rgba(255,255,255,0.9)' });
     headOuter.css({'paddingTop':0});
     menuA.css({'color':'#333', 'fontWeight':'bold'}); // headBox의 css값을 position:fixed, top:0; z-index:1500, width:100%;로 변경
   }else{ // 45보다 크거나 같지 않으면, 아래기능 수행
     headBox.removeAttr('style'); // if문에서 headBox에 변경해준 css값을 없애줌
     headOuter.removeAttr('style');
     menuA.removeAttr('style');
   };
  });
 
  // jQuery end
 })(jQuery);
 