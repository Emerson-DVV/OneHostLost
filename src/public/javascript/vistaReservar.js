document.addEventListener('DOMContentLoaded', function () {
    reservar();
});

function reservar() {
    const btnRrv = document.querySelector('.reservar-boton button');
    btnRrv.addEventListener('click', () => {
        const cantidadSeleccionada = obtenerCantidadSeleccionada();
        if (cantidadSeleccionada < 1) {
            alert('Selecciona al menos un horario antes de reservar.');
            return;
        }
        const fechaInput = document.querySelector('#fecha');
        if (!fechaInput.value) {
            alert('Selecciona una fecha antes de reservar.');
            return;
        }
        crearReserva();
    })
}

function crearReserva() {
    const fecha = document.querySelector('#fecha').value;
    const celdasSeleccionadas = document.querySelectorAll('#tabla-periodos td.seleccionada');
    const horariosSeleccionados = Array.from(celdasSeleccionadas).map(celda => celda.textContent.trim());
    const params = new URLSearchParams(window.location.search);
    const ambiente = params.get('nombre');

    fetch('/api/reservations', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date: fecha,
            hour: horariosSeleccionados,
            type: 'pendiente',
            environment: ambiente,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.reservaConfirmada) {
                alert('Reserva realizada con éxito.');
                window.location.href = '../html/vistaBuscar.html';
            } else {
                alert('Uno o más horarios seleccionados no están disponibles.');
                // Actualizar la UI para mostrar que esos horarios no están disponibles
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function obtenerCantidadSeleccionada() {
    const celdasSeleccionadas = document.querySelectorAll('#tabla-periodos td.seleccionada');
    return celdasSeleccionadas.length;
}