// homeBox.js
(function($){

  var win = $(window) ;
  var winH = win.outerHeight();

  $('html, body').animate({scrollTop:0});

  var homeBox = $('#homeBox');
  var homeBoxHeight = homeBox.outerHeight();

  var aboutWrap = $('#aboutWrap');
  var aboutBox = $('#aboutBox');
  aboutWrap.css({paddingTop:winH*3.5+'px'});
  var aboutScroll =aboutBox.offset().top;
  // console.log(aboutScroll);

  var homeText = homeBox.find('.context_area')
  var moonImg = homeBox.find('.moon_img');
  

  // 브라우저 스크롤시 수행
  var MoonFn = function(setScroll){
    var sscroll = setScroll || 0 
    return 95-(sscroll)*5;
  };
  MoonFn();

  win.on('scroll', function(){
    var winSt = win.scrollTop();
    var setScroll = winSt /100;
    var per = winSt / winH;
    // console.log(winSt);
    var i =0;
  // 달 나타나면서 올라가기
  
  // MoonFn(setScroll);
  // console.log( MoonFn(setScroll) );
  var homeBoxOp;
  var opacityR;
  homeBox.css({opacity: 1});
  homeBoxOp =  1+MoonFn(setScroll)/50;
    // console.log('homeBoxOp: ', 1-homeBoxOp);
    if(MoonFn(setScroll) <= 100 && MoonFn(setScroll) > 50){      
      moonImg.css({'background-positionY':  MoonFn(setScroll) + '%'});
    }else if(MoonFn(setScroll) > 0 && MoonFn(setScroll) <= 50){
      opacityR = i + 1 - per;
      homeText.css({'opacity':-opacityR});
    }else{
      // console.log('!!!');
      // homeBoxOp =  MoonFn(setScroll)/50;
      homeBox.css({opacity:homeBoxOp});
      // console.log( homeBoxOp );
      if(parseFloat(homeBox.css('opacity')) <= 0){
        homeBox.hide();
      }else{
        homeBox.show();
      }
    }

    // if( 969 < winSt < 1500 ){
    //   var opacityR = i + 1 - per;
    //   homeText.css({'opacity':-opacityR});
    // }

    // if(winSt > 1900){
    //   // homeBox.css({'position':'static'});
    // }else{
    //   homeBox.removeAttr('style');
    // }
  });

 // jQuery end
})(jQuery);
