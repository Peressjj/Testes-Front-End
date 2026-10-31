console.log("JS conectado!");

let nome = "Peres";

/*id: 1*/
const um = document.getElementById("1");
um.textContent = "teste id 1: manipulação DOM comum, apenas estilização";
um.style.color = "black";
um.style.fontSize = "24px";
um.style.backgroundColor = "lightgray";
um.style.borderRadius = "10px";
um.style.border = "solid black 3px";
um.style.height = "18vh";
um.style.width = "18vh";
um.style.display = "flex";
um.style.justifyContent = "center";


/*id: 2*/
const dois = document.getElementById("2");
dois.textContent = "teste id: 2\nAdd event listener";
dois.addEventListener("click", Mostrarnome);

dois.style.fontSize = "24px";
dois.style.border = "solid black 3px";
dois.style.borderRadius = "10px";
dois.style.backgroundColor = "lightgray";
dois.style.fontFamily = "Arial";
dois.style.padding = "10px";
dois.style.height = "18vh";
dois.style.width = "18vh";



/*id: 3*/
const tres = document.getElementById("3");

function Mostrarnome() {
   tres.textContent = nome, "CONCLUÍDO";

   tres.style.fontSize = "22px";
   tres.style.border = "solid black 3px";
   tres.style.borderRadius = "10px";
   tres.style.height = "18vh";
   tres.style.width = "18vh";
   tres.style.backgroundColor = "lightgray";
   tres.style.padding = "10px";
   tres.style.display = "flex";
   tres.style.justifyContent = "center";

   return nome;
}