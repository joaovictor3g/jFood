import { Request, Response } from 'express';

import connection from '../database/connection';

const addressController = {
    async create(req: Request, res: Response) {
        const { rua, cidade, bairro } = req.body;

        await connection('endereco').insert({ 
            rua, 
            cidade, 
            bairro
        });
        
        return res.json({ message: 'Insert was done' });
    }
};

export default addressController;