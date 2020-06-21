import { Request, Response } from 'express';
import connection from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';

const snackController = {
    async create(req: Request, res: Response) {
        const idLanchonete = generateUniqueId;
        
        const imagem = req.file.filename;

        const { nome, email, senha } = req.body;
        const { idEndereco } = req.params;

        await connection('lanchonete').insert({
            idLanchonete,
            nome, 
            email,
            senha,
            imagem,
            idEndereco
        })
        
    },
};

export default snackController;