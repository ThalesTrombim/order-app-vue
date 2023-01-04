import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// UI IMPORTS
import TitleBold from './components/Ui/TitleBold.vue';

const app = createApp(App);

app.component('title-bold', TitleBold);

app.mount('#app');
