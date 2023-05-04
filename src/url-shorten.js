import express from "express";
import { BASE_URL } from "../config/index.js";
import db from "./db/index.js";
import { generateUUID, numToBase62 } from "./utils/id-generator.js";
import redis from "./utils/redisService.js";
const router = express.Router();

router.post("/shorten", async (req, res, next) => {
  try {
    const { longURL } = req.body;
    const findUrl = await db("users").where({ longURL: longURL }).first();
    if (findUrl) {
      return res.status(200).json({
        statusCode: 200,
        message: "fetched",
        data: { shortURL: `${BASE_URL}/${findUrl.shortURL}`, longURL: findUrl.longURL },
      });
    }
    const uuid = generateUUID();
    const shortURL = numToBase62(uuid);
    await db("users").insert({
      shortURL: shortURL,
      longURL: longURL,
      uuid: uuid,
    });
    const params = {
      shortURL: `${BASE_URL}/${shortURL}`,
      longURL: longURL,
    };
    await redis.hmset(params.shortURL, params);
    await redis.expire(params.shortURL, 259200);
    res.status(200).json({ statusCode: 200, message: "created", data: params });
  } catch (e) {
    return res.status(500).json({
      statusCode: 500,
      messsage: e.messsage,
    });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let url;
    const { id } = req.params;
    const exists = await redis.exists(id);
    if (exists) {
      url = await redis.hgetall(id);
      res.redirect(301, url.longURL);
    }
    if (!exists) {
      const findUrl = await db("users").where({ shortURL: id }).first();
      if (findUrl) {
        await redis.hmset(findUrl.shortURL, {
          shortURL: findUrl.shortURL,
          longURL: findUrl.longURL,
        });
        url = findUrl.longURL
        await redis.expire(findUrl.shortURL, 259200);
        //res.redirect(301, findUrl.longURL);
      } else {
        res.status(404).json({ statusCode: 404, message: "URL not found" });
      }
    }
    res.status(200).json({statusCode:200, data:url })
  } catch (e) {
    return res.status(500).json({
      statusCode: 500,
      messsage: e.messsage,
    });
  }
});
export default router;
