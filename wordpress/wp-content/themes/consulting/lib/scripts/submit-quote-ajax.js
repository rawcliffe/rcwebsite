//Ajax code to handle submitting of quotes- NW #######
jQuery(document).ready(function ($){
	'use strict';

	$('#quote-form').submit(function(e){
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		
    	$.ajax({ 
         	data: {action: 'quote_form', name: name, email: email},
         	type: 'post',
         	url: '/wp-admin/admin-ajax.php',
         	beforeSend : function(xhr, opts){
            $('#submit-quote').html('PROCESSING..');
        	},
         	success: function(data) {
         	$('#submit-quote').html('SUBMIT');
         	$('#msgalert').html(data);
         	//alert(data); //should print out the name since you sent it along


        	},
        	error: function(err) {
         	alert(err); //should print out the name since you sent it along

        	}
    	});
	});
});