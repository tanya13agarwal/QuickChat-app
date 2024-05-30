const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// [
//     process.env.CLIENT_URL,
//     "http://localhost:5173",
//     "http://localhost:4173",
//   ],

const QUICKCHAT_TOKEN = "quickchat-token";

export { corsOptions, QUICKCHAT_TOKEN };
