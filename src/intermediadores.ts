import { NextFunction, Request, Response } from "express"
import bancoDeDados from "../bancoDeDados"

export const filtrarParametroValidoDeIdade = (req: Request, res: Response, next: NextFunction) => {
    const { idadeMaxima } = req.query
    if(Number(idadeMaxima)) {
        next()
    } else if(!idadeMaxima) {
        return res.send(bancoDeDados)
    }

    return res.send("Idade máxima inválida")
}