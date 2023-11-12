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
    const container = document.getElementById("resultC");
    container.innerHTML = "";

    fetch(`/api/Environments?type=${type}&capacity=${capacity}`)
        .then((response) => response.json())
        .then((environments) => {
            environments.sort((a, b) => a.capacity - b.capacity);
            
            container.innerHTML = environments
                .filter(environment => environment.active)
                .map(environment => `
                    <div class="w3-card">
                        <h2>${environment.name}</h2>
                        <p>Capacidad: ${environment.capacity}</p>
                        <p>Descripción: ${environment.description}</p>
                        <p>Tipo de ambiente: ${environment.typeEnvironment}</p>
                        <p>Facilidades: ${environment.facility.join(", ")}</p>
                    </div>
                `)
                .join('');
        })
        .catch((error) => {
            console.error("Error al obtener los datos del servidor", error);
        });
}