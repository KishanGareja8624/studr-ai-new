import { createRequestHandler } from '@remix-run/vercel';
import * as build from './build/index.js';

export default (req, res) => {
  try {
    return createRequestHandler({ build })(req, res);
  } catch (error) {
    console.error("Serverless function failed:", error);
    res.status(500).send("Internal Server Error");
  }
};
