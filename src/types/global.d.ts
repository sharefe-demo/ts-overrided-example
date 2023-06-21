import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    HelloWorld: typeof import("@/components/HelloWorld.vue")["default"]
  }
}
