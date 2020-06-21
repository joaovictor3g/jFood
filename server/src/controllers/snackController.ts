import { Request, Response } from 'express';
import connection from '../database/connection';

const snackController = {
    async index(req: Request, res: Response) {
        const snackies = await connection('lanche')
            .select('*');
        
        const serializedSnackies = snackies.map(snack => {
            return {
                id: snack.idLanche,
                nome: snack.nome,
                image_url: `http://192.168.0.1:3333/uploads/${snack.imagem}`
            };
        });
        
        return res.json(serializedSnackies);
    },
};

export default snackController;