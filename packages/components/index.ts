import * as components from './src/index';
import type { App } from 'vue';

export * from './src/index';

export default {
  install: (app: App) => {
    Object.keys(components).forEach(c => {
      app.use(components[c as keyof typeof components]);
    });
  }
};
