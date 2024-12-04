import { createRequestHandler } from '@remix-run/vercel';
import * as build from './build';

export default (req, res) => {
  return createRequestHandler({ build })(req, res);
};
