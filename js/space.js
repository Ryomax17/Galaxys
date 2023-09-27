document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnBuscar");
  const inputBuscar = document.getElementById("inputBuscar");
  const contenedor = document.getElementById("contenedor");

  boton.addEventListener("click", function () {
    const busqueda = inputBuscar.value.trim().toLowerCase();
    contenedor.innerHTML = ""; 

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {

        const matchingUsers = data.filter((data) =>
        data.name.toLowerCase().includes(busqueda)
        );

        if (matchingUsers.length === 0) {
          contenedor.innerHTML = "No se encontraron usuarios.";
        } else {
          
          matchingUsers.forEach((data) => {
            const name = data.name;
            const usuario = data.username;
            const email = data.email;

            contenedor.innerHTML += `
              <h2>${name}</h2>
              <p>Usuario: ${usuario}</p>
              <p>Email: ${email}</p>
            `;
          });
        }
      })
      .catch((error) => {
        console.error("Error al realizar la búsqueda:", error);
      });
  });
});