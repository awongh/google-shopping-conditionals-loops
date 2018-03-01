 /*

 Q1

var count = 0;
//products.items[0].kind

for (var i = 0; i < products.items.length; i++){
    if (products.items[i].kind === "shopping#product"){
    count++;
    console.log(count);
    }
}

Q2

for (var i = 0; i < products.items.length; i++){
    if (products.items[i].product.inventories[0].availability === "backorder"){
    console.log(products.items[i].product.title);
    }
}

Q3


for (var i = 0; i < products.items.length; i++){
    if (products.items[i].product.images.length > 1){
    console.log(products.items[i].product.title);
    }
}

Q4


for (var i = 0; i < products.items.length; i++){
    if (products.items[i].product.title.search("Canon") >= 0 ){
    console.log(products.items[i].product.title);
    }
}

Q5


for (var i = 0; i < products.items.length; i++){
    if (products.items[i].product.title.search("Canon") >= 0 && products.items[i].product.author.name.search("eBay") >= 0){
    console.log(products.items[i].product.title);
    }
}
*/





















