
$(document).ready(function () {


    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.ttr-sidebar').toggleClass('opened-sidebar');
  });



    // Sidebar option 
    $('#clk-optID1').click(function(){
        $('.ttr-sidebar-navi .click-option > span.ttr-arrow-icon1').toggleClass('active');
        $('.inner-list1').toggleClass('active-list1');
    });
    $('#clk-optID2').click(function(){
        $('.ttr-sidebar-navi .click-option > span.ttr-arrow-icon2').toggleClass('active');
        $('.inner-list2').toggleClass('active-list2');
    });



    // sidebar active link 

    $('.inner-list1 .text_14_nor').click(function(){
        $('.inner-list1 .text_14_nor').removeClass('active');
        $(this).addClass('active');
    });

    $('.inner-list2 .text_14_nor').click(function(){
        $('.inner-list2 .text_14_nor').removeClass('active');
        $(this).addClass('active');
    });

    
    // Uploading close icon
    $('.uploading-close').click(function(){
        $(this).parent('.single-uploading-process').hide();
    });




 




});














// progreessbar 

var skills = {
  up1: 64,
  up2:24
};

$.each(skills, function(key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%"
    },
    3000,
    function() {
      $(".speech-bubble").fadeIn();
    }
  );
}); 















