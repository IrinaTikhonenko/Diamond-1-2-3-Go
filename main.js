var images = new Array('img/diamond-1.png', 'img/diamond-2.png', 'img/diamond-3.png', 'img/diamond.png');
var i = 0;

function Go() {
	document.getElementById("img").src = images[i]; 
	i++;
	var active = document.querySelector("body").setAttribute("id", "active");

	var bg = document.getElementById('active');

	document.getElementById('img').addEventListener("mouseover", function() {
		bg.style.background = "#3b6dc6";
		this.addEventListener("mouseout", function(){
			bg.style.background = "";
		});
	});

	if (i >= images.length) {
		i = 0;
		return
	}
	setTimeout("Go()",1000);
}