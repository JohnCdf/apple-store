function menuAnimation() {
    $("#nav-icon").toggleClass('active');
    $(".global-nav").toggleClass('active');
    $(".menu_nav").toggleClass('active');
    $(".fa-shopping-bag").toggleClass('active');

    var interval = 0;

    var list = $(".menu_nav").children();

    if($(list).children().hasClass('active')){
        $($(list).children().get().reverse()).each(function(){
            var element = $(this);
    
            setTimeout(function(){
                element.toggleClass('active');
            },interval);
    
            interval+=35;
    
        })
    } else {
        $(list).children().each(function(){
            var element = $(this);
    
            setTimeout(function(){
                element.toggleClass('active');
            },interval);
    
            interval+=35;
    
        })
    }
}
$("#nav-icon").click(function(){
    menuAnimation()
});
$(".directory-section-label").click(function(){
    $(this).find('a').toggleClass('active');
    $(this).next().toggleClass('active');
});

window.addEventListener('resize',function(){
    if(window.innerWidth > 723 && $(".menu_nav").hasClass("active")){
        menuAnimation()
    }
})