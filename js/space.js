let boton = document.getElementById("btnBuscar");

boton.addEventListener("click", function(){
    
    search();
    
    
});

async function search(){

let busqueda = document.getElementById("inputBuscar");

let response = await fetch(`https://images-api.nasa.gov/search?q=${busqueda}`);
const result = response.json();
console.log(response);
return result;

};