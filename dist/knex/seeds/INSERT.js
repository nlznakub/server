'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tbl_user').del().then(function () {
    // Inserts seed entries
    return knex('tbl_user').insert([{ user_id: 1, username: 'focuscare', password: '12342423', name: 'focus', lastname: 'dplus' }]);
  });
};