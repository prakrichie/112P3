



$(document).ready(function(){
    

    $("#hello").click(function(){
        $("pf").hide();
    });
  
});


 
 

      


    $(function () {
    "use strict";
    
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src");
    });
    
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    
});
           





           $(function() {
                
                var welcomeSection = $('.welcome-section'),
                    enterButton = welcomeSection.find('.enter-button');
                
                setTimeout(function() {
                    welcomeSection.removeClass('content-hidden');
                }, 500);
                
                enterButton.on('click', function(e) {
                    e.preventDefault();
                    welcomeSection.addClass('content-hidden').fadeOut();
                });
                
                
            })();
            
           


