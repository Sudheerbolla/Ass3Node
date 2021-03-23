const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const port = 8000

app.use(bodyParser.json());
app.use(cors());

const inventoryRouter = require('./routes/getInventoryRoute')
const getCartRouter = require('./routes/CartRoute')

app.use('/inventoryBns35', inventoryRouter)

app.use('/cartBns35', getCartRouter)

app.listen(port, () => {
    console.log(`Assignment 3 Web Service  on port ${port}`)
})