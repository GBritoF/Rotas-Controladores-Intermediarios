import { Request, Response } from "express"
import bancoDeDados from "../bancoDeDados"

export const APIconvidados = (req:Request, res: Response ) => {
    return res.send("API de lista de convidados")
}

export const convidados =  (req:Request, res: Response ) => {
    const { idadeMaxima } = req.query
    const pessoasIdade = bancoDeDados.filter((pessoa) => {
        return pessoa.idade <= Number(idadeMaxima)
    })

    if(pessoasIdade.length === 0) {
        return res.send("Nenhuma pessoa com essa idade!")
    }


    return res.send(pessoasIdade)
}

export const convidadoID = (req:Request, res: Response ) => {
    const { id } = req.params
    const pessoa = bancoDeDados.find((item) => {
        return item.id === Number(id)
    })

    if(!pessoa) {
        return res.send("Convidado não encontrado")
    }

    return res.send(pessoa)
}