var bouton = document.getElementById("but")
var affiche = document.getElementById("resultat")
// var result = 0 pas besoin de le déclarer

bouton.addEventListener("click", function(){
    hypotenus()
})

function hypotenus(hypo1, hypo2, result){ //vérifier si les arguments sont utile ou pas
    var hypo1 = Number(document.getElementById("hyp1").value)
    var hypo2 = Number(document.getElementById("hyp2").value)

    result = Math.pow(hypo1, 2) + Math.pow(hypo2, 2) 
    result = Math.sqrt(result)
    affiche.innerHTML = "L'hypoténus est de " + result
}



   // var hypo1 = Number(document.getElementById("hyp1").value)
    // var hypo2 = Number(document.getElementById("hyp2").value)
    
    // calculHypotenus = Math.pow(hypo1, 2) + Math.pow(hypo2, 2) 
    // result = Math.sqrt(calculHypotenus)
    // affiche.innerHTML = "L'hypoténus est de " + result




