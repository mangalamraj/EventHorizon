const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
// // import dotenv from "dotenv";
// dotenv.config(); // Load environment variables

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000; // Use PORT from environment variable or default to 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define your routes and endpoints here...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

async function main() {
  // Your Prisma queries go here
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
