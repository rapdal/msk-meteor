Template.addtrack.helpers({
	'countries_list' : function(){
		return countries.find({}, {sort:["country","asc"] });
	},
	'tracks_err' : function(){
		return Session.get("tracks_err");
	}
});

Template.addtrack.events({
	'click #uploadbutt' : function(e,t){

		$("#uploadIframe").attr("src", $('#uploadIframe').attr("src"));

		$("#uploadModal").modal();
	},
	'submit #track_form' : function(e,t){
		var data = {};

		$.each( $("#track_form").serializeArray(),function(){
				data[this.name] = this.value;

				console.log ( this.name + " " + data[this.name] );
		});

		tracks.insert({
			added_by: Meteor.userId(),
			track_url: data['track_url'],
			release_name: data['release_name'],
			track_format: data['track_format'],
			track_no: data['track_no'],
			file_artist_name: data['file_artist_name'],
			track_name: data['track_name'],
			isrc: data['isrc'],
			artist_country: data['artist_country'],
			release_artist_primary: data['release_artist_primary'],
			meta: {
				volume_no: data['volume_no'],
				release_artist_ensemble: data['release_artist_ensemble'],
				explicit: data['explicit'],
				allow_stream: data['allow_stream'],
				release_artist_conductor: data['release_artist_conductor'],
				release_date: data['release_date'],
				third_party_publisher: data['third_party_publisher'],
				artist_url: data['artist_url'],
				sale_start_date: data['sale_start_date'],
				track_artist_featuring: data['track_artist_featuring'],
				phonographic_rights: data['phonographic_rights'],
				imprint: data['imprint'],
				track_artist_remixer: data['track_artist_remixer'],
				writers: data['writers'],
				release_artist_featuring: data['release_artist_featuring'],
				genre: data['genre'],
				track_artist_composers: data['track_artist_composers'],
				publishers: data['publishers'],
				release_artist_remixers: data['release_artist_remixers'],
				subgenre: data['subgenre'],
				track_artist_orchestra: data['track_artist_orchestra'],
				release_artist_performers: data['release_artist_performers'],
				copyright: data['copyright'],
				track_artist_ensemble: data['track_artist_ensemble'],
				release_artist_composers: data['release_artist_composers'],
				catalogno: data['catalogno'],
				track_artist_conductors: data['track_artist_conductors'],
				release_artist_orchestra: data['release_artist_orchestra'],
				release_version: data['release_version']
			}
		},function(err){
			if(err)
				Session.set("tracks_err",err.reason);
			else{
				Router.go("/musicrelease")
				Session.set("tracks_err","Successfully Added!");
			}
				

		});
		return false;	
	}

});

Template.addtrack.rendered = function(){

	//datepicker
	$( ".datepicker" ).datepicker( {
      format: "yyyy-mm-dd",
      todayBtn: "linked"
  }); 

  // tooltip
  $( "form input:text, select" ).tooltip(); 

  if(!Meteor.user()){
  	Router.go("/");
  }

};