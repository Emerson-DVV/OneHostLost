document.addEventListener('DOMContentLoaded', function (){
    reservar();
});

function reservar(){
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

function crearReserva(){
    const fecha = document.querySelector('#fecha');
    const horarios = document.querySelectorAll('#tabla-periodos td.seleccionada');
    fetch('/api/')
}

function obtenerCantidadSeleccionada() {
    const celdasSeleccionadas = document.querySelectorAll('#tabla-periodos td.seleccionada');
    return celdasSeleccionadas.length;
}