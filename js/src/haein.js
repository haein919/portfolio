// haein.js

(function($){
 // jQuery start
  var win = $(window) ;
  var winH = win.outerHeight();

  var homeBox = $('#homeBox');
  var h1 = homeBox.find('h1');
  var frontImg = homeBox.find('.front_img');
  var backImg = homeBox.find('.back_img');

  var setN = 1.5;

  // 브라우저 스크롤시 수행
  win.on('scroll', function(){
    var winSt = $(this).scrollTop();
    var per = winSt / winH;
    var scaleR = 1+per;  // 100% 기준에서 더하기 처리를 해줌 scale을 1부터 커지게 하기 위해 1을 더함
    var opacityR, airper, logoPer; 

    // 4. logo 사라지게 만들기
    // 5. logo 사라지는 동안 앞에 투명막 생기게 하기 (logo가 안눌리게 처리하는 것)
    var logoR = 0.5;
    if( per >= logoR){
      logoPer = (1+logoR) - per;
      console.log( logoR + per );
      h1.css({'opacity':logoPer, 'transform':'scale('+ (logoR + per) + ')' });

      homeBox.addClass('default');
    }else{
      homeBox.removeClass('default');
    }
    
    // 1. frontImg가 점점 커지게( transform:scale() );
    // 2. 점점 사라지게
    opacityR = setN + 1 - per;

    if(scaleR <=setN){ // 일정량 부분에서 크기 고정됨 // setN(=1.5)보다 작은 수치까지만 처리됨
      // console.log('scale:', 1 + per); // 1을 100%라고 해줌
      frontImg.css({'transform':'scale('+ scaleR +')'})
    }else if(scaleR >= setN +1){ // 1.5부터 2.5까지는 고정된 크기로 보여준 다음에 그 이후 부터 투명도 조절
      // console.log('opacity:', opacityR +1);
      frontImg.css({'opacity':opacityR});
    }

    // 6. frontImg의 투명도가 0이 되면, headBox를 사라지게 만들기
    if(opacityR < 0){
      console.log( '사라진위치:', win.scrollTop() );
      homeBox.hide();
    }else{
      homeBox.show();
    }

  // 3. 비행기 나타나면서 올라가기
    if(scaleR > setN){
      airper = (scaleR - setN)*100;
      // console.log(airper);
      backImg.css({'transform':'scale(' + scaleR + ')'})
    }
  });

 // jQuery end
})(jQuery);
