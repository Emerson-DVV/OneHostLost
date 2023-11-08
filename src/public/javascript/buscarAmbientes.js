document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/typeEnvironments")
        .then((response) => response.json())
        .then((types) => {
            const select = document.getElementById("type");
            types.forEach((type) => {
                const option = document.createElement("option");
                option.text = option.value = type.name;
                select.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Error en obtencion de datos", error);
        });
    const find = document.getElementById("find");
    find.addEventListener("click", function () {
        const type = document.getElementById("type").value;
        const capacity = document.getElementById("capacity").value;
        const container = document.getElementById("resultC");
        container.innerHTML = "";
        fetch(`/api/Environments?type=${type}&capacity=${capacity}`)
            .then((response) => response.json())
            .then((environments) => {
                environments.forEach((environment) => {
                    if (environment.active) {
                        const card = document.createElement("div");
                        card.classList.add("w3-card");

                        const name = document.createElement("h2");
                        name.textContent = environment.name;

                        const capacity = document.createElement("p");
                        capacity.textContent = `Capacidad: ${environment.capacity}`;

                        const description = document.createElement("p");
                        description.textContent = `Descripción: ${environment.description}`;

                        const typeEnvironment = document.createElement("p");
                        typeEnvironment.textContent = `Tipo de ambiente: ${environment.typeEnvironment}`;

                        const facilities = document.createElement("p");
                        const facilitiesList = environment.facility.join(", ");
                        facilities.textContent = `Facilidades: ${facilitiesList}`;

                        card.appendChild(name);
                        card.appendChild(capacity);
                        card.appendChild(description);
                        card.appendChild(typeEnvironment);
                        card.appendChild(facilities);
                        container.appendChild(card);
                    }
                });
            })
            .catch((error) => {
                console.error("Error al obtener los datos del servidor", error);
            });
    });
});
