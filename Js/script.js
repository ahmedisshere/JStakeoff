// Map ->>

let myMap = new Map(

    [
        ["first key", 10],
        ["second key", "fatman"]
    ]
);

myMap.set("third key", 69);

// console.log(myMap);

// for(let x of myMap.values()){

//     console.log(x);
// }

// foreach -> generally in foreach loop, first parameter passes value and second parameter passes index, But in MAP first parameter passes value and second parameter passes KEY**

// myMap.forEach((x,y)=>{    // -> foreach works differently for map parameter wise
//     console.log(x,y);
// })


// -->> CONVERTING MAP TO ARRAY -->>

// let arr = Array.from(myMap); -> converting

// let arr = Array.from(myMap.keys()); // -> getting just the keys in the array

let arr = Array.from(myMap.values()); // -> getting the valus 

console.log(arr);
