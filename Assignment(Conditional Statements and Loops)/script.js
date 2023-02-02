const num1 = prompt("Input the First integer", "0")
const num2 = prompt("Input the second integer", "0")

if (parseInt(num1) > parseInt(num2)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1)
}
else
  if (parseInt(num1) < parseInt(num2)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2)
  }
  else {
    console.log(num1 + " and " + num2 + " are equal")
  }

if (parseInt(num1) % 2 == 0) {
  console.log(num1 + " is even")
} else {
  console.log(num1 + " is odd")
}
if (parseInt(num2) % 2 == 0) {
  console.log(num2 + " is even")
} else {
  console.log(num2 + " is odd")
}