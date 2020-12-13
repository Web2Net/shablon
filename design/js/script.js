$(document).ready(function(){

    $('.header-menu__burger').click(function(event){
        $('.header-menu__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});
