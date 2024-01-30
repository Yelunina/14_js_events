// const button = document.getElementById('button');
// const name1 = document.getElementById('name1');
// const name2 = document.getElementById('name2');
// button.onclick = show;
// name1.onkeyup = valueToUpperCase;
// name2.onkeyup = function(){
//     name2.value = name2.value.toUpperCase();
// }

// function show(){
//     alert(`Hello! ${name1.value}`);
// }

// function valueToUpperCase(){
//     name1.value = name1.value.toUpperCase();
// }

// const button = document.getElementById('button');
// const name1 = document.getElementById('name1');
// const name2 = document.getElementById('name2');
// const name3 = document.getElementById('name3');
// button.onclick = show;
// name1.onkeyup = valueToUpperCase;
// name2.onkeyup = valueToUpperCase;
// name3.onkeyup = valueToUpperCase;
button.onclick = show;
const nameBox = document.getElementById('nameBox');
const names = nameBox.children;
nameBox.onkeyup = valueToUpperCase;

// for (let i = 0; i < nameBox.children.length; i++) {
//     nameBox.children[i].onkeyup = valueToUpperCase;
// }

function show(event) {
    // console.log(event.target);
    // alert(`Hello! ${name1.value}`);
    for (let i = 0; i < names.length; i++) {
        // console.log(names[i].firstElementChild.value);
        if (names[i].firstElementChild.value.trim()) {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(names[i].firstElementChild.value));
        document.body.appendChild(p);
        names[i].firstElementChild.value = '';
    }
}
}

function valueToUpperCase(event) {
    // console.log(event.target); // event.target -это обьект, на котором произошло событие
    event.target.value = event.target.value.toUpperCase();
}
