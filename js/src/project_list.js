// project_list.js

(function($){
  $.ajax({
    url:"../data/project_list.json",
    dataType:'json',
    context:document.body
  
   }).done(function(data){
    var win = $(window) ;
    var data = data;
    var imgUrl = '../img/project/';

    var projectBox = $('#projectBox');
    var projectOuter = projectBox.find('.project_outer');
    var projectArea = projectOuter.find('.project_area');
    
    projectArea.append('<ul></ul>');
    var projectUl = projectArea.children('ul');
    var liContent = '<li><a></a><div class="project_context"><span></span><dl><dt></dt><dd></dd></dl><div class="pro_btn"><button type="button">과정보기</button><a>바로가기</a></div></div></li>'
    var i = 0;
    var listEl, listImg, linkA;
    for(; i < data.length; i+=1){
      projectUl.append(liContent);
      listEl = projectUl.children('li').eq(i);
      listImg = listEl.children('a')
      listImg.css({'backgroundImage':'url(' + imgUrl + data[i].img + ')'});
      listEl.find('span').text(data[i].date);
      listEl.find('dt').text(data[i].title);
      listEl.find('dd').text(data[i].text);
      linkA = listEl.find('.pro_btn').find('a');
      linkA.attr({'href':'#'});
    }
    var projectLi = projectUl.children('li');

    var projectLiWidth = projectLi.eq(0).outerWidth();
    var projectLiMargin = projectLi.eq(0).outerWidth(true) - projectLiWidth;

    var browserSet = function(){
      projectLi.removeAttr('style');
      var winW = win.outerWidth();
      var liLen = parseInt( winW / (projectLiWidth + projectLiMargin) );
      console.log(liLen);
      var ulWidth = ( (projectLiWidth + projectLiMargin) * liLen) - projectLiMargin; // 마지막 list의 margin-rigth 값을 빼줌
      projectUl.css({'width': ulWidth + 'px' });
      // console.log(liLen, ulWidth);
      
      var lin = 0;
      var liNth = Math.ceil(projectLi.length / liLen);
      var n;
      for(; lin < liNth; lin +=1){
        n = (liLen * lin) - 1;
        // console.log(n);
        projectLi.eq(n).css({'margin-right':0});
      };
    }; // browserSet();
    browserSet();
  
    win.on('resize', function(){
      browserSet();
    });

     


   }); // $.ajax()
 // jQuery end
})(jQuery);