let boton = document.getElementById("btnBuscar");

boton.addEventListener("click", function(){
    
    search();
    
    
});

function search(){

let busqueda = document.getElementById("inputBuscar").value;

let response = fetch(`https://images-api.nasa.gov/search?q=${busqueda}`).then(response => response.json()) .then(data => {
    const array = data.collection.items;
    console.log(array);

    array.forEach(element => {
        
        const tittle = element.tittle;
        const description = element.description;
        const link = element.links[0].href;
        contenedor.innerHTML = `
        <h2>${tittle}</h2>
        <h4>Descripcion: ${description}</h4>
        <img src="${link}" alt="Imagen de ${tittle}">
    `;
    }); {
    }

} );


};