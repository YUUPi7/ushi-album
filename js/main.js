'use strict'

{

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


}