'use strict'

{

  // メニューモーダル
  const open = document.getElementById('open');
  const menu = document.querySelector('.menu');
  const close = document.getElementById('close');


  open.addEventListener('click', ()=>{
    menu.classList.add('show');
    open.classList.add('hide');
    close.classList.add('show');
  });


  close.addEventListener('click', ()=>{
    menu.classList.remove('show');
    open.classList.remove('hide');
    close.classList.remove('show');
  });
  menu.addEventListener('click', ()=>{
    menu.classList.remove('show');
    open.classList.remove('hide');
    close.classList.remove('show');
  });







  // トップのフェードイン
  $('.top h1').fadeIn(2500)


  // イメージモーダル

  $('.simg').click(function() {
    const imgSrc = $(this).attr('src');
    $('.bigimg').children().attr('src', imgSrc);
    $('.img-modal').fadeIn();
    $('body, html').css('overflow-y', 'hidden');
  });

  $('#img-close').click(function(){
    $('.img-modal').fadeOut();
    $('body, html').css('overflow-y', 'visible')
  })
 


}
