// array iteration with foreach 

var foods = ["Ice cream" , "chocolate" , "Cake" , "Pizza"];

var numbers = [1,2,3,4];



function foodMaping(item){

    return ` ${item} is a food`;

}


let array_restore = foods.map(foodMaping);

console.log(array_restore);


