// console.log('hello backend')
// console.log( "123")
const express = require("express");
const path = require("path");
const connectDB = require("../config/db");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");

require("colors");

const envPath = path.join(__dirname, "..", "config", ".env");

dotenv.config({ path: envPath });

const { PORT } = process.env;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes/driversRoutes"));
app.use("/api/v1", require("./routes/authRoutes"));
// app.use("/api/v1",require("./routes/teamsRoutes"))

app.use((req, res) => {
  res.status(400).json({ message: "URL not found" });
});

app.use(errorHandler);

const server = app.listen(PORT, async () => {
  await connectDB();
  console.log(`server is running on port ${PORT}`.cyan);
});

// process.on("unhandledRejection",async()=>{
//  try {
//     await connectDB();
//  } catch (error) {
//         console.log(`error ${error.message}`.red)
//         server.close(()=> process.exit(1) )
//  }
// })
