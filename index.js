const express = require('express');
const app = express();


const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (req, res) => {
    res.json({ message: "ok by me" })
    
})