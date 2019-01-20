

$(document).ready(function () {

// Exercice 1

//cacher violet doucement
$('#depart1').click(function(){ 
	$('#violet').hide('slow'); 

});

//affiche violet doucement
$('.reload').click(function(){
	$('#violet').show('slow'); 
});
});


// Exercice 2

//en cliquant sur départ fait disparaitre progressivement la div jaune
$('#depart2').click(function(){ 
	$('#jaune').hide('slow');
  		$('#blanc').text('ça fond !');


});
  	$('#orange').mouseover(function(){

  		$('#orange').fadeOut('slow');

  		$('#orange').fadeIn('slow');

});
	$('.reload').click(function(){
		$('#jaune').show('slow'); 
});


// Exercice 3

//en cliquant sur départ, diminue la taille de la div noir 
$('#depart3').click(function(){
	$('#noir').slideUp('slow'); 


});

//au passage de la souris, inverse l'animation de la div marron
  	$('#marron').mouseover(function(){
  		$('#marron').slideToggle('slow');


});

//en cliquant sur la div gris, augmente et diminue la taille de celle-ci et inverse l'animation de la div marron 
	$('#gris').click(function(){

		$('#marron').slideToggle('slow');
			$(this).slideUp('slow');
				$(this).slideDown('slow');

});

//en cliquant sur la div gris, réapparition de la div marron 

	$('.reload').click(function(){
		$('#noir').show('slow'); 
			$('#marron').show('slow'); 
				$('#gris').show('slow'); 

});

// Exercice 4

//animation avec avec animate
$('#depart4').click(function(){
	
	$('#rouge').animate({height: '200px', opacity: 0.4}, "slow");
  	$('#rouge').animate({width: '200px', opacity: 0.8}, "slow");
  	$('#vert').animate({height: '200px', left: '200px', opacity: 0.4}, "slow");
	$('#vert').animate({width: '200px', left: '200px', opacity: 0.8}, "slow");

});

// Exercice 5

//démarre et désactive l'animation
$('#depart5').click(function(){

	$('#pink').delay(3000).fadeOut('slow');
		$('#cyan').hide();
});
$('#desactiver').click(function(){

	$('#pink').show('slow');
		$('#cyan').show();

});
$('.reload').click(function(){

	$('#pink').show();
		$('#cyan').show();

})
