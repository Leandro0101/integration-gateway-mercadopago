import app from './app'
import dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT || 3000, () => {
    console.log('listening in port 3001')
})