var dark_button = document.getElementById("dark_button");
var menu_box = document.getElementById("menu-box");

function make_dark_theme() {
  
     if (document.body.style.backgroundColor == "white" )
     {
       document.body.style.backgroundColor = "gray";
       
      }
        else {
     	document.body.style.backgroundColor = "white";
     	
     }
}