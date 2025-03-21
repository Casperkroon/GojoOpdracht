console.log("werkt dit")

//Buttons//

const buttonRed = document.querySelector(".red")
const buttonBlue = document.querySelector(".blue")
const buttonPurple = document.querySelector(".purple")
const buttonFlash = document.querySelector(".flash")
const buttonRandom = document.querySelector(".random")
const buttonRestart = document.querySelector(".refresh")

buttonFlash.classList.add("hidden")
buttonRestart.classList.add("hidden")


//Tekst veranderen//

const eersteHeader = document.querySelector("h1")
const eersteP = document.querySelector(".status")
const outputP = document.querySelector(".output")

function headerVerander() {
    eersteHeader.textContent = "Laat Gojo een 'Black flash' uitvoeren"
}
headerVerander()

//Afbeelding naar base state//

let afbeelding = document.querySelector("img")
afbeelding.src = "images/gojoIdle.png"

function baseState() {
    eersteP.textContent = "Status: Idle"
    afbeelding.src = "images/gojoIdle.png"
}

baseState()

//Aftel & optel systeem//

let afloop = false
let nummer = 0
let doeTimeout

function gebruikAbility() {
    nummer += 5
    console.log(nummer)

    clearTimeout(doeTimeout);

    doeTimeout = setTimeout(baseState, 5000)
    console.log("timeout begonnen")

    if (nummer >= 100) {
        buttonFlash.classList.remove("hidden")
    }

    if (afloop == false) {
        afloop = setInterval(startAfloop, 1000);
    }

    energyOutput("Cursed energy output: ")
}

function startAfloop() {
    nummer -= 5
    console.log(nummer)

    if (nummer == 0) {
        clearInterval(afloop);
        afloop = false;
    }

    if (nummer < 100) {
        buttonFlash.classList.add("hidden")
    }

    energyOutput("Cursed energy output: ")
}

function energyOutput(output) {
    outputP.textContent = output + " " + nummer + "%"
}

energyOutput("Cursed energy output: ")

//Energy output verhogen bij gebruik buttons//

buttonRed.addEventListener('click', gebruikAbility)
buttonBlue.addEventListener('click', gebruikAbility)
buttonPurple.addEventListener('click', gebruikAbility)

//Reset image naar idle na 5 seconden geen knop input//

if (gebruikAbility) {
    clearTimeout(doeTimeout)
} else {
    doeTimeout = setTimeout(baseState, 5000)
}

//Buttons werkend maken//

//Red
function veranderRed() {
    eersteP.textContent = "Cursed technique reversal: Red!"
    afbeelding.src = "images/gojored.png"
}
buttonRed.addEventListener('click', veranderRed)

//Blue
function veranderBlue() {
    eersteP.textContent = "Cursed technique amplification: Blue!"
    afbeelding.src = "images/gojoblue.png"
}
buttonBlue.addEventListener('click', veranderBlue)

//Purple
function veranderPurple() {
    eersteP.textContent = "Hollow technique: Purple!"
    afbeelding.src = "images/gojopurple.png"
}
buttonPurple.addEventListener('click', veranderPurple)

//Black flash
function veranderFlash() {
    eersteP.textContent = "Black Flash!"
    eersteHeader.textContent = "Gelukt! Gojo deed een 'Black flash!"

    clearInterval(afloop);
    afloop = false

    afbeelding.src = "images/blackflash.jpg"
    clearTimeout(doeTimeout)

    buttonBlue.classList.add("hidden")
    buttonPurple.classList.add("hidden")
    buttonRed.classList.add("hidden")
    buttonRandom.classList.add("hidden")
    buttonRestart.classList.remove("hidden")
}
buttonFlash.addEventListener('click', veranderFlash)

//Restart knop

function restartKnop() {
    location.reload();
}
buttonRestart.addEventListener('click', restartKnop)

//Random ability array

let abilityArray = [veranderBlue, veranderRed, veranderPurple]

function randomizeAbility() {
    let randomAbility = Math.floor(Math.random() * abilityArray.length)
    abilityArray[randomAbility]()
}
buttonRandom.addEventListener('click', randomizeAbility)
buttonRandom.addEventListener('click', gebruikAbility)


