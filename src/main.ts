import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// UI IMPORTS
import TitleBold from './components/Ui/TitleBold.vue';
import TitleBoldSecondary from './components/Ui/TitleBoldSecondary.vue';
import TextGray from './components/Ui/TextGray.vue';

const app = createApp(App);

app.component('title-bold', TitleBold);
app.component('title-bold-secondary', TitleBoldSecondary);
app.component('text-gray', TextGray);

app.mount('#app');
