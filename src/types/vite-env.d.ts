/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 自定义的环境变量
  readonly VITE_IMG_BASE_URL: string;
  readonly VITE_BASE_API_URL: string;
  readonly VITE_MOCK_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
