$(document).ready(function(){
  $('nav ul li a').hover(function(){
    $(this).addClass('active'); 
  },
  function(){
    $(this).removeClass('active'); 
  })
})