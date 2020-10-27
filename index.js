const express = require('express')
const MercadoPago = require('mercadopago')
const app = express()

MercadoPago.configure({
    sandbox: true,
    access_token: 'TEST'
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

const id = toString(Date.now())
const email = 'leandroteste@gmail.com'
app.get('/payment', async(req, res) => {
    const data = {
        items: [
            item = {
                id,
                title: '2 video games; 3 camisas',
                quantity: 2,
                curruncy_id: 'BRL',
                unit_price: parseFloat(150)
            }
        ],
        payer: {
            email
        },
        external_reference: id
    }

    try {

        const payment = await MercadoPago.preferences.create(data)

        console.log(payment)

        return res.redirect(payment.body.init_point)

    }catch(err){
        return res.send(err.message)
    }


})

app.listen(3001, (req, res) => {
    console.log('servidor rodando')
})