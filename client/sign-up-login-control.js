import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).ready(function() {

	$('#register-and-login').click(function() {

		$('#form-container').toggle();

	});

	$('#signUp').on('click', function() {
		if( $('#sign-up-form').is(":visible") ) {
			return false;
			console.log("button clicked!");
		} else {
			$('#login-form').css('display','none');
			$('#sign-up-form').css('display','inline');
		}
	});

/*
	$('#signUp').click(function() {

		if( $('#sign-up-form').is(":visible") ) {
			return false;
			console.log("button clicked!");
		} else {
			$('#login-form').css('display','none');
			$('#sign-up-form').css('display','inline');
		}
		
	});
*/


	$('#login').click(function() {
		
		if( $('#login-form').is(":visible") ) {
			return false;
			console.log("button clicked!");
		} else {
			$('#sign-up-form').css('display','none');
			$('#login-form').css('display','inline');
		}

	});

});