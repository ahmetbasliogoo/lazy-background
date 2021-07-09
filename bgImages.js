$(document).ready(function(){
    
    for(i = 0; i < 22; i++) {
        $('#cats').append(`<div class="container__img col-md-6 col-lg-3" data-src="./images/${i+1}.jpg" alt="img"></div>`);
      }
      
    $('.container__img').lazy()

})