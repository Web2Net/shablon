
// Перемещаем блоки при изменении ширина окна

$(window).resize(function(event){
    adaptive_function();
});

function adaptive_header(w,h){
    var headerMenu=$('.header-menu');
    var headerLang = $('.header-top-lang');

    if(w<767){
        if(!headerLang.hasClass('done')){
            headerLang.addClass('done').appendTo(headerMenu); // Перебрасываем блок.header-top-lang в блок.header-menu
        }
    }
    else{
        if(headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo($('.header-top')); // Возвращаем блок.header-top-lang в блок.header-top
        }
    }

    if (w < 767) {
        if (!$('.header-bottom-menu').hasClass('done')) { 
            $('.header-bottom-menu').addClass('done').appendTo(headerMenu); // Перебрасываем блок.header-bottom-menu в блок.header-menu
        }
    }
    else {
        $.each($('.header-bottom-menu'), function(index, val){
            if($(this).hasClass('header-bottom-menu--right')){
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(2)); // Возвращаем 
                }
            }
            else{
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(0)); // Возвращаем 
                }
            }
        })
    }


}

function adaptive_function(){
    var w=$(window).outerWidth();
    var h = $(window).outerHeight();

    adaptive_header(w,h);
}

adaptive_function();