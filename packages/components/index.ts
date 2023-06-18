import { App } from 'vue';
import * as components from './src/index';

export * from './src/index';

export default {
  install: (app: App) => {
    Object.keys(components).forEach(c => {
      app.use(components[c as keyof typeof components]);
    });
  }
};
