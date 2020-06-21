import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('lanche', table => {
        table.increments('idLanche').primary().notNullable();
        table.string('nome').notNullable();
        table.string('imagem').notNullable();

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('lanche');
}