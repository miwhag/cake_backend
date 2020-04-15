
exports.seed = function(knex) {

  return knex('cake_flavors').del()
    .then(function () {
      return knex('cake_flavors').insert([
        {name: 'Chocolate', image: 'https://i.ibb.co/bX9RJGB/chocolate.png', icon:'https://i.ibb.co/wzN4MQx/1.png', cake_color: '#46322b' },
        {name: 'Red Velvet', image: 'https://i.ibb.co/513fKNW/redvelvet.png', icon:'https://i.ibb.co/Qrzhktf/2.png', cake_color: '#9d0b0b'  },
        {name: 'Vanilla', image: 'https://i.ibb.co/D7pFWY9/vanilla.png', icon:'https://i.ibb.co/MBg8htL/7.png', cake_color: '#fcf5ee'  },
        {name: 'Lemon', image: 'https://i.ibb.co/0Xr6gX5/lemon.png', icon:'https://i.ibb.co/y6YHYq7/3.png', cake_color: '#fff591'  },
        {name: 'Raspberry', image: 'https://i.ibb.co/jDCvJKz/raspberry.png', icon:'https://i.ibb.co/sv4S2sL/5.png', cake_color: '#eca0b6'  },
        {name: 'Carrot', image: 'https://i.ibb.co/qBrrjC7/carrot.png', icon:'https://i.ibb.co/dfWNDQM/10.png', cake_color: '#f18867'  },
        {name: 'Funfetti', image: 'https://i.ibb.co/HXfgBTW/funfetti.png', icon:'https://i.ibb.co/HGVGz57/6.png', cake_color: '#fcf5ee'  },
        {name: 'Pumpkin', image: 'https://i.ibb.co/LSWt4d9/pumpkin.png', icon:'https://i.ibb.co/jGzjG1J/8.png', cake_color: '#ecab69'  },
        {name: 'Almond', image: 'https://i.ibb.co/sWqZyJm/almond.png', icon:'https://i.ibb.co/DfVVxFS/12.png', cake_color: '#fff1c1'  },
        {name: 'Spice', image: 'https://i.ibb.co/XZk20Cs/spice.png', icon:'https://i.ibb.co/DgsmjXx/9.png', cake_color: '#e3c4a8'  },
        {name: 'Angel Food', image: 'https://i.ibb.co/JRnfRLD/angel.png', icon:'https://i.ibb.co/27zj45W/11.png', cake_color: '#fcf9f9'  }
      ]);
    });
};



