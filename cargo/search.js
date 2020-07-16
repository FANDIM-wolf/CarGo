
var input =  document.getElementById("myinput");



function doIt(addr) {
	window.location.assign(addr);
	if (input.value == "popular" ){
		window.location.assign("statistics.html");
	}
	if (input.value == "page" || "page0"){
		window.location.assign("page.html");
	}
	if (input.value == "land rover" ||"land rover discovery" || "discovery") 
	{
        window.location.assign("landrover_discovery.html");
	}
}


function test (addr) {
	window.location.assign (addr);
	if (input.value == "1231fdafadd2etest214^7&****t") {
		document.body.style.backgroundStyle = "red";
	}
}

function test1 (addr) {
	window.location.assign (addr);
	if (input.value == "1231f3r4dafadd2etest214^7&****t") {
		document.body.style.backgroundStyle = "blue";
	}
}


function test2 (addr) {
	window.location.assign (addr);
	if (input.value == "1231fdafadd2etest214^7&****t232rwf23qfaga21rfadg2adf13e413fadg13gfllllla2") {
		document.body.style.backgroundStyle = "yellow";
	}
}

function test3 (addr) {
	window.location.assign (addr);
	if (input.value == "1231fdafadd2etesssst214^7&****t231fdafadd2etest214^7&****t232rwf23qfaga21rfadg2adf13e413fa") {
		document.body.style.backgroundStyle = "green";
	}
}