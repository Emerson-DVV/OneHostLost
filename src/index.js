const app = require('./server');
const mongodb = require('./database');

app.listen(app.get('port'), () => {
    console.log("Server on port:", app.get('port'))
})

mongodb();