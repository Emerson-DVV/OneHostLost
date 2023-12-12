document.addEventListener('DOMContentLoaded', function (){
    fechaActual();
    verificarEnlace();
    tablaSeleccion();
});

function fechaActual(){
    const fechaActual = document.getElementById('fecha');
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, '0');
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 porque en JavaScript los meses van de 0 a 11
    const anio = hoy.getFullYear();
    fechaActual.min = `${anio}-${mes}-${dia}`;
}

function tablaSeleccion(){
    const tablaPeriodos = document.querySelector('#tabla-periodos');
    tablaPeriodos.addEventListener('click', seleccionarCelda);
}

function seleccionarCelda(event){
    const celda = event.target;
    if (celda.tagName === 'TD' && !celda.classList.contains('seleccionada') && obtenerCantidadSeleccionada() < 4) {
        celda.classList.add('seleccionada');
    } else if (celda.classList.contains('seleccionada')) {
        celda.classList.remove('seleccionada');
    }
}

function obtenerCantidadSeleccionada() {
    const celdasSeleccionadas = document.querySelectorAll('#tabla-periodos td.seleccionada');
    return celdasSeleccionadas.length;
}

function verificarEnlace(){
    const urlParams = new URLSearchParams(window.location.search);
    const especifico = urlParams.get('especifico');
    if (especifico) {
        cargarInfo(urlParams);
        document.querySelector('#seleccionar-ambiente').style.display = 'none';
    }else{
        document.querySelector('#seleccionar-ambiente').style.display = 'flex';
        document.querySelector('#ambiente-info-reserva').style.display = 'none';
        const btnSelecAmb = document.querySelector('.seleccionar-ambiente button');
        btnSelecAmb.addEventListener('click', function () {
            window.location.href = 'vistaBuscar.html';
        });
    }
}

function cargarInfo(urlParams){
    const nombre = urlParams.get('nombre');
    const tipo = urlParams.get('tipo');
    const capacidad = urlParams.get('capacidad');
    const descripcion = urlParams.get('descripcion');
    const facilidades = urlParams.get('facilidades');
    const ambiente_info = document.querySelector('#ambiente-info-reserva');
    ambiente_info.innerHTML = 
    `
    <h3 id="nombre">${nombre}</h3>
    <p id="tipo"><strong>Tipo:</strong> ${tipo}</p>
    <p id="capacidad"><strong>Capacidad:</strong> ${capacidad}</p>
    <p id="descripcion"><strong>Descripcion:</strong> ${descripcion}</p>
    <p id="facilidades"><strong>Facilidades:</strong> ${facilidades}</p>
    `;
}

