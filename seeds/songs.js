/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    {title: 'Viva La Vida', artist: 'Coldplay'},
    {title: 'War', artist: 'Keshi'},
    {title: 'Demons', artist: 'Imagine Dragons'},
    {title: 'Boulevard of Broken Dreams', artist: 'Green Day'},
    {title: 'Love Story', artist: 'Taylor Swift'},
    {title: 'Stay', artist: 'Blackpink'},
    {title: 'Everything Goes On', artist: 'Porter Robinson'},
    {title: 'Gravity', artist: 'Fifty Fifty'},
    {title: 'Espresso', artist: 'Sabrina Carpenter'},
    {title: 'Easy', artist: 'LE SSERAFIM'},
  ]);
};
