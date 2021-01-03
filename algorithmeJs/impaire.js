var impaire = 1

document.getElementById('but').addEventListener('click', function() {
        for (var i = 1; i < 21; i++ ) {
            document.getElementById("resultat").innerHTML +=  "Le " + impaire + " est le  " + i + " eme nombre impaire" + "<br>"
            impaire += 2
        }
})
    


 