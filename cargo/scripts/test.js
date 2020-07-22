var test = document.getElementById("test");


function change() {

  if (test.style.color == "yellow"){
  	test.style.color = "blue";
  	document.body.style.backgroundColor = "red";
  }
  else {
  	test.style.color ="yellow";
  	document.body.style.backgroundColor = "green";
  }
}