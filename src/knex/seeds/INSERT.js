
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { user_id: 1, username: 'focuscare', password: '12342423', name: 'focus', lastname: 'dplus' }
      ]);
    });
};
