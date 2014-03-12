Template.dashboard.rendered = function(){

	if( !Meteor.user() ){
		Router.go('/');
	}
	

};