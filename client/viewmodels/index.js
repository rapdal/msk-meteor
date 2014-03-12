Template.index.events({
	'submit' : function(e,t){

			data = {};

			$.each( $("#login_form").serializeArray(),function(){
				data[this.name] = this.value;
			});

			Meteor.loginWithPassword(data['username'], data['password'], function(err){
				if(err){
					Session.set("login_errors", err.reason);
				}
				else{
					Router.go("/home");
				}

			})

		return false;

	},

});

Template.index.helpers({
	'login_errors' : function(){
		 return Session.get("login_errors");
	}

});

Template.index.rendered = function(){

	if( Meteor.user() ){
		Router.go("/home");
	}

};