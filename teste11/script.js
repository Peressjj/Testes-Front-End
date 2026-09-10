const alunos = [
   { nome: "Peres", idade: 20},
   { nome: "Lemos", idade: 23},
   { nome: "Kaue", idade: 19},
   { nome: "Wellington", idade: 20},
   { nome: "Sauer", idade: 22}
]

const lista = document.getElementById("lista-alunos")

alunos.forEach((alunos) => {
   const item = document.createElement("li")
   item.textContent = `${alunos.nome} - ${alunos.idade} anos`
   lista.appendChild(item)
})


const lista_2 = document.getElementById("lista2")

for (let i = 0; i < 5; i++) {
   const item = document.createElement("li")
   item.textContent = `Aluno: ${alunos[i].nome} \nIdade: ${alunos[i].idade}\n\n`
   lista_2.appendChild(item)
}

