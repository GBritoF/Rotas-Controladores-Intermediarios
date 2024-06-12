import 'dotenv/config'
import express from "express"
import { APIconvidados, convidados, convidadoID } from "./controladores"
import { filtrarParametroValidoDeIdade } from './intermediadores'

const servidor = express()

servidor.get('/', APIconvidados)

servidor.get('/convidados', filtrarParametroValidoDeIdade, convidados)

servidor.get('/convidados/:id', convidadoID)

servidor.listen(process.env.PORT)

