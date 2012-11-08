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
		var $quicktablecount = $('#quicknavtable tr').length;	
		var $currentquickid = $(this).parent('tr').prop('id');
		
		if (parseInt($currentquickid) === 1) {
			alert('You reached the top of the list!');
		}
		
		else {
			var $previousquickid = parseInt($currentquickid)-1;
			
			$('tr#'+$currentquickid).insertBefore($('tr#'+$previousquickid));
			
			$('tr#'+$previousquickid).prop('id', parseInt($previousquickid)+1);
			$($(this).parent('tr')).prop('id', parseInt($(this).parent('tr').prop('id'))-1);
		}
	});
	
	$('.quicknav td.down').click(function() {
		var $quicktablecount = $('#quicknavtable tr').length;	
		var $currentquickid = $(this).parent('tr').prop('id');
		
		if (parseInt($currentquickid) === parseInt($quicktablecount)-1) {
			alert('You reached the end of the list!');
		}
		
		else {
			var $nextquickid = parseInt($currentquickid)+1;
			
			$('tr#'+$currentquickid).insertAfter($('tr#'+$nextquickid));
			
			$('tr#'+$nextquickid).prop('id', parseInt($nextquickid)-1);
			$($(this).parent('tr')).prop('id', parseInt($(this).parent('tr').prop('id'))+1);
		}	
	});
	
	// deleting items on the quick menu
	$('.quicknav button.quicknavdelbutton').click(function() {
		$('tr.quickrow input.quicknavcheckbox').each(function() {
			var $checkbox = $(this);
			if ($checkbox.is(':checked')) {
				$checkbox.parents('tr').remove();
			}
		});
	});
	
});