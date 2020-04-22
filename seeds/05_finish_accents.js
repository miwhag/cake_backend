exports.seed = async function(knex) {
  // await knex('finish_accents').del()

  const orange = await knex('finish_accents').insert({
    name: 'Orange Flower',
    image: 'https://i.ibb.co/jkzpXVs/4.png'
  }).returning('id')

  const pink = await knex('finish_accents').insert({
    name: 'Pink Flower',
    image: 'https://i.ibb.co/88X2T8x/5.png'
  }).returning('id')
  
  const blue = await knex('finish_accents').insert({
    name: 'Blue Flower',
    image: 'https://i.ibb.co/Qkk7YYJ/6.png'
  }).returning('id')

  const purple = await knex('finish_accents').insert({
    name: 'Purple Flower',
    image: 'https://i.ibb.co/hf7LRkJ/7.png'
  }).returning('id')

  const off_blue = await knex('finish_accents').insert({
    name: 'Off Blue Flower',
    image: 'https://i.ibb.co/KWpK80G/8.png'
  }).returning('id')

  const red = await knex('finish_accents').insert({
    name: 'Red Flower',
    image: 'https://i.ibb.co/BZn1Vt0/9.png'
  }).returning('id')

};
