import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

const app = createApp(App)//.component('HelloWorld', HelloWorld);

app.mount('#app')
