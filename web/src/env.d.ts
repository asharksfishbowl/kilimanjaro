/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  readonly PUBLIC_RUST_API?: string;
  readonly PUBLIC_PYTHON_API?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
