/// <reference types="vite/client" />

/**
 * @see https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * @see https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */
interface ImportMetaEnv {
  readonly VITE_SAMPLE: number;
}
