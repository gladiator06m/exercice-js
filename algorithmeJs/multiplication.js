var i = 0
var b = 0

document.querySelectorAll('.but').forEach(item => {
    item.addEventListener('click', event => {
        for (var i = 0; i < 11; i++) {
            for (var b = 0; b < 11; b++) {
                document.getElementById("resultat").innerHTML = document.getElementById("resultat").innerHTML + " " + i + " " + "x" + " " + b + " " + "=" + " " + i*b + "<br/>"
            }
        }
    })
  })

