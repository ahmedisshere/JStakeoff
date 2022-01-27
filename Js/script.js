let friend = {

    firstname: "Tabib",
    lastname: "Gondafi",
    dob: "1-10-1996",

    fullname : function(){
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(friend.firstname);
console.log(friend.fullname());


let str = "superleggeraa";
console.log(str.length);
console.log(str.slice());