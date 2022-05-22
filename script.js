




function loadcard() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("cards-1").outerHTML = xhttp.responseText;
        
      }
    };
    
    xhttp.open("GET", "cards.html", true);
    
    xhttp.send();
    
    $("#cards-1").hide().html(cards.html).fadeIn();
    
  }

  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var scroll = document.body.scrollTop;
    document.getElementById("cards-1").outerHTML=xmlhttp.responseText;
    document.body.scrollTop = scroll;
 }

 if (xmlhttp.readyState==4 && xmlhttp.status==200)
 {
   var scroll = document.body.scrollTop;
   document.getElementById("cards-1").outerHTML=xmlhttp.responseText;
   document.body.scrollTop = scroll;
}






  function loadcard1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("cards-2").outerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET", "cards1.html", true);
    xhttp.send();
    

    
  }



 
 

  