const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cake_flavors = require('./routes/cake_flavors');
const icing_flavors = require('./routes/icing_flavors');
const queries = require('./queries/cake_flavor_query');


app.use('/cake_flavors', cake_flavors)
app.use('/icing_flavors', icing_flavors)


const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (request, response) => {
    queries.listNothing().then(results => response.json(results))
})