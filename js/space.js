let boton = document.getElementById("btnBuscar");

boton.addEventListener("click", function(){
    
    search();
    
    
});

function search(){

let busqueda = document.getElementById("inputBuscar");

let response = fetch(`https://images-api.nasa.gov/search?q=${busqueda}`).then(response => response.json()) .then(data => {
    const array = data;
    console.table(array);
    const url = data.collection.items[0].url
    console.table(url);



} );


};