var resultat = document.getElementById("resultat")



document.getElementById("bouton").addEventListener("click", function(){
    var monAge = document.getElementById("age").value

    if (monAge < 18){
        resultat.innerHTML = "Ce programme est réservé aux personnes majeurs.";
    }
    else if (monAge >=18  && monAge <= 26){
        resultat.innerHTML = "Vous êtes dans le programme pour jeune";
    }
    else if (monAge > 27 && monAge < 65){
        resultat.innerHTML = "Vous êtes dans le programme pour adulte";
    }
    
    else if (monAge > 65){
        resultat.innerHTML ="Ce programme est réservé aux personnes non retraités";
    }
    
    });
    











    









