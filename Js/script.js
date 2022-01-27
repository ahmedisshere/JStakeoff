// array iteration with foreach 

var foods = ["Ice cream" , "chocolate" , "Cake" , "Pizza"];

var numbers = [1,21,32,4];



function foodMaping(item){

    return ` ${item} is a food`;

}


let array_restore = foods.map(foodMaping);

let array_square = numbers.map(function(item){

    return item*item;
})

console.log(array_restore);
console.log(array_square);


