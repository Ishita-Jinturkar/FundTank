




function loadcard() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("cards-1").outerHTML = xhttp.responseText;
        window.scrollTo(50,100);
      }
    };
    
    xhttp.open("GET", "cards.html", true);
    
    xhttp.send();
    
    $("#cards-1").hide().html(cards.html).fadeIn();
    
  }










  function loadcard1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("cards-2").outerHTML = xhttp.responseText;
        window.scrollTo(50, 100);

      }
    };
    xhttp.open("GET", "cards1.html", true);
    xhttp.send();
    

    
  }



 
 
