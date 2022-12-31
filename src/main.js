import { createApp } from 'vue'
import App from './App.vue'
import MainButton from './components/base/MainButton.vue'
// import DataTable from './components/base/DataTable.vue';
import TextField from './components/base/TextField.vue'
import SemiButton from './components/base/SemiButton.vue'
import IconButton from './components/base/IconButton.vue';
import routes from './routers/routes.js'
import PopupNotify from './components/base/PopUpNotify.vue'
//set up routes
// import VueRouter from 'vue-router';

const app = createApp(App)
app.component('MainButton', MainButton)
// app.component("DataTable", DataTable);
app.component('TextField', TextField)
app.component('IconButton', IconButton)
app.component('PopupNotify', PopupNotify)
app.component('SemiButton', SemiButton)
app.use(routes)
app.mount('#app')
