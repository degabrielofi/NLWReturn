import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express();

app.use(cors())
app.use(express.json({limit: '200mb'}));
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!')
});