// portfolio_device.js
var deviceType = function(){
  var NowType;

  (function($){

  var device = [
    { type:'mob', size: 599 },
    { type:'tab', size: 1023 },
    { type:'lap', size: 1439 },
    { type:'pc'}
  ];

  var win = $(window);
  var ww = win.outerWidth(true);

  var sizeCheck = function(winW){
    var i=device.length -1; 
    var mytype;
    for(; i>0; i-=1){
      if(winW > device[i - 1].size){
        mytype = device[i].type;
        break;
      }else{
        mytype = device[0].type;
      }
    }
    // console.log(mytype);
      return mytype;
    };

    var beforeSize = sizeCheck(ww);
    NowType = beforeSize;

  win.on('resize', function(){
    var afw = win.outerWidth(true);
    var afterSize = sizeCheck(afw);

    if(beforeSize !== afterSize){
      window.location.reload();
    }
  });

    return NowType;
  })(jQuery);
  return NowType;
};
