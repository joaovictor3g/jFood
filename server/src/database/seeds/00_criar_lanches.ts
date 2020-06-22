import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('lanche').insert([
        { nome: 'Hamburguer com fritas', imagem: 'lanche1.jpeg', preco: 12 },
        { nome: 'X-Burguer', imagem: 'lanche2.jpeg', preco: 20 }
    ]);
};