$(document).ready(function(){
    $('#mycaruousel').carousel({interval:2000});
    $('#carouselbuttom').click(function(){
        if($('#carouselbuttom').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselbuttom').children('span').removeClass('fa-pause');
            $('#carouselbuttom').children('span').addClass('fa-play');

        }
        else  if($('#carouselbuttom').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselbuttom').children('span').removeClass('fa-play');
            $('#carouselbuttom').children('span').addClass('fa-pause');
            
        }
    });
    $('#reserve').click(function(){
        $('#reservemodal').modal();
    });
    $('#login').click(function(){
        $('#loginmodal').modal();
    });
  

});