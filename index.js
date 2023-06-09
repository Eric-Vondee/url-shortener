import createError from "http-errors";
import cors from "cors";
import compression from "compression";
import express from "express";
import { BASE_URL, NODE_ENV, PORT } from "./config/index.js";
import Router from "./src/url-shorten.js";
import helmet from "helmet";
import { limiter } from "./middleware/ratelimiter.js";
import * as Sentry from "@sentry/node";
const app = express();

const corsConfig = {
  origin:
    NODE_ENV === "production"
      ? ["http://localhost:5173", BASE_URL]
      : ["http://localhost:5173"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(limiter);
app.disable("x-powered-by");
app.use(cors(corsConfig));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(compression());
app.set("trust proxy", true);

// Security
if (NODE_ENV === "production") {
  app.use(helmet());
}

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to Asgaard",
  });
});

app.use("/", Router);
app.use(Sentry.Handlers.errorHandler());

//Catch 404 and forard to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    status: "ERROR",
    message: err.message,
    payload: { ...err },
  });
});

app.listen(PORT, () => console.log(`URL Shortener is live on port http://0.0.0.0.:${PORT}`));
