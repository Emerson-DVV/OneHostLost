document.addEventListener("DOMContentLoaded", function () {
    loadTypeEnvironments();
    const find = document.getElementById("find");
    find.addEventListener("click", function() {
        searchEnvironments();
    });
});

function loadTypeEnvironments() {
    fetch("/api/TypeEnvironments")
        .then((response) => response.json())
        .then((types) => {
            const select = document.getElementById("type");
            select.innerHTML += types.map(type => `<option value="${type.name}">${type.name}</option>`).join('');
        });
}

function searchEnvironments(){
    const type = document.getElementById("type").value;
    const capacity = document.getElementById("capacity").value;
    const container = document.getElementById('contenedor');
    container.innerHTML = "";

    fetch(`/api/Environments?type=${type}&capacity=${capacity}`)
        .then((response) => response.json())
        .then((environments) => {
            environments.sort((a, b) => a.capacity - b.capacity);
            
            container.innerHTML = environments
                .filter(environment => environment.active)
                .map(environment => `
                    <a href="vistaReservar.html?nombre=${environment.name}&amp;tipo=${environment.typeEnvironment}&amp;capacidad=${environment.capacity}&amp;descripcion=${environment.description}&amp;facilidades=${environment.facility.join(", ")}&amp;especifico=true" class="ambiente">
                        <div class="ambiente-nombre">
                            <h3 class="nombre">${environment.name}</h3>
                        </div>
                        <div class="ambiente-info">
                            <p class="tipo-ambiente"><strong>Tipo de ambiente:</strong> ${environment.typeEnvironment}</p>
                            <p class="capacidad"><strong>Capacidad:</strong> ${environment.capacity}</p>
                            <p class="descripcion"><strong>Descripción:</strong> ${environment.description}</p>
                            <p class="facilidades"><strong>Facilidades:</strong> ${environment.facility.join(", ")}</p>
                        </div>
                    </a>
                `)
                .join('');
        })
        .catch((error) => {
            console.error("Error al obtener los datos del servidor", error);
        });
}
                    