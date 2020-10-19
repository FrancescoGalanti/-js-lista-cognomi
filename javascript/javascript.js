/*
**javascript
**/



// prima variabile //
 var array = ['bianchi', 'rossi', 'duzioni', 'balsano', 'giorgini'];


// Push nome utente //

array.push(prompt("Quale il tuo cognome ?"));

// console.log(array);

// alphabetic order //
array.sort();


// seconda variabile //

var items = "";

// output


for(var i = 0; i < array.sort().length; i++) {
   var item = array.sort()[i];

   items += "<li>" + item + "</li>"
}

console.log(items)

document.getElementById('shopping-list'). innerHTML = items;

// terza variabile //
var arrIndex = array.indexOf("galanti") + 1;

console.log(arrIndex);
