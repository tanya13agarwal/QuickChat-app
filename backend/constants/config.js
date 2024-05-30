import dotenv from "dotenv";
dotenv.config();


const corsOptions = {
  origin: [
    process.env.CLIENT_URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

console.log(" hyy: ",process.env.CLIENT_URL);

const QUICKCHAT_TOKEN = "quickchat-token";

export { corsOptions, QUICKCHAT_TOKEN };
