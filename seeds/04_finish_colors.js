
exports.seed = async function(knex) {
  await knex('finish_colors').del()

  const sage = await knex('finish_colors').insert({
    name: 'Sage',
    color: '#85a392'
  }).returning('id')

  const golden = await knex('finish_colors').insert({
    name: 'Golden Yellow',
    color: '#f5b971'
  }).returning('id')
  
  const neon_orange = await knex('finish_colors').insert({
    name: 'Neon Orange',
    color: '#ff6363'
  }).returning('id')

  const mint = await knex('finish_colors').insert({
    name: 'Mint Green',
    color: '#b9ebcc'
  }).returning('id')

  const blush = await knex('finish_colors').insert({
    name: 'Blush Pink',
    color: '#ffbcbc'
  }).returning('id')

  const light_pink = await knex('finish_colors').insert({
    name: 'Light Pink',
    color: '#fde2e2'
  }).returning('id')

  const c_purple = await knex('finish_colors').insert({
    name: 'Cornflower Purple',
    color: '#4d4c7d'
  }).returning('id')

  const purple = await knex('finish_colors').insert({
    name: 'Purple',
    color: '#827397'
  }).returning('id')

  const light_purple = await knex('finish_colors').insert({
    name: 'Light Purple',
    color: '#faf4ff'
  }).returning('id')

  const light_blue = await knex('finish_colors').insert({
    name: 'Light Blue',
    color: '#cff1ef'
  }).returning('id')

  const sky_blue = await knex('finish_colors').insert({
    name: 'Sky Blue',
    color: '#ecfbfc'
  }).returning('id')

  const char = await knex('finish_colors').insert({
    name: 'Charcoal',
    color: '#1b262c'
  }).returning('id')

  const off_white = await knex('finish_colors').insert({
    name: 'Off White',
    color: '#fffdf9'
  }).returning('id')

  const light_orange = await knex('finish_colors').insert({
    name: 'Light Orange',
    color: '#ffae8f'
  }).returning('id')

  const tan_orange = await knex('finish_colors').insert({
    name: 'Tan Orange',
    color: '#f7c5a8'
  }).returning('id')

  const light_lime = await knex('finish_colors').insert({
    name: 'Light Lime',
    color: '#eef9bf'
  }).returning('id')

  const b_red = await knex('finish_colors').insert({
    name: 'Burnt Red',
    color: '#c9485b'
  }).returning('id')

  const off_grey = await knex('finish_colors').insert({
    name: 'Off Grey',
    color: '#f5f0e3'
  }).returning('id')

  const wine_purple = await knex('finish_colors').insert({
    name: 'Wine Purple',
    color: '#470938'
  }).returning('id')

  const light_rose = await knex('finish_colors').insert({
    name: 'Light Rose',
    color: '#d8b5b5'
  }).returning('id')

  const washed_orange = await knex('finish_colors').insert({
    name: 'Washed Orange',
    color: '#ffe6cc'
  }).returning('id')

  const washed_green = await knex('finish_colors').insert({
    name: 'Washed Green',
    color: '#d2e1c8'
  }).returning('id')

  const washed_tan = await knex('finish_colors').insert({
    name: 'Washed Tan',
    color: '#f7f4e3'
  }).returning('id')

  const white = await knex('finish_colors').insert({
    name: 'White',
    color: '#ffffff'
  }).returning('id')

  const black = await knex('finish_colors').insert({
    name: 'Black',
    color: '#000000'
  }).returning('id')

  const light_grey = await knex('finish_colors').insert({
    name: 'Light Grey',
    color: '#faf4f4'
  }).returning('id')







    
};
