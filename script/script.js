function(){
    const menu = $('.gnb > ul > li > a');
    menu.click(function(){
        $('.sub').slideUp();
        $(this).next().slideDown();
    });
};