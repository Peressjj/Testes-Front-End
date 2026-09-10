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

   soldados.forEach((soldado, i) => {
      console.log(`Posicao[${(i + 1)}]`)
      console.log(`Nome: ${soldado.nome}\nPosto: ${soldado.posto}\n`);
   });

   