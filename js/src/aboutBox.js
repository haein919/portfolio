// aboutBox.js

(function($){
  var moreCode = '<div class="more_area"><div class="more_outer"><div class="close"><button type="button" class="close_btn"><i class="fas fa-times"><span class="hidden_context">닫기</span></i></button></div><div class="more_img"></div></div></div>';

  var aboutBox = $('#aboutBox');
  var aboutBtnArea = aboutBox.find('.about_btn_area');
  var aboutBtn = aboutBtnArea.find('button');

  var moreArea, close, moreImg;

  aboutBtn.on('click', function(e){
    e.preventDefault();
 // ------------------------------------------------
    aboutBtnArea.after(moreCode);     // 선택자 바로 뒤에
    moreArea = $('.more_area');
    close = moreArea.find('.close');
    moreImg = moreArea.find('.more_img');

 // ---------------------------------------------------------------------------------
    moreArea.stop().fadeIn(function(){
    close.children('button').focus();
    });
 // ----------------------------------------------
    close.on('click', function(e){
      e.preventDefault();
      moreArea.stop().fadeOut();
      moreArea.remove(); // galleryBox 해당 내용 자체를 삭제(F12로 확인 시 생성되면 사라지지 않고 계속 생기기 때문에 기입)
    });
 // ------------------------------------------------
  });


})(jQuery);