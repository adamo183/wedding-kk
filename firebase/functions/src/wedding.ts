import * as functions from "firebase-functions";
import cors from "cors";
import { Storage } from "@google-cloud/storage";
import { Request, Response } from "express";

const corsHandler = cors({ origin: true });
const storage = new Storage();

const bucketName = "wedding-na-data.firebasestorage.app";

export const getWeddingData = functions
  .https.onRequest(async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      if (req.method !== "GET") {
        return res.status(405).send("Method Not Allowed");
      }
      const filePathInBucket = "data/info.json";
      const file = storage.bucket(bucketName).file(filePathInBucket);

      try {
        const [exists] = await file.exists();
        if (!exists) return res.status(404).send("Not found!");

        const [contents] = await file.download();
        const text = contents.toString("utf8");
        const json = JSON.parse(text);

        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader("Cache-Control", "no-store");
        return  res.status(200).json(json);
      } catch (e) {
        console.error(e);
        return res.status(500).send("Internal error");
      }
    });
  });

export const listBucketsAndFiles = functions.https.onRequest(async (req, res) => {
  try {
    const [buckets] = await storage.getBuckets();

    const result: Record<string, string[]> = {};
    for (const bucket of buckets) {
      const [files] = await bucket.getFiles();
      result[bucket.name] = files.map(file => file.name);
    }

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);

  } catch (error) {
    console.error(error);
    res.status(500).send("Błąd przy pobieraniu bucketów i plików");
  }
});