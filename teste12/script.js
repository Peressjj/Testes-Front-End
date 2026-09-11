const soldados = [
   { nome: "P. Lima", posto: "S1 SAD" },
   { nome: "Lucini", posto: "S1 SGS" },
   { nome: "M. Vieira", posto: "S1 SAD" },
   { nome: "Israel", posto: "S1 SAD" },
   { nome: "Rodrigues", posto: "S2 SNE" },
   { nome: "Arruda", posto: "S2 SNE" },
   { nome: "Pedro", posto: "S2 SNE" },
   { nome: "Calebi", posto: "S2 SNE" },
   { nome: "Igor França", posto: "S2 SNE" },
   { nome: "Neto", posto: "S2 SNE" },
   { nome: "Jefferson", posto: "S2 SNE" },
   { nome: "Pacheco", posto: "S2 SNE" },
   { nome: "Peres", posto: "S2 SNE" },
   { nome: "H. Thonsem", posto: "S2 SNE" },
   { nome: "Souza", posto: "S2 SNE" },
   { nome: "Marques", posto: "S2 SNE" },
   { nome: "Beuron", posto: "S2 SNE" },
   { nome: "Rios", posto: "S2 SNE" },
]

const lista = document.getElementById("listaSoldados")

   soldados.forEach((soldado, i) => {
      console.log(`Posicao[${(i + 1)}]`)
      console.log(`Nome: ${soldado.nome}\nPosto: ${soldado.posto}\n`);
      const item = document.createElement("li")
      item.textContent = `Nome: ${soldado.nome} Posto: ${soldado.posto}`
      lista.appendChild(item);
   });

   // TESTE 01
// textContent: troca o conteudo do texto selecionado por outro
const test1 = document.querySelector(".t1");
test1.textContent = "TESTE 01";

   // TESTE 02
// style.color: troca a cor do elemento selecionado por outro
const test2 = document.querySelector(".t2");
test2.style.color = "red";


   // TESTE 03/04
// querySelectorAll: seleciona todos os elementos da mesma tag, se a alteraçao for style, é necessario utilizar um forEach

//querryselector: seleciona apenas o primeiro elemento da tag encontrada
const test3 = document.querySelectorAll(".t3");
test3.forEach((elemento) => {
   elemento.style.color = "orange";
});

   // TESTE 05
// addEventListener: 'escuta' até que o comando especificado seja acionado, nesse caso 'click', quando o evento acontece, executa algum comando
const botao = document.querySelector(".botao"); 
//botao

const texto = document.querySelector(".texto");
//texto

botao.addEventListener("click", () => {
   texto.textContent = "TESTE05";
})


   // TESTE 06

   let cont = 0;

const botaoMais = document.querySelector(".mais");
const botaoMenos = document.querySelector(".menos");
const contador = document.querySelector(".cont")

botaoMais.addEventListener("click", () => {
   cont++;
   contador.textContent = cont;
})

botaoMenos.addEventListener("click", () => {
   cont--;
   contador.textContent = cont;
})