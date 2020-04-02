
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('frosting_flavors').del()
    .then(function () {
      // Inserts seed entries
      return knex('frosting_flavors').insert([
        {name: 'Chocolate'},
        {name: 'Vanilla'},
        {name: 'Strawberry'},  
        {name: 'Raspberry'},
        {name: 'Blackberry'},
        {name: 'Blueberry'}, 
        {name: 'Brown Sugar'}, 
        {name: 'Pumpkin Spice'},  
        {name: 'Cookies and Cream'}, 
        {name: 'Caramel'},
        {name: 'Lemon'},
        {name: 'Passionfruit'},  
        {name: 'Mint Chocolate Chip'},
        {name: 'White Chocolate'}, 
        {name: 'Coffee'}, 
        {name: 'Peanut Butter'},
        {name: 'Caramel'}, 
        {name: 'Mocha'},
      ]);
    });
};
