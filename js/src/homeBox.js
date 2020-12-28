// homeBox.js
(function($){

  var win = $(window) ;
  var winH = win.outerHeight();

  var homeBox = $('#homeBox');
  var homeBoxHeight = homeBox.outerHeight();
  var aboutBox = $('#aboutBox');
  var aboutScroll =aboutBox.offset().top;
  console.log(aboutScroll);

  var homeText = homeBox.find('.context_area')
  var moonImg = homeBox.find('.moon_img');
  

  // 브라우저 스크롤시 수행
  win.on('scroll', function(){
    var winSt = win.scrollTop();
    var setScroll = winSt /100;
    var per = winSt / winH;

    var i =0;
  // 달 나타나면서 올라가기
    if( winSt < 969){
      moonImg.css({'background-positionY':  (95-(setScroll)*5) + '%'})
    }

    if( 969< winSt < 1500 ){
      var opacityR = i + 1 - per;
      homeText.css({'opacity':-opacityR});
    }

    if(winSt > 1900){
      homeBox.css({'position':'static'});
    }else{
      homeBox.removeAttr('style');
    }
  });

 // jQuery end
})(jQuery);
