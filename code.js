var view = {
	
	displayMessage: function(msg)
	{
		var messageArea= document.getElementById("messageArea");
		messageArea.innerHTML=msg;

	},

	displayHit: function(location)
	{
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");


	},

	displayMiss: function(location)
	{
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");

	},
};	

view.displayMessage("tap tap!, is this thing on?");
view.displayMiss("02");
view.displayHit("26");