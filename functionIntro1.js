//Exercise 1.1 Create function; add, substract, multiply, divide
function addNumber(a, b) {
  return a + b;
}
console.log("Result of Function-Add =", addNumber(50, 15));

function substractNumber(a, b) {
  return a - b;
}
console.log("Result of Function-Substract =", substractNumber(50, 15));

function multiplyNumber(a, b) {
  return a * b;
}
console.log("Result of Function-Multiply =", multiplyNumber(50, 15));

function divideNumber(a, b) {
  return a / b;
}
console.log("Result of Function-Divide =", divideNumber(50, 15));

//Exercise 1.2 Create Function Info---
function info(firstName, location, hobby) {
  console.log(
    "Hi, my name is " +
      firstName +
      ". I live in " +
      location +
      " and enjoy " +
      hobby +
      "."
  );
}
info("Alexa", "Bangkok", "being ติ่งจีน & ติ่งเกา");
