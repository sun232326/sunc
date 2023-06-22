import { createApp } from 'vue';
import sunc from '@sunc/components';
import App from './App.vue';

const app = createApp(App);

app.use(sunc);
console.log('hhh', 99, 88);
app.mount('#play');
