fetch('http://localhost:9000/api/classrooms',{
    method: 'GET',
    mode: 'no-cors' })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
