// DELETE http://localhost:9000/api/Environments/690A

const marcar = document.getElementById("marcar");

marcar.addEventListener("click", () => {
    const aulas = document.getElementById("select_aula");
    console.log(aulas.value);

    fetch(url + "environments/" + aulas.value, {
        method: "DELETE",
        mode: "cors",
    })
        .then((res) => {
            if (res.ok) {
                console.log("marcado con exito")
                // document.getElementById('eliminar').style.display='none'
                window.location.reload();
                //dirige a la vista del aula por id

            } else {
                //error
                console.log("no se marco")
            }
        })
        .catch((error) => {
            console.error(error, "error al marcar");
        });
});




// fetch(url + "environments")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("No se pudo obtener la respuesta del servidor");
//         }
//         return response.json(); // Puedes usar .json() en lugar de .text() si esperas una respuesta JSON.
//     })
//     .then((data) => {
//         console.log("Respuesta del servidor:", data);
//         const aulas = document.getElementById("select_aula");

//         // console.log(data.name);
//         aulas.innerHTML = data.map(ambiente => {
//             return `<option value="${ambiente._id}">${ambiente.name}</option>`
//         }).join("");
//     })