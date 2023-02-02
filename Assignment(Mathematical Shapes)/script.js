let squareLength = 9;
a = 5;
b = 6;
c = 7;
r = 4;
p = (a + b + c) / 2;

console.log(
    `Diagonal of a square where each side is 9 is: 
    ${squareLength * Math.sqrt(2)}`
)

console.log(
    `Area of a triangle where the sides are 5, 6, 7 is:
    ${Math.sqrt(p * (p - a) * (p - b) * (p - c))}`
)

console.log(
    `Circumference of a circle with radius 4:
    ${2 * Math.PI * r}`
)

console.log(
    `Surface area of a circle with radius 4:
    ${Math.PI * Math.pow(r, 2)}`
)