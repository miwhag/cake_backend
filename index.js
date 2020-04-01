const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cake_flavors = require('./routes/cake_flavors');


app.use
app.use('/cake_flavors', cake_flavors)


const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (request, response) => {
    response.json({ message: "ok by me" })
    
})