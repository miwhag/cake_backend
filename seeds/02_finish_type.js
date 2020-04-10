exports.seed = function(knex) {

  return knex('finish_type').del()
    .then(function () {
      return knex('finish_type').insert([
        {
          name: 'Naked Cake', 
          info: 'A naked cake is easily recognized by its absent or minimal outer layer of frosting, which shows off the cake\'s natural texture and filling. Some naked cakes have zero frosting on their outer edge, while others have just a wisp of buttercream', 
          image: 'https://i.ibb.co/WFgwgwk/naked.png'
        },

        {
          name: 'Buttercream', 
          info: 'A buttercream cake is your traditional buttercream smooth finish. Unlike the naked cake, there is no outer edge of cake visible as it is completely encased in a layer of buttercream.', 
          image: 'https://i.ibb.co/LZ88RwK/buttercream.png'
        },

        {
          name: 'Fondant', 
          info: 'Fondant is a playdough-like sugar paste that can be rolled out and draped over a simple or sculpted cake. It is usually kneaded until very silky and pliable and can be used to create a smooth seamless finish on cakes in any color.', 
          image: 'https://i.ibb.co/gF2ydbW/fondant.png'
        },  

        {
          name: 'Ganache', 
          info: 'A ganache finish is made mainly of heavy cream and chocolate and can be spread across a cake much like buttercream. It is decadent and delicious, however because it is made with chocolate it is limited in flavor combinations.', 
          image: 'https://i.ibb.co/cDXGcGK/ganache.png'
        },
        
        {
          name: 'Modeling Chocolate', 
          info: 'Modeling chocolate is a chocolate paste made by melting chocolate and combining it with corn syrup. It allows a similar finish to Fondant, however can be much more delicious because of it\'s chocolate base.', 
          image: 'https://i.ibb.co/tDkNRvq/modeling.png'
        }
      ]);
    });
};
