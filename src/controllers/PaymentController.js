import { v4 as uuidv4 } from 'uuid';
import MercadoPago from 'mercadopago'
import configMercadoPago from '../config/mercadopago'

class PaymentController {
    async toPay(req, res) {
        MercadoPago.configure(configMercadoPago)

        const email = 'leandro@gmail.com'
        const id = uuidv4()
        const data = {
            items: [
                {
                    id,
                    title: '4x itens',
                    quantity: 2,
                    curruncy_id: 'BRL',
                    unit_price: parseFloat(10)
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
        } catch (error) {
            return res.send(error.message)
        }
    }
}

export default new PaymentController()