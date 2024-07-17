import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import rateLimiter from "express-rate-limit";
import path from "path";
const __dirname = path.resolve();

import connectDB from "./db/dbConfig.js";
import DATA from "./models/DATA.js";

const app = express();

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 10000,
  })
);

app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://apis.google.com"],
        connectSrc: ["'self'", "https://identitytoolkit.googleapis.com"],
      },
    },
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(xss());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/items", async (req, res) => {
  const storedItems = await DATA.find();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

// app.get("/add", async (req, res) => {
//   try {
//     const res = await DATA.insertMany(items);
//     console.log("successfully", res);
//     res.json({ msg: "successful" });
//   } catch (error) {
//     console.log("on add error", error);
//   }
// });

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("server start error", error);
  }
};

start();
