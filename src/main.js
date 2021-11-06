import App from './App.svelte';
import '../public/global.css';

const app = new App({
    target: document.getElementById('root'), // entry point in ../public/index.html
});

export default app;