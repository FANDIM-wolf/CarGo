
var text_for_cart_page = document.getElementById("test");

function make_dark_theme() {
  
     if (document.body.style.backgroundColor == "white" )
     {
       document.body.style.backgroundColor = "gray";
      
       text_for_cart_page.style.color ="white";
     
       
      }
        else {
     	document.body.style.backgroundColor = "white";
    
     	text_for_cart_page.style.color = "black";
     	
     }

    
}