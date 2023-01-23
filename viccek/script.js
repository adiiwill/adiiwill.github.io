var viccek = {
    "Vicc1" : "01",
    "Vicc2" : "02",
    "Vicc3" : "03",
    "Vicc4" : "04",
    "Vicc5" : "05",
    "Vicc6" : "06",
    "Vicc7" : "07",
    "Vicc8" : "08",
    "Vicc9" : "09",
}   

window.onload = function () {
    randomVicc()
}

function randomVicc() {
    let viccHelye = document.getElementById("vicc")
    let kepHelye = document.getElementById("kep")
    
    let osszesVicc = Object.keys(viccek)
    let osszesKep = Object.values(viccek)

    let rsz = Math.floor(Math.random() * osszesVicc.length)

    viccHelye.innerHTML = "\"" + osszesVicc[rsz] + "\""
    kepHelye.src = osszesKep[rsz] + ".jpg"
}