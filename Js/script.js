let ign = "I am kicking JavaScripts big ass butt!" ;

let food = ["Burger","Pizza","Hot Dawg","Kebab"] ;

let person = {
    name: "Superleggera",
    profession: "Counter Strike",
    team: "Bangladesh",
    age: 69
}

for(var x in food){
    console.log(`Index  ${x} and item ${food[x]}`);
}

for(var y of food){
    console.log(y);
}


for(var z in person){
    console.log(`prop ${z} and value ${person[z]}`);
}

