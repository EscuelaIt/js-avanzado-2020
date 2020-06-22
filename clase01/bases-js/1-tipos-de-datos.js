var x;

console.log( typeof x );

var y = null;
console.log(typeof y);

var z = "hola";
console.log(z, typeof z);

z = 67;
console.log(z, typeof z);

if (x === y) {
  console.log('son iguales');
}

console.log(typeof { escuela: "EscuelaIT" });
console.log(typeof []);

console.log(typeof function () { })

console.log(Number.MAX_SAFE_INTEGER, typeof Number.MAX_SAFE_INTEGER);
var max = Number.MAX_SAFE_INTEGER + 1;
var max2 = Number.MAX_SAFE_INTEGER + 2;

console.log(max, typeof max, max2, typeof max2, max === max2);

const big = 2n ** 53n;
console.log(big, typeof big, typeof 2n);


