const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

document.addEventListener('DOMContentLoaded', function () {
    var logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();

        fetch('/api/logout', {
            method: 'POST',
            credentials: 'include' // Necesario para incluir las cookies en la solicitud
        })
            .then(response => {
                // Verificar si la respuesta del servidor es exitosa
                if (response.ok) {
                    // La cookie ha sido eliminada, redirigir a index.html
                    window.location.href = '../index.html';
                } else {
                    throw new Error('Error al cerrar sesión');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

