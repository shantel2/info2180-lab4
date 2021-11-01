window.onload = function() { 

    var button = document.getElementById("hero-btn");
    button.addEventListener("click", function(e) {
    e.preventDefault();

    var output = document.getElementById("result");
    var userInput = document.getElementById("hero").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
    
    fetch(`http://localhost/info2180-lab4/superheroes.php?query= ${userInput}`, {method : 'GET'})
    .then(response => response.text())
    .then(data => {
        output.innerHTML = "";
        output.innerHTML = data; 
    })
    .catch(error => console.log("There was a problem with the request"));
  });
};
