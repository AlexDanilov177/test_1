$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__aroww-left" src="images/Arrow_left.svg" alt="aroww-left">',
        nextArrow: '<img class="slider__arrow slider__aroww-rigth" src="images/Arrow_rigth.svg" alt="aroww-rigth">',
    });

    $('.mobile-menu').on('click', function(){
        $('.menu__list').toggleClass('active');
    });

    // Мои экперементы
    function colorText(){
        $('.header__title, .header__text').toggleClass('newStyle');
    }

    $('.header__btn').on('mouseover', function(){
        colorText();
    })
    $('.header__btn').on('mouseout', function(){
        colorText();
    })

    $('.tel').on('keydown', function(event){
        if(event.which < 48 || event.which > 57){
            return false;
        }
    });

});