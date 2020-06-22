import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('lanchonete_lanche', table => {
        table.integer('idLanche').notNullable();
        table.string('idLanchonete').notNullable();
        table.foreign('idLanche').references('idLanche').inTable('lanche');
        table.foreign('idLanchonete').references('idLanchonete').inTable('lanchonete');
    }); 
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('lanchonete_lanche')
}
