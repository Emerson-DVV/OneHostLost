
// 
//crear aula

// const botonCrear = document.getElementById("botonCrear");

// const name = document.getElementById("nuevo_nombreAula").value;
// const capacity = document.getElementById("nuevo_capacidad").value;
// const description = document.getElementById("nuevo_descripcion").value;
// // const active = null;
// // const enabled = null;
// const typeEnvironment = document.getElementById("tipoAula");
// const valorSeleccionado = typeEnvironment.value;


// const data = document.getElementById("nuevo_data").value;
// const wifi = document.getElementById("nuevo_wifi").value;

// if (data.checked) {
//   data = "Data";
//   facility.push(data);
// }
// if (wifi.checked) {
//   wifi = "Wifi"
//   facility.push(wifi);
// }
// const facility = null;
const url = "http://localhost:9000/api/";

const botonCrear = document.getElementById("botonCrear");
botonCrear.addEventListener("click", () => {

  

  const name = document.getElementById("nuevo_nombreAula").value;
  const capacity = document.getElementById("nuevo_capacidad").value;
  const description = document.getElementById("nuevo_descripcion").value;
  // const active = null;
  // const enabled = null;
  const typeEnvironment = document.getElementById("tipoAula");
  const valorSeleccionado = typeEnvironment.value;


  const facility = [];
  const data = document.getElementById("nuevo_data");
  const wifi = document.getElementById("nuevo_wifi");

  if (data.checked) {
    // data = "Data";
    facility.push("Data");
  }
  if (wifi.checked) {
    // wifi = "Wifi"
    facility.push("Wifi");
  }

  fetch(url + "environments", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      "name": name,
      "capacity": capacity,
      "description": description,
      "active": true,
      "enabled": true,
      "typeEnvironment": valorSeleccionado,
      "facility": facility
    }),
  })
    .then((res) => {
      if (res.ok) {
        console.log("añadido con exito")
        //dirige a la vista del aula por id

      } else {
        //error
        console.log("no se añadio")
      }
    })
    .catch((error) => {
      console.error(error, "error al añadir");
    })

});

const botonCancelar = document.getElementById("botonCancelar");

botonCancelar.addEventListener("click", () => {
  window.location.href = "/vistaAula.html";
})
