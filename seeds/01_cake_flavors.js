
exports.seed = function(knex) {

  return knex('cake_flavors').del()
    .then(function () {
      return knex('cake_flavors').insert([
        {name: 'Chocolate', image: 'https://i.ibb.co/bX9RJGB/chocolate.png' },
        {name: 'Red Velvet', image: 'https://i.ibb.co/513fKNW/redvelvet.png' },
        {name: 'Vanilla', image: 'https://i.ibb.co/D7pFWY9/vanilla.png' },
        {name: 'Lemon', image: 'https://i.ibb.co/0Xr6gX5/lemon.png' },
        {name: 'Raspberry', image: 'https://i.ibb.co/jDCvJKz/raspberry.png' },
        {name: 'Carrot', image: 'https://i.ibb.co/qBrrjC7/carrot.png' },
        {name: 'Funfetti', image: 'https://i.ibb.co/HXfgBTW/funfetti.png' },
        {name: 'Pumpkin', image: 'https://i.ibb.co/LSWt4d9/pumpkin.png' },
        {name: 'Almond', image: 'https://i.ibb.co/sWqZyJm/almond.png' },
        {name: 'Spice', image: 'https://i.ibb.co/XZk20Cs/spice.png' },
        {name: 'Angel Food', image: 'https://i.ibb.co/JRnfRLD/angel.png' }
      ]);
    });
};
