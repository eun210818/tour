$(function(){
  fnKatalk();
  fnmainNav();

  // skip menu
  $('.skip>a').focus(function(){
    $('.skip').addClass('active');
  });
  $('.skip>a').blur(function(){
    $('.skip').removeClass('active');
  });

  // 1066px pos_fix katalk / mainNav
  $(window).resize(function(){
    fnKatalk();
    fnmainNav();
  });

  // fn Katalk
  function fnKatalk(){
    var winWidth=$(this).width();
    if(winWidth>=1066){
      $('#katalk').text('카카오톡');
    }else{
      $('#katalk').text('카카오톡 상담');
    }
  };

  // header tgl button
  $('.tgl_btn').click(function(){
    $('.nav_box').slideToggle(200);
  });

  // fn mainNav
  function fnmainNav(){
    var winWidth=$(window).width();
    if(winWidth>=801){
      $('.nav_box').show();
    }else{
      $('.nav_box').hide();
    };
  };

  // main banner slider
  var mySwiper=new Swiper('.swiper-container',{
    speed:300,
  });
});