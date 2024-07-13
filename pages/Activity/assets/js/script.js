//window scroll


$(document).ready(function() {
    $(window).on("scroll", function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 80) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }
    });
});


$(document).ready(function(){

    const typed = new Typed('#type-it', {
        strings: ['Designer', 'BSIT-CST', 'Freelancer', 'Programmer', 'Developer',],
        typeSpeed: 100,
        loop:true
      });
});