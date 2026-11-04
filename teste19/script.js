console.log("JS conectado!")

const header = document.getElementById("header")

header.style.border = "solid white 3px"
header.style.color = "white"
header.style.display = "flex"
header.style.justifyContent = "center"
header.style.alignItems = "center"
header.style.borderRadius = "10px"
header.style.gap = "10px"
header.style.backgroundColor = "black"
header.textContent = "teste 19"
header.style.fontSize = "30px"

try {
   const dados = JSON.parse("isso não é JSON")
   console.log(dados)
} catch (erro) {
   console.log("Não foi possível ler o JSON:", erro.message)
}

const main = document.getElementById("main")

console.log("O programa continua rodando");

let texto = "Mensagem teste"
const msg = document.createElement("div")
msg.classList.add("msg");
main.appendChild(msg)

msg.textContent = texto

msg.style.border = "solid white 3px"
msg.style.backgroundColor = "black"
msg.style.fontSize = "30px"
msg.style.borderRadius = "10px"
msg.style.padding = "10px"
msg.style.color = "white"