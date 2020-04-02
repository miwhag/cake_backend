const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cake_flavors = require('./routes/cake_flavors');
const frosting_flavors = require('./routes/frosting_flavors');
const frosting_type = require('./routes/frosting_type');
const queries = require('./queries/cake_flavor_query');


app.use('/cake_flavors', cake_flavors)
app.use('/frosting_flavors', frosting_flavors)
app.use('/frosting_type', frosting_type)


const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (request, response) => {
    queries.listNothing().then(results => response.json(results))
})