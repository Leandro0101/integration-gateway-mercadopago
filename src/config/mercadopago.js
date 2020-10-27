require('dotenv').config()
export default {    
    sandbox: process.env.MERCADO_PAGO_SANDBOX,
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN
}