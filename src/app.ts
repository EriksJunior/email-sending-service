import express from 'express'
import { Router, Request, Response } from 'express'

import cors from 'cors'
import 'dotenv/config'

const app = express()
const route = Router()

app.use(cors())
app.use(express.json())


app.use(route)

route.get('/', (req: Request, res: Response) => {
  res.json({message: `Serviço rodando`})
})

export default app
