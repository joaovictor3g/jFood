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

    },
    
    // rota de detalhe da lanchonete, que vai trazer as informações do 
    async detail(req: Request, res: Response) {
        const { id } = req.params;

        const idLanche = await connection('lanchonete')
            .join('lanchonete_lanche', 'lanchonete.idLanchonete', 'lanchonete_lanche.idLanchonete')
            .where('lanchonete.idLanchonete', String(id))
            .select('lanchonete_lanche.idLanche');
            

        return res.json(idLanche);
    },

    async returnSnackBarsWithInitials(req: Request, res: Response) {
        const { letters } = req.body;

        const initialSnackBars = await connection('lanchonete')
            .where('lanchonete.nome', 'like', `%${letters}%`);

        return res.json(initialSnackBars);
    },
};

export default snackBarController;