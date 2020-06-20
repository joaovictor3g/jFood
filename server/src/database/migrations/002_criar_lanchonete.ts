import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('lanchonete', table => {
        table.integer('idLanchonete').primary().notNullable();
        table.integer('nome').notNullable();
        table.string('imagem').notNullable();
        table.integer('idEndereco');
        table.foreign('idEndereco').references('idEndereco').inTable('endereco');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('lanchonete');
}