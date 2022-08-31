/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


interface ImportMetaEnv {
  readonly j: number
  readonly VITE_APP_OO: string
  readonly VITE_APP_XXOO: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
