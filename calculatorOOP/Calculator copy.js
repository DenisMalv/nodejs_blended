class Calculator {
  constructor() {}
  calculated = (operation, numbers) => {
    let result = null;
    switch (operation) {
      case "sum":
        result = numbers.reduce((acc, num) => {
          return acc + num;
        }, 0);
        console.log(result);
        break;

      case "sub":
        result = numbers.reduce((acc, num) => {
          return acc - num;
        });
        console.log(result);
        break;

      case "div":
        result = numbers.reduce((acc, num) => {
          return acc / num;
        });
        console.log(result);
        break;
      case "mult":
        result = numbers.reduce((acc, num) => {
          return acc * num;
        });
        console.log(result);
        break;
      default:
        console.log("Unknown operation type");
    }
  };
}
const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((arg) => Number(arg));

module.exports = new Calculator().calculated(operation, numbers);
