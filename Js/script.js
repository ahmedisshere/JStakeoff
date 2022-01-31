let val;

val = this;
val = window;
val = window.document;
val = document;
val = document.all;
val = document.all.length;
val = document.all[7];
val = document.domain;
val = document.URL;
val = document.head;
val = document.doctype;

val = document.forms;
val = document.forms[0];
val = document.forms[0].method;

val = document.links;
val = document.links[1];
val = document.links[1].href;
val = document.links[1].className;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

val = document.links;

links = document.links;

let linkArr = Array.from(links);

linkArr.forEach(function (link) {

    console.log(link);

})



console.log(val);