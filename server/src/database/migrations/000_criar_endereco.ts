import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('endereco', table => {
        table.increments('idEndereco').primary().notNullable();
        table.string('rua').notNullable();
        table.string('cidade').notNullable();
        table.string('bairro').notNullable();
        
    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('endereco');
}
