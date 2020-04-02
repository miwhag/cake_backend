
exports.seed = function(knex) {
  return knex('frosting_type').del()
    .then(function () {
      return knex('frosting_type').insert([
        {name: 'American Buttercream', info: 'American buttercream is made with confectioners sugar and unsalted butter. It is whipped at high speeds to create volume and contains no eggs.'},
        {name: 'French Meringue Buttercream ', info: 'French meringue buttercream is the richest and tastiest of the three meringue buttercream\'s because it uses egg yolks instead of egg whites. Similar to the Italian meringue it also is prepared with hot liquid sugar and whipped with butter. '},
        {name: 'Swiss Meringue Buttercream', info: 'Swiss meringue buttercream is preferred by many bakers because it doesn’t use the hot sugar syrup and instead the egg whites are heated in a double boiler with the sugar.  It is very light and delicious.'},
        {name: 'Italian Meringue Buttercream', info: 'Italian meringue buttercream is made with egg whites, hot sugar syrup, and unsalted butter. It is a frosting that is sweeter than French or Swiss, but not as sweet as American.'},
        {name: 'Ganache', info: 'Ganache is mixture of chocolate and cream, used to make truffles and other chocolate candies, or as a filling in cakes and pastries'},
        {name: 'Whipped Cream', info: 'Whipped cream is made of heavy cream and sugar. Whipped at high speeds to create a light fluffy texture. '},
        {name: 'Curd', info: 'Fruit curd is a dessert spread and topping usually made with citrus fruit, such as lemon, lime, orange, or tangerine.'},
        {name: 'Mousse', info: 'Mousse is a soft prepared dessert that incorporates air bubbles to give it a light and airy texture. It can range from light and fluffy to creamy and thick, depending on preparation techniques.'},
        {name: 'Cream Cheese Frosting', info: 'Cream Cheese Frosting is a rich and decadent frosting made with cream cheese, butter, powdered sugar and vanilla.'}
      ]);
    });
};
