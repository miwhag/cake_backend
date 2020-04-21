
exports.seed = function(knex) {

  return knex('cake_flavors').del()
    .then(function () {
      return knex('cake_flavors').insert([
        {name: 'Chocolate', image: 'https://i.imgur.com/8kYaj9c.png', icon:'https://i.imgur.com/86f0DxW.png', cake_color: '#46322b' },
        {name: 'Red Velvet', image: 'https://i.imgur.com/FHwT4MV.png', icon:'https://i.imgur.com/7U6gaMe.png', cake_color: '#9d0b0b'  },
        {name: 'Vanilla', image: 'https://i.imgur.com/qPRht4P.png', icon:'https://i.imgur.com/gI4ZbN9.png', cake_color: '#fcf5ee'  },
        {name: 'Lemon', image: 'https://i.imgur.com/kPWos1a.png', icon:'https://i.imgur.com/PyNpUTS.png', cake_color: '#fff591'  },
        {name: 'Raspberry', image: 'https://i.imgur.com/HjxqR7m.png', icon:'https://i.imgur.com/UltIO6P.png', cake_color: '#eca0b6'  },
        {name: 'Carrot', image: 'https://i.imgur.com/VIODiFZ.png', icon:'https://i.imgur.com/pPJypBe.png', cake_color: '#f18867'  },
        {name: 'Funfetti', image: 'https://i.imgur.com/V2SZ6XT.png', icon:'https://i.imgur.com/OoP8jgZ.png', cake_color: '#fcf5ee'  },
        {name: 'Pumpkin', image: 'https://i.imgur.com/US6p2UM.png', icon:'https://i.imgur.com/I5op57n.png', cake_color: '#ecab69'  },
        {name: 'Almond', image: 'https://i.imgur.com/AqlkTk8.png', icon:'https://i.imgur.com/mMW2MwQ.png', cake_color: '#fff1c1'  },
        {name: 'Spice', image: 'https://i.imgur.com/zIIuLKv.png', icon:'https://i.imgur.com/BfyNB3N.png', cake_color: '#e3c4a8'  },
        {name: 'Angel Food', image: 'https://i.imgur.com/CIpESCD.png', icon:'https://i.imgur.com/N3OuyVX.png', cake_color: '#fcf9f9'  }
      ]);
    });
};



