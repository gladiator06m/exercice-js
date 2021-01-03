// var b = prompt("saisir un nombre");
// var i=0;
// var f=1;
// while (i<b) {
//     i++
//     var f=f*i;
// }

// alert("le factoriel de "+ b + "! est "+f);

var resultat = document.getElementById("resultat")
var i = 0
var factorielle = 1



document.getElementById("but").addEventListener('click', event => {
        b = Number(document.getElementById("facto").value)
        while (i<b) {
            i++
            factorielle = factorielle * i
        }
        resultat.innerHTML = "la factorielle est de " + b + " est de " + factorielle
    })



  
