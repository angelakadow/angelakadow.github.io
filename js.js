    function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
        showImages('.bullet');
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
        showImages('.bullet');
    });

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

var visible = 1;

$(document).ready(function() {
    $("#one").show();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();
    });

$(document).ready(function() {

 function checkWidth() {
    var windowWidth = $(window).width();
    if (windowWidth <= 850) {
        $(".dropdown").show();
    } else {
        $(".dropdown").hide();
    }
 }
 checkWidth();

 $(window).resize(checkWidth);
});

$(document).ready(function() {

    $("#left").on('click', function(){
        if (visible === 1) {
            visible = 5;
            console.log(visible);
        }
        else {
            visible = visible - 1;
            console.log(visible);
        }
    });

    $("#right").on('click', function() {
        if (visible === 5) {
            visible = 1;
            console.log(visible);
        }
        else {
            visible = visible + 1;
            console.log(visible);
        }
    });

    $('.arrow').on('click', function() {
        if (visible === 1) {
            $("#one").show();
            $("#two").hide();
            $("#three").hide();
            $("#four").hide();
            $("#five").hide();
        }
        else if (visible === 2) {
            $("#one").hide();
            $("#two").show();
            $("#three").hide();
            $("#four").hide();
            $("#five").hide();
        }
        else if (visible === 3) {
            $("#one").hide();
            $("#two").hide();
            $("#three").show();
            $("#four").hide();
            $("#five").hide();
        } 
        else if (visible === 4) {
            $("#one").hide();
            $("#two").hide();
            $("#three").hide();
            $("#four").show();
            $("#five").hide();
        }
        else {
            $("#one").hide();
            $("#two").hide();
            $("#three").hide();
            $("#four").hide();
            $("#five").show();
        }
    });
});