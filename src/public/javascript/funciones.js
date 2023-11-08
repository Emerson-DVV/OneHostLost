const select = document.getElementById('capacidad');
select.addEventListener('change', function () {
    if (select.value === 'ocultar') {
        select.style.display = 'none'; // Ocultar el select
    } else {
        select.style.display = 'block'; // Mostrar el select si no se selecciona "Ocultar"
    }
});


