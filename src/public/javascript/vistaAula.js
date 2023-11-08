//vista de aulas
//opciones ser la llamaada a todoslas aulas y estara sus nombres

// const { response } = require("express");

const url = "http://localhost:9000/api/";

const select_aula = document.getElementById("select_aula");
// const opciones = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];

// select_aula.addEventListener("click", () => {

//     // const opciones = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];

//     console.log(opciones);

//     const selectElement = document.getElementById("select_aula");

//     [...opciones].map((opcion, index) => {
//         const optionElement = document.createElement("option");
//         optionElement.value = index; // Valor de la opción
//         optionElement.text = opcion;  // Texto visible de la opción
//         selectElement.appendChild(optionElement);
//     });

// })


fetch(url + "environments")
    .then((response) => {
        if (!response.ok) {
            throw new Error("No se pudo obtener la respuesta del servidor");
        }
        return response.json(); // Puedes usar .json() en lugar de .text() si esperas una respuesta JSON.
    })
    .then((data) => {
        console.log("Respuesta del servidor:", data);
        const aulas = document.getElementById("select_aula");

        // console.log(data.name);
        aulas.innerHTML = data.map(ambiente => {
            return `<option value="${ambiente.name}">${ambiente.name}</option>`
        }).join("");
    })
