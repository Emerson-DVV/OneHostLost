const editarAula = document.getElementById("editarAula");

editarAula.addEventListener("click", () => {


  const name = document.getElementById("editarNombre").value;
  const capacity = document.getElementById("editarCapacidad").value;
  const description = document.getElementById("editarDescripcion").value;
  // const active = null;
  // const enabled = null;
//   const typeEnvironment = document.getElementById("tipoAula");
//   const valorSeleccionado = typeEnvironment.value;


  const facility = [];
  const data = document.getElementById("editarData");
  const wifi = document.getElementById("editarWifi");


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

})