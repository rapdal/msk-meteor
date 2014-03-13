Template.addmusic.rendered = function(){
	if(!Meteor.user()){
		Router.go("/");
	}
};