/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


interface ImportMetaEnv {
  readonly VITE_XX: number
  readonly VITE_OO: string
  readonly VITE_XXOO: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
