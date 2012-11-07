$(document).ready(function() {
	
	// navigation of tabs
	$('.navigation li').click(function() {
		if (! $(this).hasClass('selected')) {
			$('.navigation li').removeClass('selected');
			$(this).addClass('selected');
		}
		
		var $navid = $(this).prop('id');
		
		$('.charsheet').css('display', 'none');
		$('#char'+$navid).stop(true,true).fadeIn(850);
	});
	
	
	// hide/show of quick menu
	$('.hideshow').click(function() {
		if ($('.hideshow').prop('id') === ('show')) {
			$('.quicknav table').stop(true,true).toggle(450);
			$('.hideshow').text(' < Show < ');
			$('.hideshow').prop('id', 'hide');
			$('.quicknav .hideshow').css('border-bottom', '1px solid #000000');
		}
		
		else {
			$('.quicknav table').stop(true,true).toggle(450);
			$('.hideshow').text(' > Hide > ');
			$('.hideshow').prop('id', 'show');
			$('.quicknav .hideshow').css('border-bottom', 'none');
		}
	});
	
	// moving items on quick menu
	$('.quicknav td.up').click(function() {
		var $currentquickid = $(this).parent('tr').prop('id');
		var $previousquickid = $currentquickid-1;
		
		$('tr#'+$currentquickid).insertBefore($('tr#'+$previousquickid));
	});
	
});