// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import routes from "./routes/tracker";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);

export const api = functions.https.onRequest(app);
