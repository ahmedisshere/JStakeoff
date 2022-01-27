// array iteration with foreach 

var foods = ["Ice cream" , "chocolate" , "Cake" , "Pizza"];

var numbers = [1,2,3,4];

// 1st parameter is for item
// 2nd parameter is for index
// 3rd parameter is for the whole array

let printEverything = function(item,i,arr){

    console.log( `index -> ${i} & item -> ${item}` );

}

foods.forEach(printEverything);

