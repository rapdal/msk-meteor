Template.register.rendered = function(){

	$(function () {
    $('.button-checkbox').each(function () {

    // Settings
    var $widget = $(this),
        $button = $widget.find('button'),
        $checkbox = $widget.find('input:checkbox'),
        color = $button.data('color'),
        settings = {
            on: {
                icon: 'glyphicon glyphicon-check'
            },
            off: {
                icon: 'glyphicon glyphicon-unchecked'
            }
        };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

      // Actions
      function updateDisplay() {
          var isChecked = $checkbox.is(':checked');

          // Set the button's state
          $button.data('state', (isChecked) ? "on" : "off");

          // Set the button's icon
          $button.find('.state-icon')
              .removeClass()
              .addClass('state-icon ' + settings[$button.data('state')].icon);

          // Update the button's color
          if (isChecked) {
              $button
                  .removeClass('btn-default')
                  .addClass('btn-' + color + ' active');
          }
          else {
              $button
                  .removeClass('btn-' + color + ' active')
                  .addClass('btn-default');
          }
      }

      // Initialization
      function init() {

          updateDisplay();

          // Inject the icon if applicable
          if ($button.find('.state-icon').length == 0) {
              $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
          }
      }
      init();
    });
	});

};

Template.register.events({
	'submit': function(e,t){
			form = {};

			$.each( $("#register_form").serializeArray(),function(){
				form[this.name] = this.value;

				// console.log ( this.name + " " + form[this.name] );
			});

			if(form['password'] === form['password_confirmation']){

					Accounts.createUser({
						'username': form['user_name'],
						'email': form['email'],
						'password': form['password'],
						'profile': {
							"name": form['first_name']+" "+form['last_name']
						}
					},function(err){
						if(!err){
							Router.go("/home");
						}
						else{
							Session.set("reg_error",err.reason);
						}

					})
			}
			else{
				Session.set("reg_error","Password doesn't Match!");
			}


			return false;
	}
})

Template.register.helpers({
	'reg_errors' : function(){
		return Session.get("reg_error");
	}
});