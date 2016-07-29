import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if(Meteor.isClient) {

	//Sign-up events
	Template.signUp.events({
		'submit form': function(event) {
			event.preventDefault();
			var usernameVar = event.target.signUpUsername.value;
			var emailVar = event.target.signUpEmail.value;
			var passwordVar = event.target.signUpPassword.value;
			
			// creating a new user
			Accounts.createUser({
				// options go here
				email: emailVar,
				password: passwordVar
			});
		}
	});

	//Login events
	Template.login.events({
		'submit form': function(event) {
			event.preventDefault();
			var emailVar = event.target.loginEmail.value;
			var passwordVar = event.target.loginPassword.value;
			
			// logging in a user
			Meteor.loginWithPassword(emailVar, passwordVar);

			$(signUpLoginButtons).css('display','none');
		}
	});

	Template.dashboard.events({
		'click .logout': function(event) {
			event.preventDefault();
			Meteor.logout();
			$(signUpLoginButtons).css('display','inline');
		}
	});
}