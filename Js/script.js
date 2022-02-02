// event listener ->>

document.querySelector('#name').addEventListener('focus',test);

document.querySelector('#name').addEventListener('keyup',pop);


function test(e) {

    this.style.background = "teal";

}


function pop(e) {

    document.getElementById('demo').innerText = this.value;
    
}

