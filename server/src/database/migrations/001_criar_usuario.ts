import Knex from 'knex';

export async function up(knek: Knex) {
    return knek.schema.createTable('usuario', table => {
        table.string('idUsuario').primary().notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('senha').notNullable();
        table.integer('idEndereco').notNullable();
        table.foreign('idEndereco').references('idEndereco').inTable('endereco');
    }); 
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('usuario');
}   