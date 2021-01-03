// resultatAddition p block
// somme bouton 
// resultatSomme p d-none
var addition = document.getElementById("addition") //addition bouton +
var affiche = document.getElementById("resultatAddition")
var total = document.getElementById("resultatSomme") //masquer
var message = document.querySelector(".masquer") //masquer
var resultat = 0
var compteur = 0
var moyenne = 0


addition.addEventListener("click", function(){ 
    
        saisie = Number(document.getElementById("saisie").value) //saisie input
        if (saisie !== 0) {
        resultat = resultat + saisie
        compteur++
        affiche.innerHTML = resultat 
        moyenne = resultat / compteur
        }
        
        if (saisie === 0) {

            var body = document.querySelector(".algo");
            body.style.display = "none";
            message.style.display="block";
            total.style.display="block";
            total.innerHTML = "vous avez effectué " + compteur + " opération, dont la somme est de " + resultat + " et la moyenne est de " + moyenne
        }

        document.getElementById("recommencer").addEventListener("click", function(){
            document.location.reload();
        })
})

