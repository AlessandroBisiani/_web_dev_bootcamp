var faker = require('faker');

for(var i=0 ; i<10 ; i++){
    console.log(output = faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}