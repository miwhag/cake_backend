
exports.seed = async function(knex) {
    await knex('frosting_flavor_type').del()
    await knex('frosting_flavors').del()
    await knex('frosting_type').del()

    // Frosting Flavors 

      const vanilla = await knex('frosting_flavors').insert({
        name: 'Vanilla'
      }).returning('id')

      const chocolate = await knex('frosting_flavors').insert({
        name: 'Chocolate'
      }).returning('id')

      const strawberry = await knex('frosting_flavors').insert({
        name: 'Strawberry'
      }).returning('id')

      const raspberry = await knex('frosting_flavors').insert({
        name: 'Raspberry'
      }).returning('id')

      const blackberry = await knex('frosting_flavors').insert({
        name: 'Blackberry'
      }).returning('id')

      const blueberry = await knex('frosting_flavors').insert({
        name: 'Blueberry'
      }).returning('id')

      const brown_sugar= await knex('frosting_flavors').insert({
        name: 'Brown Sugar'
      }).returning('id')

      const p_spice = await knex('frosting_flavors').insert({
        name: 'Pumpkin Spice'
      }).returning('id')

      const cac = await knex('frosting_flavors').insert({
        name: 'Cookies and Cream'
      }).returning('id')

      const lemon = await knex('frosting_flavors').insert({
        name: 'Lemon'
      }).returning('id')

      const passionfruit = await knex('frosting_flavors').insert({
        name: 'Passionfruit'
      }).returning('id')

      const mcc = await knex('frosting_flavors').insert({
        name: 'Mint Chocolate Chip'
      }).returning('id')

      const coffee = await knex('frosting_flavors').insert({
        name: 'Coffee'
      }).returning('id')

      const pb = await knex('frosting_flavors').insert({
        name: 'Peanut Butter'
      }).returning('id')

      const caramel = await knex('frosting_flavors').insert({
        name: 'Caramel'
      }).returning('id')

      const mocha = await knex('frosting_flavors').insert({
        name: 'Mocha'
      }).returning('id')

      const white_chocolate = await knex('frosting_flavors').insert({
        name: 'White Chocolate'
      }).returning('id')

 
    // Frosting Types 

      const ab = await knex('frosting_type').insert({
        name: 'American Buttercream', 
        info: 'American buttercream is made with confectioners sugar and unsalted butter. It is whipped at high speeds to create volume and contains no eggs.'
      }).returning('id')

      const fmb = await knex('frosting_type').insert({
        name: 'French Meringue Buttercream', 
        info: 'French meringue buttercream is the richest and tastiest of the three meringue buttercream\'s because it uses egg yolks instead of egg whites. Similar to the Italian meringue it also is prepared with hot liquid sugar and whipped with butter.',
      }).returning('id')

      const smb = await knex('frosting_type').insert({
        name: 'Swiss Meringue Buttercream', 
        info: 'Swiss meringue buttercream is preferred by many bakers because it doesn’t use the hot sugar syrup and instead the egg whites are heated in a double boiler with the sugar.  It is very light and delicious.',
      }).returning('id')

      const imb = await knex('frosting_type').insert({
        name: 'Italian Meringue Buttercream', 
        info: 'Italian meringue buttercream is made with egg whites, hot sugar syrup, and unsalted butter. It is a frosting that is sweeter than French or Swiss, but not as sweet as American.',
      }).returning('id')

      const ganache = await knex('frosting_type').insert({
        name: 'Ganache', 
        info: 'Ganache is mixture of chocolate and cream, used to make truffles and other chocolate candies, or as a filling in cakes and pastries',
      }).returning('id')

      const curd = await knex('frosting_type').insert({
        name: 'Curd', 
        info: 'Fruit curd is a dessert spread and topping usually made with citrus fruit, such as lemon, lime, orange, or tangerine.',
      }).returning('id')

      const wc = await knex('frosting_type').insert({
        name: 'Whipped Cream', 
        info: 'Whipped cream is made of heavy cream and sugar. Whipped at high speeds to create a light fluffy texture.',
      }).returning('id')

      const mousse = await knex('frosting_type').insert({
        name: 'Mousse', 
        info: 'Mousse is a soft prepared dessert that incorporates air bubbles to give it a light and airy texture. It can range from light and fluffy to creamy and thick, depending on preparation techniques.',
      }).returning('id')

      const ccf= await knex('frosting_type').insert({
        name: 'Cream Cheese Frosting', 
        info: 'Cream Cheese Frosting is a rich and decadent frosting made with cream cheese, butter, powdered sugar and vanilla.',
      }).returning('id')

  
    
    //Frosting Type and Flavor 
    //American Buttercream 


      await knex('frosting_flavor_type').insert({
        name: "Vanilla - American Buttercream",
        image: 'https://i.imgur.com/pcc7HKa.png',
        frosting_color: "#fffdf9",
        frosting_type_id: +ab,
        frosting_flavor_id: +vanilla,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: " Chocolate - American Buttercream",
        image: 'https://i.imgur.com/Qjz10Dk.png',
        frosting_color: "#42240c",
        frosting_type_id: +ab,
        frosting_flavor_id: +chocolate,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Strawberry - American Buttercream",
        image: 'https://i.imgur.com/WFkVi88.png',
        frosting_color: "#ffb6b6",
        frosting_type_id: +ab,
        frosting_flavor_id: +strawberry,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Raspberry - American Buttercream",
        image: 'https://i.imgur.com/QH6Uqnk.png',
        frosting_color: "#b80d57",
        frosting_type_id: +ab,
        frosting_flavor_id: +raspberry,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Blackberry - American Buttercream",
        image: 'https://i.imgur.com/LCAWcfk.png',
        frosting_color: "#512b58",
        frosting_type_id: +ab,
        frosting_flavor_id: +blackberry,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Blueberry - American Buttercream",
        image: 'https://i.imgur.com/rbjXkBv.png',
        frosting_color: "#4d4c7d",
        frosting_type_id: +ab,
        frosting_flavor_id: +blueberry,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Brown Sugar - American Buttercream",
        image: 'https://i.imgur.com/1eoWBUr.png',
        frosting_color: "#e3c4a8",
        frosting_type_id: +ab,
        frosting_flavor_id: +brown_sugar,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Pumpkin Spice - American Buttercream",
        image: 'https://i.imgur.com/gRyV9Fw.png',
        frosting_color: "#e6a157",
        frosting_type_id: +ab,
        frosting_flavor_id: +p_spice,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Cookies & Cream - American Buttercream",
        image: 'https://i.imgur.com/CoF0aje.png',
        frosting_color: "#fcf8f3",
        frosting_type_id: +ab,
        frosting_flavor_id: +cac,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Lemon - American Buttercream",
        image: 'https://i.imgur.com/CsGCmsa.png',
        frosting_color: "#ffeb99",
        frosting_type_id: +ab,
        frosting_flavor_id: +lemon,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Passionfruit - American Buttercream",
        image: 'https://i.imgur.com/i5PiQF7.png',
        frosting_color: "#f3c623",
        frosting_type_id: +ab,
        frosting_flavor_id: +passionfruit,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Mint Chocolate Chip - American Buttercream",
        image: 'https://i.imgur.com/ynqKZqO.png',
        frosting_color: "#d1f5d3",
        frosting_type_id: +ab,
        frosting_flavor_id: +mcc,
      }).returning('id')
      
      await knex('frosting_flavor_type').insert({
        name: "Coffee - American Buttercream",
        image: 'https://i.imgur.com/lqdVmU7.png',
        frosting_color: "#c7b198",
        frosting_type_id: +ab,
        frosting_flavor_id: +coffee,
      }).returning('id')
      
    
      await knex('frosting_flavor_type').insert({
        name: "Peanut Butter - American Buttercream",
        image: 'https://i.imgur.com/HjxdKeb.png',
        frosting_color: "#94784c",
        frosting_type_id: +ab,
        frosting_flavor_id: +pb,
      }).returning('id')
      
    
      await knex('frosting_flavor_type').insert({
        name: "Caramel - American Buttercream",
        image: 'https://i.imgur.com/Z2sQojt.png',
        frosting_color: "#c57f1e",
        frosting_type_id: +ab,
        frosting_flavor_id: +caramel,
      }).returning('id')
      
    
      await knex('frosting_flavor_type').insert({
        name: "Mocha - American Buttercream",
        image: 'https://i.imgur.com/5rHGDJM.png',
        frosting_color: "#412525",
        frosting_type_id: +ab,
        frosting_flavor_id: +mocha,
      }).returning('id')
      
          
      //French Meringue Buttercream

      await knex('frosting_flavor_type').insert({
        name: "Vanilla - French Meringue Buttercream",
        image: 'https://i.imgur.com/pcc7HKa.png',
        frosting_color: "#fffdf9",
        frosting_type_id: +fmb,
        frosting_flavor_id: +vanilla,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: " Chocolate - French Meringue Buttercream",
        image: 'https://i.imgur.com/Qjz10Dk.png',
        frosting_color: "#42240c",
        frosting_type_id: +fmb,
        frosting_flavor_id: +chocolate,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Strawberry - French Meringue Buttercream",
        image: 'https://i.imgur.com/WFkVi88.png',
        frosting_color: "#ffb6b6",
        frosting_type_id: +fmb,
        frosting_flavor_id: +strawberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Raspberry - French Meringue Buttercream",
        image: 'https://i.imgur.com/QH6Uqnk.png',
        frosting_color: "#b80d57",
        frosting_type_id: +fmb,
        frosting_flavor_id: +raspberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Blackberry - French Meringue Buttercream",
        image: 'https://i.imgur.com/LCAWcfk.png',
        frosting_color: "#512b58",
        frosting_type_id: +fmb,
        frosting_flavor_id: +blackberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Blueberry - French Meringue Buttercream",
        image: 'https://i.imgur.com/rbjXkBv.png',
        frosting_color: "#4d4c7d",
        frosting_type_id: +fmb,
        frosting_flavor_id: +blueberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Brown Sugar - French Meringue Buttercream",
        image: 'https://i.imgur.com/1eoWBUr.png',
        frosting_color: "#e3c4a8",
        frosting_type_id: +fmb,
        frosting_flavor_id: +brown_sugar,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Pumpkin Spice - French Meringue Buttercream",
        image: 'https://i.imgur.com/gRyV9Fw.png',
        frosting_color: "#e6a157",
        frosting_type_id: +fmb,
        frosting_flavor_id: +p_spice,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Cookies & Cream - French Meringue Buttercream",
        image: 'https://i.imgur.com/CoF0aje.png',
        frosting_color: "#fcf8f3",
        frosting_type_id: +fmb,
        frosting_flavor_id: +cac,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Lemon - French Meringue Buttercream",
        image: 'https://i.imgur.com/CsGCmsa.png',
        frosting_color: "#ffeb99",
        frosting_type_id: +fmb,
        frosting_flavor_id: +lemon,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Passionfruit - French Meringue Buttercream",
        image: 'https://i.imgur.com/i5PiQF7.png',
        frosting_color: "#f3c623",
        frosting_type_id: +fmb,
        frosting_flavor_id: +passionfruit,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Mint Chocolate Chip - French Meringue Buttercream",
        image: 'https://i.imgur.com/ynqKZqO.png',
        frosting_color: "#d1f5d3",
        frosting_type_id: +fmb,
        frosting_flavor_id: +mcc,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Coffee - French Meringue Buttercream",
        image: 'https://i.imgur.com/lqdVmU7.png',
        frosting_color: "#c7b198",
        frosting_type_id: +fmb,
        frosting_flavor_id: +coffee,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Peanut Butter - French Meringue Buttercream",
        image: 'https://i.imgur.com/HjxdKeb.png',
        frosting_color: "#94784c",
        frosting_type_id: +fmb,
        frosting_flavor_id: +pb,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Caramel - French Meringue Buttercream",
        image: 'https://i.imgur.com/Z2sQojt.png',
        frosting_color: "#c57f1e",
        frosting_type_id: +fmb,
        frosting_flavor_id: +caramel,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Mocha - French Meringue Buttercream",
        image: 'https://i.imgur.com/5rHGDJM.png',
        frosting_color: "#412525",
        frosting_type_id: +fmb,
        frosting_flavor_id: +mocha,
      }).returning('id')

      // Swiss Meringue Buttercream 

      await knex('frosting_flavor_type').insert({
        name: "Vanilla - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/pcc7HKa.png',
        frosting_color: "#fffdf9",
        frosting_type_id: +smb,
        frosting_flavor_id: +vanilla,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: " Chocolate - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/Qjz10Dk.png',
        frosting_color: "#42240c",
        frosting_type_id: +smb,
        frosting_flavor_id: +chocolate,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Strawberry - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/WFkVi88.png',
        frosting_color: "#ffb6b6",
        frosting_type_id: +smb,
        frosting_flavor_id: +strawberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Raspberry - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/QH6Uqnk.png',
        frosting_color: "#b80d57",
        frosting_type_id: +smb,
        frosting_flavor_id: +raspberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Blackberry - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/LCAWcfk.png',
        frosting_color: "#512b58",
        frosting_type_id: +smb,
        frosting_flavor_id: +blackberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Blueberry - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/rbjXkBv.png',
        frosting_color: "#4d4c7d",
        frosting_type_id: +smb,
        frosting_flavor_id: +blueberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Brown Sugar - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/1eoWBUr.png',
        frosting_color: "#e3c4a8",
        frosting_type_id: +smb,
        frosting_flavor_id: +brown_sugar,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Pumpkin Spice - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/gRyV9Fw.png',
        frosting_color: "#e6a157",
        frosting_type_id: +smb,
        frosting_flavor_id: +p_spice,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Cookies & Cream - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/CoF0aje.png',
        frosting_color: "#fcf8f3",
        frosting_type_id: +smb,
        frosting_flavor_id: +cac,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Lemon - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/CsGCmsa.png',
        frosting_color: "#ffeb99",
        frosting_type_id: +smb,
        frosting_flavor_id: +lemon,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Passionfruit - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/i5PiQF7.png',
        frosting_color: "#f3c623",
        frosting_type_id: +smb,
        frosting_flavor_id: +passionfruit,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Mint Chocolate Chip - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/ynqKZqO.png',
        frosting_color: "#d1f5d3",
        frosting_type_id: +smb,
        frosting_flavor_id: +mcc,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Coffee - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/lqdVmU7.png',
        frosting_color: "#c7b198",
        frosting_type_id: +smb,
        frosting_flavor_id: +coffee,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Peanut Butter - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/HjxdKeb.png',
        frosting_color: "#94784c",
        frosting_type_id: +smb,
        frosting_flavor_id: +pb,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Caramel - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/Z2sQojt.png',
        frosting_color: "#c57f1e",
        frosting_type_id: +smb,
        frosting_flavor_id: +caramel,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Mocha - Swiss Meringue Buttercream",
        image: 'https://i.imgur.com/5rHGDJM.png',
        frosting_color: "#412525",
        frosting_type_id: +smb,
        frosting_flavor_id: +mocha,
      }).returning('id')



      // Italian Meringue Buttercream 

      await knex('frosting_flavor_type').insert({
        name: "Vanilla - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/pcc7HKa.png',
        frosting_color: "#fffdf9",
        frosting_type_id: +imb,
        frosting_flavor_id: +vanilla,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: " Chocolate - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/Qjz10Dk.png',
        frosting_color: "#42240c",
        frosting_type_id: +imb,
        frosting_flavor_id: +chocolate,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Strawberry - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/WFkVi88.png',
        frosting_color: "#ffb6b6",
        frosting_type_id: +imb,
        frosting_flavor_id: +strawberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Raspberry - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/QH6Uqnk.png',
        frosting_color: "#b80d57",
        frosting_type_id: +imb,
        frosting_flavor_id: +raspberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Blackberry - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/LCAWcfk.png',
        frosting_color: "#512b58",
        frosting_type_id: +imb,
        frosting_flavor_id: +blackberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Blueberry - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/rbjXkBv.png',
        frosting_color: "#4d4c7d",
        frosting_type_id: +imb,
        frosting_flavor_id: +blueberry,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Brown Sugar - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/1eoWBUr.png',
        frosting_color: "#e3c4a8",
        frosting_type_id: +imb,
        frosting_flavor_id: +brown_sugar,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Pumpkin Spice - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/gRyV9Fw.png',
        frosting_color: "#e6a157",
        frosting_type_id: +imb,
        frosting_flavor_id: +p_spice,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Cookies & Cream - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/CoF0aje.png',
        frosting_color: "#fcf8f3",
        frosting_type_id: +imb,
        frosting_flavor_id: +cac,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Lemon - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/CsGCmsa.png',
        frosting_color: "#ffeb99",
        frosting_type_id: +imb,
        frosting_flavor_id: +lemon,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Passionfruit - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/i5PiQF7.png',
        frosting_color: "#f3c623",
        frosting_type_id: +imb,
        frosting_flavor_id: +passionfruit,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Mint Chocolate Chip - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/ynqKZqO.png',
        frosting_color: "#d1f5d3",
        frosting_type_id: +imb,
        frosting_flavor_id: +mcc,
      }).returning('id')

      await knex('frosting_flavor_type').insert({
        name: "Coffee - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/lqdVmU7.png',
        frosting_color: "#c7b198",
        frosting_type_id: +imb,
        frosting_flavor_id: +coffee,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Peanut Butter - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/HjxdKeb.png',
        frosting_color: "#94784c",
        frosting_type_id: +imb,
        frosting_flavor_id: +pb,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Caramel - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/Z2sQojt.png',
        frosting_color: "#c57f1e",
        frosting_type_id: +imb,
        frosting_flavor_id: +caramel,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "Mocha - Italian Meringue Buttercream",
        image: 'https://i.imgur.com/5rHGDJM.png',
        frosting_color: "#412525",
        frosting_type_id: +imb,
        frosting_flavor_id: +mocha,
      }).returning('id')


      // Ganache 

      await knex('frosting_flavor_type').insert({
        name: "Chocolate Ganache",
        image: 'https://i.imgur.com/2KiLKsH.png',
        frosting_color: "#442727",
        frosting_type_id: +ganache,
        frosting_flavor_id: +chocolate,
      }).returning('id')


      await knex('frosting_flavor_type').insert({
        name: "White Chocolate Ganache",
        image: 'https://i.imgur.com/C1u3R14.png',
        frosting_color: "#fcf8e8",
        frosting_type_id: +ganache,
        frosting_flavor_id: +white_chocolate,
      }).returning('id')


    // Curd

    await knex('frosting_flavor_type').insert(        {
      name: "Lemon Curd",
      frosting_color: "#ffeb99",  
      image: 'https://i.imgur.com/tCS1TXA.png',
      frosting_type_id: +curd,
      frosting_flavor_id: +lemon,
    }).returning('id')


    await knex('frosting_flavor_type').insert(        {
      name: "Passionfruit Curd",
      frosting_color: "#f3c623",  
      image: 'https://i.imgur.com/Mbphg8o.png',
      frosting_type_id: +curd,
      frosting_flavor_id: +passionfruit,
    }).returning('id')

    //Mousse


    await knex('frosting_flavor_type').insert(        {
      name: "White Chocolate Mousse",
      frosting_color: "#fcf8e8",  
      image: 'https://i.imgur.com/C1u3R14.png',
      frosting_type_id: +mousse,
      frosting_flavor_id: +white_chocolate,
    }).returning('id')


    await knex('frosting_flavor_type').insert(        {
      name: "Chocolate Mousse",
      frosting_color: "#42240c",  
      image: 'https://i.imgur.com/rQlLTmr.png',
      frosting_type_id: +mousse,
      frosting_flavor_id: +chocolate,
    }).returning('id')

    await knex('frosting_flavor_type').insert(        {
      name: "Strawberry Mousse",
      frosting_color: "#ffb6b6",  
      image: 'https://i.imgur.com/7sUfQlw.png',
      frosting_type_id: +mousse,
      frosting_flavor_id: +strawberry,
    }).returning('id')


    await knex('frosting_flavor_type').insert(        {
      name: "Coffee Mousse",
      frosting_color: "#c7b198",  
      image: 'https://i.imgur.com/8NZrJsE.png',
      frosting_type_id: +mousse,
      frosting_flavor_id: +coffee,
    }).returning('id')


    //Cream Cheese Frosting 

    await knex('frosting_flavor_type').insert(        {
      name: "Vanilla - Cream Cheese Frosting",
      frosting_color: "#fffdf9",  
      image: 'https://i.imgur.com/Sp2rzKo.png',
      frosting_type_id: +ccf,
      frosting_flavor_id: +vanilla,
    }).returning('id')


    await knex('frosting_flavor_type').insert(        {
      name: "Strawberry - Cream Cheese Frosting",
      frosting_color: "#ffb6b6",  
      image: 'https://i.imgur.com/rfMhc8T.png',
      frosting_type_id: +ccf,
      frosting_flavor_id: +strawberry,
    }).returning('id')


    await knex('frosting_flavor_type').insert(        {
      name: "Chocolate - Cream Cheese Frosting",
      frosting_color: "#42240c",  
      image: 'https://i.imgur.com/x4KDPhy.png',
      frosting_type_id: +ccf,
      frosting_flavor_id: +chocolate,
    }).returning('id')

    await knex('frosting_flavor_type').insert(        {
      name: "Pumpkin Spice - Cream Cheese Frosting",
      frosting_color: "#e6a157",  
      image: 'https://i.imgur.com/CL0zLIm.png',
      frosting_type_id: +ccf,
      frosting_flavor_id: +p_spice,
    }).returning('id')


    await knex('frosting_flavor_type').insert(        {
      name: "Caramel - Cream Cheese Frosting",
      frosting_color: "#c57f1e",  
      image: 'https://i.imgur.com/9ic7AO1.png',
      frosting_type_id: +ccf,
      frosting_flavor_id: +caramel,
    }).returning('id')


    //Whipped Cream

    await knex('frosting_flavor_type').insert(        {
      name: "Chocolate Whipped Cream",
      frosting_color: "#42240c",  
      image: 'https://i.imgur.com/n6HoZeG.png',
      frosting_type_id: +wc,
      frosting_flavor_id: +chocolate,
    }).returning('id')

    await knex('frosting_flavor_type').insert(        {
      name: "Vanilla Whipped Cream",
      frosting_color: "#fffdf9",  
      image: 'https://i.imgur.com/Lg93BDc.png',
      frosting_type_id: +wc,
      frosting_flavor_id: +vanilla,
    }).returning('id')


    await knex('frosting_flavor_type').insert(        {
      name: "Strawberry Whipped Cream",
      frosting_color: "#ffb6b6",  
      image: 'https://i.imgur.com/hTIbfH1.png',
      frosting_type_id: +wc,
      frosting_flavor_id: +strawberry,
    }).returning('id')

    await knex('frosting_flavor_type').insert(        {
      name: "Raspberry Whipped Cream",
      frosting_color: "#b80d57",  
      image: 'https://i.imgur.com/H1fwoWw.png',
      frosting_type_id: +wc,
      frosting_flavor_id: +raspberry,
    }).returning('id')

    await knex('frosting_flavor_type').insert({
      name: "Pumpkin Spice Whipped Cream",
      frosting_color: "#e6a157",  
      image: 'https://i.imgur.com/tYzvwhf.png',
      frosting_type_id: +wc,
      frosting_flavor_id: +p_spice,
    }).returning('id')


};

