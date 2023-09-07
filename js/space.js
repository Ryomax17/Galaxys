document.addEventListener("DOMContentLoaded", function() {
let boton = document.getElementById("btnBuscar");

boton.addEventListener("click", function(){
    
    search();
    
    
});

function search(){

    let busqueda = document.getElementById("inputBuscar").value;

    let response = fetch(`https://images-api.nasa.gov/search?q=${busqueda}`).then(response => response.json()) .then(data => {
        const array = data.collection.items;
        contenedor.innerHTML = "";
        console.log(array);

    array.forEach(element => {
        
        const tittle = element.data.length>0? element.data[0].title : "";
        const description = element.data.length>0? element.data[0].description : "";
        const link = element.links.length>0? element.links[0].href : "";
        const date = element.data.length>0? element.data[0].date_created : "";

        contenedor.innerHTML += `
        <div class="galaxys">
        <div class"imgs-container">
        <img class="imgs" src="${link}" alt="Imagen de ${tittle}">
        </div>
        <div class="info">
        <h4 class="title">${tittle}</h4>
        <p class="description">Descripcion: ${description}</p>
        <p class="date">${date}</p>
        </div>
        </div>
    `;

    }); 
    

});

};

});