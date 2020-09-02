let products = [
{"name": "Prod1", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod2", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod3", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod4", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod5", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod6", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod7", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod8", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod9", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod10", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
];

let obj_list = [];

class ParentProduct{
    constructor(name) {
        this.name = name;
    }

    show_name() {
        console.log(`Name of this product is ${this.name}`);
    }
}

// _____________TASK #1_____________ //
//creating const 'currency'
const currency = ' PLN';

//generating int number
function getGenNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

//generating amounts and prices into 'products[]'
for(let i=0;i<products.length;i++){
    let min = products[i]['amount']['min'];
    let max = products[i]['amount']['max'];
    products[i]['amount'] = getGenNum(min, max);
    min = products[i]['price']['min'];
    max = products[i]['price']['max'];
    products[i]['price'] = getGenNum(min, max);
}
//checking if generating works
//console.log(products[2].name, products[2].amount, products[2].price)

//creating Product class 
class Product extends ParentProduct{
    constructor(name, amount, price) {
        super(name);
        this.amount = amount;
        this.price = price;
      }
    show_price(){
        console.log(this.name + ' price is ' + this.price + currency);
    }
    show_amount(){
        console.log(this.name + ' amount is ' + this.amount);
    }
    calculate_total_value(){
        console.log(this.name + ' total value is ' + (this.amount * this.price) + currency);
    }
}

//creating products and filling 'obj_list[]' with them 
for(let i=0;i<products.length;i++){
    let amount = products[i]['amount'];
    let price = products[i]['price'];
    let numb = i+1;
    numb = numb.toString();
    obj_list[i] = new Product('Prod'+numb, amount, price); 
}

//checking if methods works
/*obj_list[1].show_price();
obj_list[0].show_amount();
obj_list[0].calculate_total_value();
obj_list[0].show_name();*/

//creating class 'Value'
class Value{
    constructor(name, value){
    this.name = name;
    this.value = value;
}}

//filling val_list[] - table/list with values
let val_list = [];
for(let i=0;i<obj_list.length;i++){
    let numb = i+1;
    numb = numb.toString();
    val_list[i] = new Value('Prod'+numb, (obj_list[i].amount*obj_list[i].price));
//  Checking if loop works properly 
//  console.log(val_list[i].name, val_list[i].value);
}

//___converting into txt stored in 'content' variable___

//import val_list[] into content
let row_width = 40;
let content ='';
content += "Product Name" + new Array(20).join(" ") + "Value\n";
content += "********" + new Array(20).join(" ") + "   ********\n";

for (let i = 0; i < val_list.length; i++) {
    content += val_list[i].name + new Array(row_width - val_list.length).join(" ");
    content += val_list[i].value;
    content += "\n";
}
//import obj_list[] into content
content += "Product Name" + new Array(20).join(" ") + "Amount" + new Array(28).join(" ") + "Price\n";
content += "********" + new Array(23).join(" ") +'********'+ new Array(25).join(" ")+ "********\n";
for (let i = 0; i < obj_list.length; i++) {
    content += obj_list[i].name + new Array(row_width - obj_list.length).join(" ");
    content += obj_list[i].amount + new Array(row_width - obj_list.length).join(" ");
    content += obj_list[i].price;
    content += "\n";
}
//import products[] into content
content += "Product Name" + new Array(20).join(" ") + "Amount" + new Array(28).join(" ") + "Price\n";
content += "********" + new Array(23).join(" ") +'********'+ new Array(25).join(" ")+ "********\n";
for (let i = 0; i < obj_list.length; i++) {
    content += products[i].name + new Array(row_width - products.length).join(" ");
    content += products[i].amount + new Array(row_width - products.length).join(" ");
    content += products[i].price;
    content += "\n";
}
//Download 'results_01.txt' function
function download() {
    let pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    pom.setAttribute('download', 'results_01');

    if (document.createEvent) {
        let event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}