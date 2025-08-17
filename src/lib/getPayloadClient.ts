// src/lib/getPayloadClient.ts

import { getPayload } from 'payload';
import config from '@/payload.config';

let cached = globalThis.payload;

if (!cached) {
  cached = globalThis.payload = { client: null, promise: null };
}

export const getPayloadClient = async () => {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = getPayload({
      mongoURL: process.env.MONGODB_URI as string,
      secret: process.env.PAYLOAD_SECRET as string,
      config,
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.client;
};
