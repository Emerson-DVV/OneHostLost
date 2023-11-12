document.addEventListener("DOMContentLoaded", function () {
    loadTypeEnvironments();
    loadFacilities();
    const create = document.getElementById("botonCrear");
    create.addEventListener("click", function () {
        createEnvironment();
    });
});

function loadTypeEnvironments() {
    fetch("/api/TypeEnvironments")
        .then((response) => response.json())
        .then((types) => {
            const select = document.getElementById("type");
            select.innerHTML = types.map(type => `<option value="${type.name}">${type.name}</option>`).join('');
        });
}


function loadFacilities() {
    fetch("/api/Facilities")
        .then((response) => response.json())
        .then((facilities) => {
            const container = document.getElementById("facilities");
            facilities.forEach((facility) => {
                container.innerHTML += `
                    <label>${facility.name}</label>
                    <input type="checkbox" id="${facility.name}" class="w3-check w3-margin-top">
                `;
            });
        });
}

function createEnvironment() {
    const name = document.getElementById("hName").value;
    const capacity = document.getElementById("hCapacity").value;
    const description = document.getElementById("hDescripcion").value;
    const typeEnvironment = document.getElementById("type").value;
    const selectedFacilities = getSelectedFacilities();
    const plainFormData = {
        name: name,
        capacity: capacity,
        description: description,
        active: true,
        enabled: true,
        typeEnvironment: typeEnvironment,
        facility: selectedFacilities
    };
    const jsonData = JSON.stringify(plainFormData);
    const response = fetch("/api/Environments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Respuesta exitosa:", data);
            showMessage('Exito', 'Ambiente creado exitosamente.');
        })
        .catch(error => {
            console.error("Error en la solicitud:", error.message);
            showMessage('Error', 'Error al crear el ambiente. Por favor, inténtalo de nuevo.');
        });
}

function showMessage(type, message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML =     
    `<div class="w3-modal-content w3-animate-top w3-card-4">
        <header class="w3-container w3-teal"> 
            <span onclick="document.getElementById('message').style.display='none'" 
            class="w3-button w3-display-topright">&times;</span>
        <h2>${type}</h2>
        </header>
            <div class="w3-container">
                <p>${message}</p>
            </div>
        <footer class="w3-container w3-teal"></footer>
    </div>`;
    messageDiv.style.display = 'block';
}

function getSelectedFacilities() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedFacilities = Array.from(checkboxes).map(checkbox => checkbox.id);
    return selectedFacilities;
}