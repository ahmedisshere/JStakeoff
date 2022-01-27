// array iterating with foreach 

var foods = ["Ice cream" , "chocolate" , "Cake" , "Pizza"];

var numbers = [1,2,3,4];

foods.forEach(function(item,i,arr){
    console.log( `index -> ${i} & item -> ${item}` );
    console.log(arr);
})