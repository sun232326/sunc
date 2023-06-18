import '@vue/runtime-core';

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    SButton: typeof import('../packages/components/index')['Button'];
  }
}
export { };
