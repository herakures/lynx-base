$(function(){
    var $w = $(window);
    $('.navbar-nav li a[href^=#]').on('click', function() {
       // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      var navHeight = $('.navbar-nav').height();
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position - navHeight - 20}, speed, 'swing');
      return false; 
    });

});