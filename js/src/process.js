// process.js

(function($){
  $.ajax({
    url:"../data/project_process.json",
    dataType:'json',
    context:document.body
  
   }).done(function(data){
    var win = $(window);
    var data = data;
    var imgUrl = '../img/yankeecandle/';

    var projectBox = $('#projectBox');
    var projectOuter = projectBox.find('.project_outer');
    var processArea = projectOuter.find('.process_area');
    var processImg = processArea.find('.process_img');

    processImg.append('<ul></ul>');
    var processUl = processImg.children('ul');
    var processCode = '<li><p></p></li>';

    var i = 0;
    var processLi;

    for(; i < 4; i+=1){
      processUl.append(processCode);
      processLi = processUl.children('li').eq(i);
      processLi.addClass('process_'+(i+1));
    };
    var j = 0;
    var liImg_01, liText_01;
    for(; j <data.length; j+=1){
      liImg_01 = processUl.children('li').eq(j);
      liImg_01.css({'backgroundImage':'url(' + imgUrl + data[j].sImg+')'});
      liText_01 = liImg_01.children('p');
      liText_01.text(data[j].sText);
    }


   }); // $.ajax()
 // jQuery end
})(jQuery);