const alunos = [
   { nome: "Joao Peres", idade: 20 },
   { nome: "Vittor Sauer", idade: 23 },
   { nome: "Luis Lemos", idade: 23 },
   { nome: "Kaue Pakagnan", idade: 19 },
   { nome: "Wellington Rafael", idade: 20 },
]

for (let i = 0; i < alunos.length; i++) {
   console.log(`Nome: ${alunos[i].nome}\tIdade: ${alunos[i].idade}`)
}

localStorage.setItem("alunos", JSON.stringify(alunos))

const dados = localStorage.getItem("alunos")
const alunos_salvos = JSON.parse(dados)

const listaAlunos = document.getElementById("lista-alunos");

for (let i = 0; i < alunos.length; i++) {
   const item = document.createElement("li")
   item.textContent = `Nome: ${alunos[i].nome} - Idade: ${alunos[i].idade}`
   listaAlunos.appendChild(item)
}