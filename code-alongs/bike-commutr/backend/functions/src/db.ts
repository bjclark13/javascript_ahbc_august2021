import * as functions from "firebase-functions";
import { MongoClient } from "mongodb";

const uri: string = functions.config().mongodb.uri;

const client: MongoClient = new MongoClient(uri);

export const getClient = async () => {
  await client.connect();
  return client;
};


