// let a = process.argv[2];
// let b = process.argv[3];
// let c = process.argv[4];

// if(operator === "+"){
//     console.log(parseFloat(calc1) + parseFloat(calc2))
// }
// else if(operator === "-"){
//     console.log(parseFloat(calc1) - parseFloat(calc2))
// }
// else if(operator === "*"){
//     console.log(parseFloat(calc1) * parseFloat(calc2))
// }
// else if(operator === "/"){
//     console.log(parseFloat(calc1) / parseFloat(calc2))
// }

const [a, b, c] = [parseInt(process.argv[3]), parseInt(process.argv[4]), process.argv[2]]
const operators = [`${a + b}`, `${a - b}`, `${a * b}`, `${a / b}`, `${a % b}`, `${Math.pow(a, b)}`]
const opNames = ["add", "subtract", "multiply", "divide", "remainder", "exp"]
console.log(operators[opNames.indexOf(c)] ? operators[opNames.indexOf(c)] : 'error')