Template.sidebar.events({
  'click .nav li': function(e,t){   
    Session.set("active_menu", $(e.target).attr("id") );
  }
});
Template.sidebar.rendered = function(){
	$(".nav li").removeClass("active");
	var active_menu = Session.get("active_menu");
	$("#"+active_menu).parent("li").addClass("active");
}