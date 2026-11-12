console.log("JS conectado!");

export function ADD_header(nome) {
   const header = document.getElementById("header");
   
   header.style.color = "white"
   header.style.border = "solid white 3px"
   header.style.backgroundColor = "black"
   header.style.width = "98%"
   header.style.padding = "10px"
   header.style.fontSize = "30px"
   header.style.display = "flex"
   header.style.justifyContent = "center"
   header.style.alignItems = "center"
   header.style.borderRadius = "10px"
}

export function ADD_main() {
   const main = document.getElementById("main");
   
   main.style.border = "solid white 3px";
   main.style.height = "90vh";
   main.style.borderRadius = "10px";
   main.style.width = "100%"
}

ADD_header();
ADD_main();
