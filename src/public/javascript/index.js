

/**revisar que el texto ingresado este en la bd
 * si es usuario normal -> ingresar
 * si es admin -> vistas de admin
 *
 *
 *
 */
const url = "http://localhost:9000/api/";


const botonIngresar = document.getElementById("botonIngresar");

botonIngresar.addEventListener("click", () => {
    //obtenemos los usuarios para verificar
    fetch(url + "users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo obtener la respuesta del servidor");
            }
            return response.json(); // Puedes usar .json() en lugar de .text() si esperas una respuesta JSON.
        })
        .then((data) => {
            console.log("Respuesta del servidor:", data);
            const usuarioIngresado = document.getElementById("textoNombreUsuario").value;

            const correoIngresada = document.getElementById("textoCorreoUsuario").value;

            //funcion predicado
            const encontrado = data.find((usuario) => {
                const usuarioRespuesta = usuario.name;
                const correoRespuesta = usuario.email;

                if (
                    usuarioIngresado == usuarioRespuesta &&
                    correoIngresada == correoRespuesta
                ) {
                    return true;
                } else {
                    return false;
                }
            });

            if (encontrado != null) {
                window.location.href = "../html/vistaUsuario.html";
            } else {
                alert("Datos incorrectos");
            }
        })
        .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
        });
});


//admin
const botonAdmin = document.getElementById("botonAdmin");

botonAdmin.addEventListener("click", () => {
    //obtenemos los usuarios para verificar
    fetch(url + "users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo obtener la respuesta del servidor");
            }
            return response.json(); // Puedes usar .json() en lugar de .text() si esperas una respuesta JSON.
            console.log("respuesta ok")
        })
        .then((data) => {
            console.log("Respuesta del servidor:", data);
            const usuarioIngresado = "admin";

            const correoIngresada = "admin@email";

            //funcion predicado
            const encontrado = data.find((usuario) => {
                const usuarioRespuesta = usuario.name;
                const correoRespuesta = usuario.email;

                if (
                    usuarioIngresado == usuarioRespuesta &&
                    correoIngresada == correoRespuesta
                ) {
                    return true;
                } else {
                    return false;
                }
            });

            if (encontrado != null) {
                window.location.href = "./html/vistaAdmin.html";
            } else {
                alert("Datos incorrectos");
            }
        })
        .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
        });
});