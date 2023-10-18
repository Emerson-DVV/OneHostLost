fetch('http://localhost:5500/api/classrooms')
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
