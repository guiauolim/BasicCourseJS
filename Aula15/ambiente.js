

let num = [5,8,2,9];


/*
for ( var i = 0 ; i < num.length ; i++ ) {
    console.log(num[i])
}   */

for (var i in num) {
    console.log(`A poisção ${i} tem o valor de ${num[i]}`);
}

