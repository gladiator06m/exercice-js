//calculer la somme du nombre saisie

var bouton = document.getElementById("addition");
var resultat = 0

bouton.addEventListener("click", function () {
var saisie = document.getElementById("saisie").value;
  for (i = 0; i <= saisie; i++) {
    resultat = resultat + i;
  }

  document.getElementById("resultatAddition").innerHTML = resultat

});