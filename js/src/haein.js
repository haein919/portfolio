// haein.js

(function($){
 // jQuery start
  var win = $(window) ;
  var winH = win.outerHeight();
  
  var canvas = document.querySelector('.paper');
  var ctx = canvas.getContext('2d');
  
  var baseColor = "#07a";
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.strokeStyle = baseColor;
  ctx.font = "40px Noto Sans KR";
  ctx.textAlign = 'center';
  ctx.fillStyle = baseColor;

    var MyGraph = function(x, y, p, s){		
      var posX = x * 250 ;
      var posY = y * 250 -200;
      var percent = p ; 
      var skill = s || 'program';
      // var 
      
      var animationCircle;
      var i = 0;
      var CircleGraph = function(){
        animationCircle = function(percent){
  
          var lineWidth = 20;
          var r    = 100;
          var rect = (r + lineWidth) * 2 + 10;
          ctx.lineWidth = lineWidth;
        
        var myP = function(percent){
          // percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
          var p = (percent / 100 * 2) + 1.5;
          return Math.PI * p;
        };
        // 240은 (반지름 100과, 선두께 15) * 2 계산값보다 10큰 영역으로 설정
        ctx.clearRect(posX - (rect/2), posY - (rect/2), rect, rect);
  
        ctx.beginPath();
        ctx.arc(posX, posY, r , Math.PI * 1.5 , myP(percent), false);
        ctx.stroke();		
        ctx.textAlign = 'center';
        ctx.fillStyle = baseColor;
        ctx.font = "normal 35px Noto Sans KR";
        ctx.fillText(skill, posX, posY-15);
        ctx.font = "bold 40px Noto Sans KR";
        ctx.fillText(percent+ '%', posX, posY + 40);
      };
  
      i += 1;
      animationCircle( i );
      (i < percent) ? requestAnimationFrame(CircleGraph): 
                      cancelAnimationFrame(CircleGraph);
    };
    CircleGraph();
  }// MyGraph(x좌표, y좌표, percent, 스킬명);
  
  
  MyGraph(1,1, 70, 'HTML');
  MyGraph(2,1, 70, 'CSS');
  MyGraph(2,2, 40, 'jQuery');
  MyGraph(1,3, 70, 'Photoshop');
  MyGraph(2,3, 70, 'Illustrator');
  MyGraph(3,3, 40, 'Indesign');
  

 // jQuery end
})(jQuery);
