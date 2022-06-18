// sum
// sub
// mult
// div
// console.log(process.argv);
const [operation, ...args] = process.argv.slice(2);
// console.log("operation", operation);
// console.log("args", args);

const numbers = args.map((arg) => Number(arg));
// if (operation === "sum") {
//   const result = numbers.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
//   console.log(result);
// }

// if (operation === "sub") {
//   const result = numbers.reduce((acc, num) => {
//     return acc - num;
//   });
//   console.log(result);
// }

// if (operation === "div") {
//   const result = numbers.reduce((acc, num) => {
//     return acc / num;
//   });
//   console.log(result);
// }

// if (operation === "mult") {
//   const result = numbers.reduce((acc, num) => {
//     return acc * num;
//   });
//   console.log(result);
// }

const calculated = (operation, numbers) => {
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
calculated(operation, numbers);

// (() => {
//   let result = null;
//   switch (operation) {
//     case "sum":
//       result = numbers.reduce((acc, num) => {
//         return acc + num;
//       }, 0);
//       console.log(result);
//       break;

//     case "sub":
//       result = numbers.reduce((acc, num) => {
//         return acc - num;
//       });
//       console.log(result);
//       break;

//     case "div":
//       result = numbers.reduce((acc, num) => {
//         return acc / num;
//       });
//       console.log(result);
//       break;
//     case "mult":
//       result = numbers.reduce((acc, num) => {
//         return acc * num;
//       });
//       console.log(result);
//       break;
//     default:
//       console.log("Unknown operation type");
//   }
// })(operation, numbers);
