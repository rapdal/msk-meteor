Template.navbar.events({
	'click .login': function(){
		console.log("button clicked!")
		Meteor.loginWithGoogle({
			requestPermissions: ['profile', 'email', 'https://www.googleapis.com/auth/yt-analytics.readonly', 'https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/youtube.readonly' , 'https://www.googleapis.com/auth/youtubepartner', 'https://www.googleapis.com/auth/youtubepartner-channel-audit', 'https://www.googleapis.com/auth/plus.me']
		},function (err){
			if(!err){
				 Router.go('/home');
			}
		});

		return false;
	},
	'click #logout': function(){
		Meteor.logout(function(err){
			if(!err)
				Router.go('/');
		});
	}
})