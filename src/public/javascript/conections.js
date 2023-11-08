// Haciendo una solicitud GET a tu servidor
fetch('/api/Environments', {
    method: 'GET', // Puedes omitir este campo ya que GET es el valor predeterminado
    headers: {
      'Content-Type': 'application/json' // Puedes ajustar los encabezados según sea necesario
    }
  })
  .then(response => response.json()) // Parsea la respuesta como JSON
  .then(data => {
    // Hacer algo con los datos recibidos del servidor
    console.log(data);
  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error('Se ha producido un error:', error);
  });
  