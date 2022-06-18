// https://nodejs.dev/learn/working-with-folders-in-nodejs  <-- ИЗУЧИТЬ !

const path = require("path");
const fs = require("fs/promises");

// const dataPath = path.resolve("data", "den.txt");

const dataPath = path.join(__dirname, "..", "data", "den.txt");

// console.log(path);
// console.log(__dirname);
// console.log(__filename);
// console.log(dataPath);

const readFile = async () => {
  try {
    const data = await fs.readFile(dataPath, { encoding: "utf-8" });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    const data = await fs.writeFile(dataPath, "hello", { encoding: "utf-8" });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const appendToFile = async () => {
  try {
    const data = await fs.appendFile(dataPath, "\nYevhenia Ukolova", {
      encoding: "utf-8",
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const removeFromFile = async () => {
  try {
    const data = await fs.unlink(dataPath);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const createFile = async () => {
  try {
    const data = await fs.appendFile(dataPath, "Denis Malniev", {
      encoding: "utf-8",
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

(() => {
  createFile();
})();
