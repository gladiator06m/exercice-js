let age = document.getElementById("age").value;
let envoye = document.getElementById("envoye");
let reponse = document.getElementById("textAge");

envoye.addEventListener("click", event =>{
 
  if (age < 18){
        reponse.innerHTML = "Ce programme est réservé aux personnes majeurs.";
    }
    else if (age >=18  && age <= 26){
        reponse.innerHTML = "Vous êtes dans le programme pour jeune";
    }
    else if (age > 27 && age < 65){
        reponse.innerHTML = "Vous êtes dans le programme pour adulte";
    }
    
    else if (age > 65){
        reponse.innerHTML ="Ce programme est réservé aux personnes non retraités";
    }
    });

let oui = document.getElementById("oui");

oui.addEventListener("click", function(){
    document.location.reload();
})

 document.getElementById("no").addEventListener("click", function(ee){
        let body = document.getElementById("container");
        body.style.display = "none";
        let fin = document.getElementById("fin").style.display="block";
});