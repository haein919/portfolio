// process.js

(function($){
  $.ajax({
    url:"../data/proccess.json",
    dataType:'json',
    context:document.body
  
   }).done(function(data){
    var win = $(window);
    var data = data;
    var imgUrl = '../img/';

    var projectBox = $('#projectBox');
    var projectOuter = projectBox.find('.project_outer');
    var projectArea = projectOuter.find('.project_area');
    var processArea = projectOuter.find('.process_area');
    var processImg = processArea.find('.process_img');

    processImg.append('<ul></ul>');
    var processUl = processImg.children('ul');
    var processCode = '<li><p></p></li>';

    var i = 0;
    var processLi;

    // 각 project의 과정보기에 들어갈 li 5개 생성
    for(; i < 5; i+=1){
      processUl.append(processCode);
      processLi = processUl.children('li').eq(i);
      processLi.addClass('process_'+(i+1));
    };
    processLi = processUl.children('li'); // li 다시 지정


    // li 5개중 한개마다 들어갈 이미지와 텍스트 삽입
    var ModalData = function(i){
      var j = i || 0;      
      processLi.eq(0).css({backgroundImage:'url('+ imgUrl + data[j].sample.image +')'});
      processLi.eq(0).find('p').text(data[j].sample.text);
      
      processLi.eq(1).css({backgroundImage:'url('+ imgUrl + data[j].plan.image +')'});
      processLi.eq(1).find('p').text(data[j].plan.text);
      
      processLi.eq(2).css({backgroundImage:'url('+ imgUrl + data[j].frame.image +')'});
      processLi.eq(2).find('p').text(data[j].frame.text);
      
      processLi.eq(3).css({backgroundImage:'url('+ imgUrl + data[j].design.image +')'});
      processLi.eq(3).find('p').text(data[j].design.text);
      
      processLi.eq(4).css({backgroundImage:'url('+ imgUrl + data[j].coding.image +')'});
      processLi.eq(4).find('p').text(data[j].coding.text);
    }; // ModalData();

    var projectUl = projectArea.children('ul');
    var projectLi = projectUl.find('li');
    var btn = projectLi.find('button');
  
    var close, narr;
    var timed = 500;
    var indexCheck;
  
    // 과정보기 버튼 클릭 시 modal창 생성
    btn.on('click', function(e){
      e.preventDefault();
      var it = $(this).parents('li');
      var itI = it.index();
      indexCheck = itI; 
      ModalData(indexCheck);

      close = processArea.find('.close');
      narr = processImg.find('p');
      
      processArea.stop().fadeIn(function(){
        close.children('button').focus();
        setTimeout(function(){
          narr.addClass('action');
        }, timed/2);
      });
 
   // ------------------------------------------------
      var proccessBtn = processArea.find('.np_btn');
      var N_btn = proccessBtn.children('button').eq(0);
      var P_btn = proccessBtn.children('button').eq(1);

      var processImgLast = processLi.eq(-1).clone();
      processUl.prepend(processImgLast);
      var reProcessLi = processUl.children('li');

      processUl.css({ 'margin-left':-100 + '%', 'width':reProcessLi.length * 100 + '%' });
      reProcessLi.css({ 'width':(100/reProcessLi.length) + '%' });

      var slideN = 0;
      var permission = true;
      N_btn.on('click', function(e){
        e.preventDefault();
        if(permission){
          permission = false;
          slideN +=1;
          processUl.stop().animate({'left':slideN * -100 + '%' },function(){
            if(slideN >= processLi.length-1){
              slideN = -1;
              processUl.stop().css({'left':slideN * -100 + '%' });
            }
            setTimeout(function(){
              permission = true;
            },100);
          });
        }
      }); // N_btn();

      P_btn.on('click', function(e){
        e.preventDefault();
        if(permission){
          permission = false;
          slideN -=1;
          processUl.stop().animate({ 'left': slideN * -100 + '%' }, function(){
            if(slideN <=-1){
              slideN = processLi.length-1;
              processUl.stop().css({ 'left': slideN * -100 + '%' });
            }
            setTimeout(function(){
              permission = true;
            },100);
          });
        }
      }); // P_btn();
      // ----------------------------------------------
      close.on('click', function(e){
        e.preventDefault();
        processArea.stop().fadeOut();
        projectLi.eq(indexCheck).find('button').focus();
        narr.removeClass('action');
      });

    });

   }); // $.ajax()
 // jQuery end
})(jQuery);