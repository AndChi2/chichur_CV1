$(document).ready(function() {

	//E-mail Ajax Send
	$("#signup-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "post",
			url: "mail.php", //Change
			data: th.serialize()
		 }).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});