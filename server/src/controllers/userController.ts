import { Request, Response } from 'express';
import connection from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';

const userController = {
    async create(req: Request, res: Response) {
        const idUsuario = generateUniqueId;
        const { nome, telefone, senha, email } = req.body;
        const { idEndereco } = req.params;
 
        await connection('usuario').insert({
            idUsuario,
            nome, 
            email,
            telefone,
            senha,
            idEndereco
        });

        return res.json({ idUsuario })
    },

    async loginWithPassAndId(req: Request, res: Response) {
        const { idUsuario, senha } = req.body;

        const response = await connection('usuario')
            .join('endereco', 'endereco.idEndereco', '=', 'usuario.idEndereco')
            .where('usuario.idUsuario', idUsuario,)
            .where('usuario.senha', senha)
            .select('usuario.*')
            .select('endereco.*')
            .first();
        
        return res.json(response)
    },
};

export default userController;