console.log("JS conectado!")

const header = document.getElementById("header")
header.style.backgroundColor = "black"
header.style.fontSize = "30px"
header.style.border = "solid white 3px"
header.style.padding = "10px"
header.style.color = "white"
header.style.display = "flex"
header.style.justifyContent = "center"
header.style.alignItems = "center"
header.style.borderRadius = "10px"

const main = document.getElementById("main")
main.style.border = "solid red 3px"
main.style.display = "flex";
main.style.justifyContent = "center"
main.style.alignItems = "center"
main.style.height = "80vh"

const avo = document.createElement("div")
avo.textContent = "tag avo"
avo.classList.add("avo")
main.appendChild(avo)
avo.style.backgroundColor = "black"
avo.style.fontSize = "30px"
avo.style.border = "solid white 3px"
avo.style.padding = "20px"
avo.style.color = "white"
avo.style.display = "flex"
avo.style.justifyContent = "center"
avo.style.alignItems = "center"
avo.style.borderRadius = "10px"
avo.style.width = "fit-content"
avo.style.flexDirection = "column"

const pai = document.createElement("div")
pai.textContent = "tag pai"
pai.classList.add("pai")
avo.appendChild(pai)
pai.style.backgroundColor = "black"
pai.style.fontSize = "30px"
pai.style.border = "solid white 3px"
pai.style.padding = "20px"
pai.style.color = "white"
pai.style.display = "flex"
pai.style.justifyContent = "center"
pai.style.alignItems = "center"
pai.style.borderRadius = "10px"
pai.style.width = "fit-content"
pai.style.flexDirection = "column"

const filho = document.createElement("filho")
filho.textContent = "tag filho"
filho.classList.add("filho")
pai.appendChild(filho)
filho.style.backgroundColor = "black"
filho.style.fontSize = "30px"
filho.style.border = "solid white 3px"
filho.style.padding = "20px"
filho.style.color = "white"
filho.style.display = "flex"
filho.style.justifyContent = "center"
filho.style.alignItems = "center"
filho.style.borderRadius = "10px"
filho.style.width = "fit-content"
filho.style.flexDirection = "column"

const neto = document.createElement("neto")
neto.textContent = "tag neto"
neto.classList.add("neto")
filho.appendChild(neto)
neto.style.backgroundColor = "black"
neto.style.fontSize = "30px"
neto.style.border = "solid white 3px"
neto.style.padding = "20px"
neto.style.color = "white"
neto.style.display = "flex"
neto.style.justifyContent = "center"
neto.style.alignItems = "center"
neto.style.borderRadius = "10px"
neto.style.width = "fit-content"
neto.style.flexDirection = "column"

const bizneto = document.createElement("bizneto")
bizneto.textContent = "tag bizneto"
bizneto.classList.add("bizneto")
filho.appendChild(bizneto)
bizneto.style.backgroundColor = "black"
bizneto.style.fontSize = "30px"
bizneto.style.border = "solid white 3px"
bizneto.style.padding = "20px"
bizneto.style.color = "white"
bizneto.style.display = "flex"
bizneto.style.justifyContent = "center"
bizneto.style.alignItems = "center"
bizneto.style.borderRadius = "10px"
bizneto.style.width = "fit-content"
bizneto.style.flexDirection = "column"