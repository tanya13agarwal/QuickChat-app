import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});


const corsOptions = {
  origin: [
    process.env.CLIENT_URL,
    // "http://localhost:5173",
    // "http://localhost:4173",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// console.log(" hyy: ",process.env.CLIENT_URL);

const QUICKCHAT_TOKEN = "quickchat-token";

export { corsOptions, QUICKCHAT_TOKEN };
