const list = ["Vasu", "Karan", "Aditya", "Rahul", "Santosh"];

// Simple for loop -

for (let i=0; i<list.length; i++) {
    console.log(list[i]);
}


// for in loop -

for (let i in list) {
    console.log(list[i]);
}


// for of loop -

for (let i of list) {
    console.log(i);
}


// for each loop -

list.forEach((name) => console.log(name));