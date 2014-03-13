Meteor.startup(function(){
	Accounts.loginServiceConfiguration.remove({
		service: "google"
	});

	Accounts.loginServiceConfiguration.insert({
		service: "google", 
		clientId: "1062445461634-b2ouqu7lfv9jjsqq87ldddo69jmjv41c.apps.googleusercontent.com",
		secret:"E1MTt3CORkSdDls2VCGqNbTS",
		responseType: "token",
		requestPermissions: ['profile', 'email', 'https://www.googleapis.com/auth/yt-analytics.readonly', 'https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/youtube.readonly' , 'https://www.googleapis.com/auth/youtubepartner', 'https://www.googleapis.com/auth/youtubepartner-channel-audit', 'https://www.googleapis.com/auth/plus.me']
	});
});
