$(document).ready(function(){



  /*to make it go to appropriate anchor link on click;  need something beside click to do thiks*/
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var headerHeight = $(".menu").height();

      $('html, body').stop().animate({
          'scrollTop': ($target.offset().top - headerHeight)     //minutes headerHeight because menu is fixed and covers up top of anchor links; have to change click to something else
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

  $(window).scroll(function() {
      var height = $(window).scrollTop();

      if(height > 100) {
        $(".menu").css({"background-color": "#fff", "border-bottom": "solid 1px #d8d8d8", "opacity": "1", "margin-top": "0", "color": "#282884", "font-size": "19px"});
        $(".menu a").css({"color": "#282884"});
        $(".menu-text").css({"margin-top": "11px"});
        $("#dLabel").css({"margin-top": "8px", "border": "1px solid #282884", "color": "#282884"});
        //$("a:link, a:active").css({"color": "#44B2AA"});
        $(".logo-image").css({"background": "url('images/logo-whitebg.png')", "background-size": "60px 60px", "width": "60px", "height": "60px", "margin-top": "-2px"});
        $(".logo-title").css({"margin-top": "6px", "font-size": "30px", "color": "#282884"})
      }

      if (height < 100) {
        $(".menu").css({"background": "none", "border-bottom": "none", "opacity": "1", "margin-top": "0", "color": "#fff", "font-size": "21px"});
        $(".menu a").css({"color": "#fff"});
        $(".menu-text").css({"margin-top": "15px"});
        $("#dLabel").css({"margin-top": "10px", "border": "1px solid #eee", "background": "none", "color": "#fff"});
        //$("a:link, a:active").css({"color": "#282884"});
        $(".logo-image").css({"background": "url('images/logo-whitebg.png')", "background-size": "70px 70px", "width": "70px", "height": "70px"});
        $(".logo-title").css({"margin-top": "8px", "font-size": "33px", "color": "#fff"})
      }
  });
