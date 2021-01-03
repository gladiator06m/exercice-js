


var bouton = document.getElementById("but")
var resultat = document.getElementById("resultat")

result = 0;


bouton.addEventListener("click", function () {
    
     var nombre = document.getElementById("nombre").value;
     var puissance = document.getElementById("puissance").value;
     result = Math.pow(nombre, puissance);  
     resultat.innerHTML = "le resultat est de " + result;
});




 