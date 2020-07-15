
var input =  document.getElementById("myinput");

function doIt(addr) {
	window.location.assign(addr);
	if (input.value == "statistics"){
		window.location.assign("statistics.html");
	}
	if (input.value == "page"){
		window.location.assign("page.html");
	}
}