/// <reference types="astro/client" />
interface ImportMetaEnv {
  PUBLIC_ENABLE_MAINTENANCE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
