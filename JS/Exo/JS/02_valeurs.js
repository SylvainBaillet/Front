var a = 2;
// valeur attendue = 2
a = a - 1;
// valeur attendue = 1 
a++;
// valeur attendue = 2  
var b = 8;
b += 2;
// valeur attendue = 10
var c = a + b * b;
console.log(c);
// valeur attendue = 102
var d = a * b + b;
console.log(d);
// valeur attendue = 30
var e = a * (b + b);
console.log(e);
// valeur attendue = 40
var f = a * b / a;
console.log(f);
// valeur attendue = 10
var g = b / a * a;
console.log(g);
// valeur attendue = 10
document.write(e);