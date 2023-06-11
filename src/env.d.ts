/// <reference types="astro/client" />
interface ImportMetaEnv {
  ENABLE_MAINTENANCE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
