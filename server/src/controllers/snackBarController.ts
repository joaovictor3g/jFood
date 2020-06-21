import { Request, Response } from 'express';
import connection from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';

const snackBarController = {
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

        return res.json({ message: 'Deu certo' })
        
    },

    async show(req: Request, res: Response) {
        const allSnackBars = await connection('lanchonete')
            .select('*');
        
        return res.json(allSnackBars);

    }
};

export default snackBarController;