
exports.seed = function(knex) {

  return knex('cake_flavors').del()
    .then(function () {
      return knex('cake_flavors').insert([
        {name: 'Chocolate', image: 'https://i.ibb.co/bX9RJGB/chocolate.png', cake_color: '#46322b' },
        {name: 'Red Velvet', image: 'https://i.ibb.co/513fKNW/redvelvet.png', cake_color: '#9d0b0b'  },
        {name: 'Vanilla', image: 'https://i.ibb.co/D7pFWY9/vanilla.png', cake_color: '#fcf5ee'  },
        {name: 'Lemon', image: 'https://i.ibb.co/0Xr6gX5/lemon.png', cake_color: '#fff591'  },
        {name: 'Raspberry', image: 'https://i.ibb.co/jDCvJKz/raspberry.png', cake_color: '#eca0b6'  },
        {name: 'Carrot', image: 'https://i.ibb.co/qBrrjC7/carrot.png', cake_color: '#f18867'  },
        {name: 'Funfetti', image: 'https://i.ibb.co/HXfgBTW/funfetti.png', cake_color: '#fcf5ee'  },
        {name: 'Pumpkin', image: 'https://i.ibb.co/LSWt4d9/pumpkin.png', cake_color: '#ecab69'  },
        {name: 'Almond', image: 'https://i.ibb.co/sWqZyJm/almond.png', cake_color: '#fff1c1'  },
        {name: 'Spice', image: 'https://i.ibb.co/XZk20Cs/spice.png', cake_color: '#e3c4a8'  },
        {name: 'Angel Food', image: 'https://i.ibb.co/JRnfRLD/angel.png', cake_color: '#fcf9f9'  }
      ]);
    });
};
