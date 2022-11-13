/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (user) => {
    user.increments();

    user.string('username').notNullable().unique();
    user.string('email').notNullable().unique();
  }).createTable('posts', (post) => {
    post.increments('id').primary();

    post.string('title').notNullable();
    post.string('body').notNullable();

    post
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('posts');
  await knex.schema.dropTableIfExists('users');
};
