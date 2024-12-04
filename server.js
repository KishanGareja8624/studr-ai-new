import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./build";

export default createRequestHandler({ build });
