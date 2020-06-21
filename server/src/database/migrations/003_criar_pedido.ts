import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('pedido', table => {
        table.increments('idPedido').primary().notNullable();
        table.time('hora').notNullable();
        table.date('data');
        table.integer('idUsuario');
        table.integer('idLanchonete');
        table.foreign('idUsuario').references('idUsuario').inTable('usuario');
        table.foreign('idLanchonete').references('idLanchonete').inTable('lanchonete');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('lanchonete');
}