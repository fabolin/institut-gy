// src/lib/jsxConvertersServer.tsx (avec payloadcms-lexical-ext)
import { JSXConverters } from 'payloadcms-lexical-ext';
// ...

export const jsxConverters = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...JSXConverters,
  // tes converters custom
});
