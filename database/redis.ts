import * as asyncRedis from "async-redis";
import { logger } from "../helpers/logger";

export const redisClient = asyncRedis.createClient();

redisClient.on("connect", () => logger.info("Redis connected"));
redisClient.on("error", (err) => logger.error("Connect Redis Error " + err));
