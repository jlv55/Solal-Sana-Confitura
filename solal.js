// jQuery
$(document).ready(function(){ 
	$('#opt1Container').hide();
	$('#opt2Container').hide();
	$('#opt3Container').hide();

   $('#Opt1').on('click',function(){
      $('#opt1Container').toggle('slow');
   });
   $('#Opt12').on('click',function(){
      $('#opt1Container').toggle('slow');
   });


   $('#Opt2').on('click',function(){
      $('#opt2Container').toggle('slow');
   });
   $('#Opt22').on('click',function(){
      $('#opt2Container').toggle('slow');
   });

   $('#Opt3').on('click',function(){
      $('#opt3Container').toggle('slow');
   });
   $('#Opt32').on('click',function(){
      $('#opt3Container').toggle('slow');
   });




});


/*

$(document).ready(function($){


         $('.parayax').parallax("50%", 0.3);

jQuery.fn.spectragram.accessData={
    accessToken:'1447218094.1677ed0.02279b442f774ee888faad39a3713bc8',
    clientID:'788900108b5242d7bbc99c0b7b6b3405'}
    
$('.instaFeed').spectragram('getUserFeed', {
        query: 'nikonepk93', //Change the instagram feed user to display the feed that you want.
        size: 'large',
        max: 5
});


});

*/