function mostrarFormulario(form) {
    var loginBox = document.getElementById('login-box');
    var registerBox = document.getElementById('register-box');

    if (form === 'login') {
        loginBox.style.display = 'block';
        registerBox.style.display = 'none';
    } else if (form === 'register') {
        loginBox.style.display = 'none';
        registerBox.style.display = 'block';
    }
}
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento de envío predeterminado del formulario

    var usernameD = document.getElementById('username').value;
    var emailD = document.getElementById('email').value;
    var passwordD = document.getElementById('password').value;

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: usernameD,
            email: emailD,
            password: passwordD
        })
    }).then(response => {
        // Puedes verificar si el estatus de la respuesta es exitoso antes de redirigir
        if (response.ok) {
            return response.json();
        } else {
            // Si hay un error, lanzar un error que será capturado por el catch
            throw new Error('Algo fue mal con la petición');
        }
    })
        .then(data => {
            // Manejo de la respuesta del servidor
            console.log(data);
            // Si el registro es exitoso, redirigir a 'vistaUsuario.html'
            window.location.href = '../html/vistaUsuario.html';
        })
        .catch((error) => {
            // Manejo de errores
            console.error('Error:', error);
        });
});
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento de envío predeterminado del formulario

    var emailD = document.getElementById('emailL').value;
    var passwordD = document.getElementById('passwordL').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailD,
            password: passwordD
        })
    }).then(response => {
        // Puedes verificar si el estatus de la respuesta es exitoso antes de redirigir
        if (response.ok) {
            return response.json();
        } else {
            // Si hay un error, lanzar un error que será capturado por el catch
            throw new Error('Algo fue mal con la petición');
        }
    })
        .then(data => {
            // Manejo de la respuesta del servidor
            console.log(data);
            // Si el registro es exitoso, redirigir a 'vistaUsuario.html'
            window.location.href = '../html/vistaUsuario.html';
        })
        .catch((error) => {
            // Manejo de errores
            console.error('Error:', error);
        });
});